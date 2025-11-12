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
    private function processElements(Object $value): array
    {
        $elementArray = $value->toArray();

        // Recursively process children if schema exists
        if (!empty($value->attributes['schema'])) {
            $children = [];
            foreach ($value->attributes['schema'] as $child) {
                self::$elementsKey[] =  $value->attributes['name'] ?? '';
                if (is_array($child)) {
                    $child['dataPath'] = implode('.', self::$elementsKey);
                    $children[] = $child;
                } else {

                    $children[] = $this->processElements($child); // numeric keys preserved
                }
            }
            $elementArray['schema'] = $children;
        }

        
        self::$elementsKey = [];
        return $elementArray; // numeric array entry
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
            $elements[] = $this->processElements($value); // numeric array
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