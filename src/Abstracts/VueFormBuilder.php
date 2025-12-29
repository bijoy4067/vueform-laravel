<?php

namespace LaravelVueForm\Abstracts;

use LaravelVueForm\Controllers\FormDataController;
use LaravelVueForm\Elements\Tabs\FormLanguages;
use LaravelVueForm\Elements\Tabs\FormStepsElement;
use LaravelVueForm\Elements\Tabs\FormTabsElement;
use LaravelVueForm\Elements\Vueform;

/**
 * VueFormBuilder
 * ==============
 *
 * This is the main base class for building VueForm schemas using PHP.
 *
 * Purpose (in simple words):
 * - You define a form in PHP
 * - This class converts it into a Vue-friendly schema
 * - Vue renders the form in the browser
 *
 * This class does NOT handle UI rendering logic.
 * It only prepares clean, structured data for Vue.
 *
 * Flow overview:
 * 1. buildForm() → developer defines form elements
 * 2. processElements() → normalize + resolve paths
 * 3. build() → return array OR rendered Vue view
 * 4. getFormValidationRules() → Laravel validation rules
 */
abstract class VueFormBuilder
{
    /** Form submit URL (optional). Auto-generated if null. */
    protected static $actionUrl = null;

    /** HTTP method used when submitting the form */
    protected static $method = 'POST';

    /** Final VueForm schema after processing */
    protected static $schema = [];

    /** Rendering mode (inline, modal, etc.) */
    protected static $formMode = 'inline';

    /**
     * Stack used to track parent element names.
     * Helps build nested data paths like: user.address.street
     */
    private static array $elementsKey = [];

    /**
     * Lookup table for element names → full data paths
     * Used to resolve conditional logic dependencies
     */
    private static array $lookup = []; // name => full path lookup

    /**
     * Developers define their form structure here.
     * Must return a Form object or compatible structure.
     * @return \LaravelVueForm\Elements\Vueform
     */
    abstract protected function buildForm();

    /**
     * Converts element objects into plain arrays.
     *
     * Why this exists:
     * - Vue needs JSON-friendly data
     * - PHP objects are normalized here
     * - Nested schemas are handled recursively
     */
    private static function processElements(object $value): array
    {

        // Convert element object into array format
        $elementArray = $value->toArray();

        if (!empty($value->attributes['schema'])) {
            $children = [];
            foreach ($value->attributes['schema'] as $child) {

                // Push current element name to the path stack
                self::$elementsKey[] = $value->attributes['name'] ?? '';

                if (is_array($child)) {

                    // Build full dot-notated data path
                    $child['dataPath'] = implode('.', array_filter(self::$elementsKey));

                    // Save path for condition resolution
                    if (!empty($child['name'])) {
                        self::$lookup[$child['name']] = $child['dataPath'];
                    }

                    // Replace condition field names with full data paths
                    if (isset($child['conditions'])) {
                        foreach ($child['conditions'] as $conditionKey => $condition) {
                            $targetName = $condition[0]; // e.g. 'first_name'
                            if (isset(self::$lookup[$targetName])) {
                                // Replace with full datapath
                                $child['conditions'][$conditionKey][0] = self::$lookup[$targetName];
                            }
                        }
                    }

                    // Handle nested child elements (groups, lists, etc.)
                    if (array_key_exists('schema', $child) && is_array($child['schema'])) {
                        foreach ($child['schema'] as $value) {
                            if (is_object($value)) {
                                $children[] = self::processElements($value);
                                continue;
                            }
                        }
                    } else {
                        $children[] = $child;
                    }
                } else {
                    $children[] = self::processElements($child);
                }

                // Remove current element from path stack
                array_pop(self::$elementsKey); // restore stack
            }
            $elementArray['schema'] = $children;
        }
        return $elementArray;
    }

    /**
     * Builds the final form output.
     *
     * Modes:
     * - 'html'  → rendered Vue component
     * - 'array' → raw schema data
     */
    public function build($response = 'html'): string|array
    {
        $allowedTypes = [
            Vueform::class,
            FormTabsElement::class,
            FormLanguages::class,
            FormStepsElement::class,
        ];

        $isValid = false;

        foreach ($allowedTypes as $type) {
            if ($this->buildForm() instanceof $type) {
                $isValid = true;
                break;
            }
        }

        if (!$isValid) {
            throw new \Exception(
                'buildForm() must return a valid VueForm element instance of ' . implode(', ', $allowedTypes)
            );
        }
        // Get raw form definition from child class
        $form = $this->buildForm()->toArray();

        $elements = [];
        foreach ($form['schema'] as $value) {
            $elements[] = self::processElements($value); // numeric array
        }

        // Set submit endpoint (custom or auto-generated)
        $form['endpoint'] = static::$actionUrl ?? route('laravel-vue-form.processData', FormDataController::encodeScope(static::class));
        $form['schema'] = $elements;
        static::$schema = $form;
        // dd(static::$schema);
        if ($response === 'array') {
            return static::$schema;
        }
        // Render Vue form view
        return view('vueForm::vueform-' . static::$formMode, [
            'formData' => static::$schema,
            'formMode' => static::$formMode,
        ])->render();
    }

    /**
     * Loads required VueForm CSS and JavaScript assets
     */
    public static function loadAssets()
    {
        return view('vueForm::components.core.asset-load');
    }

    /**
     * Extract Laravel validation rules from the form schema.
     *
     * Output format:
     * field.path => ['required', 'string', ...]
     */
    public function getFormValidationRules($schema = null, $parentPath = ''): array
    {
        $rules = [];
        $schema = $schema ?? $this->build('array')['schema'];
        $parentPath = '';
        foreach ($schema as $element) {
            // If element has a name & rules
            if (!empty($element['name']) && !empty($element['rules'])) {
                // Register validation rules for this field
                $field = $parentPath
                    ? "{$parentPath}.{$element['name']}"
                    : $element['name'];

                $rules[$field] = $element['rules'];
            }

            // Recursively collect rules from nested elements
            if (!empty($element['schema']) && is_array($element['schema'])) {
                $nestedPath = !empty($element['name'])
                    ? ($parentPath ? "{$parentPath}.{$element['name']}" : $element['name'])
                    : $parentPath;

                $rules = array_merge(
                    $rules,
                    $this->getFormValidationRules($element['schema'], $nestedPath)
                );
            }
        }

        return $rules;
    }
}
