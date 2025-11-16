<?php

namespace LaravelVueForm\Abstracts;

use LaravelVueForm\Controllers\FormDataController;

abstract class VueFormBuilder
{
    /**
     * @var string The form submission URL endpoint.
     */
    protected static $actionUrl = null;

    /**
     * @var string The HTTP method to be used for form submission.
     */
    protected static $method = 'GET';

    /**
     * @var array The complete form schema to be passed to VueFormBuilder.
     */
    protected static $schema = [];

    protected static $formMode = 'inline';
    private static array $elementsKey = [];
    private static array $lookup = []; // name => full path lookup

    /**
     * Define the form structure.
     * 
     * Each subclass must implement this method to specify the form fields
     * and their configuration.
     *
     * @return array The raw form structure before being converted to a Vue schema.
     */
    abstract protected function buildForm(): array;

    /**
     * Process a single form element object into an array.
     * Keeps numeric array keys to allow multiple elements of the same type.
     *
     * @param object $value
     * @return array
     */
    private static function processElements(object $value): array
    {
        $elementArray = $value->toArray();

        if (!empty($value->attributes['schema'])) {
            $children = [];
            foreach ($value->attributes['schema'] as $child) {
                
                // Track parent keys
                self::$elementsKey[] = $value->attributes['name'] ?? '';

                if (is_array($child)) {

                    // Build the child's dataPath
                    $child['dataPath'] = implode('.', array_filter(self::$elementsKey));

                    // Store in lookup for condition path resolving
                    if (!empty($child['name'])) {
                        self::$lookup[$child['name']] = $child['dataPath'];
                    }

                    // Process conditions
                    if (isset($child['conditions'])) {
                        foreach ($child['conditions'] as $conditionKey => $condition) {
                            $targetName = $condition[0]; // e.g. 'first_name'
                            if (isset(self::$lookup[$targetName])) {
                                // Replace with full datapath
                                $child['conditions'][$conditionKey][0] = self::$lookup[$targetName];
                            }
                        }
                    }
                    $children[] = $child;
                } else {
                    $children[] = self::processElements($child);
                }

                array_pop(self::$elementsKey); // restore stack
            }
            $elementArray['schema'] = $children;
        }
        return $elementArray;
    }

    /** 
     * Build the Vue form data and render the HTML component.
     *
     * @return string The rendered HTML string for embedding the VueFormBuilder.
     */
    public function build(): string
    {
        $elements = [];

        // Loop through all defined form elements and prepare their schema
        foreach ($this->buildForm() as $value) {
            $elements[] = self::processElements($value); // numeric array
        }

        // Prepare the final VueFormBuilder schema configuration
        static::$schema = [
            'method' => static::$method,
            'endpoint' => static::$actionUrl ?? route('laravel-vue-form.processData', FormDataController::encodeScope(static::class)),
            'validateOn' => 'step|change',
            // 'displayMessages' => true,
            'displayErrors' => true,
            'size' => 'lg',
            'schema' => $elements, // numeric array preserved
            'columns' => [
                'container' => 1,
            ],
        ];

        // dd($elements);
        return view('vueForm::vueform-' . static::$formMode, [
            'formData' => static::$schema,
            'formMode' => static::$formMode,
        ])->render();
    }

    public static function loadAssets()
    {
        return view('vueForm::components.core.asset-load');
    }
}