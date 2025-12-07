<?php

namespace LaravelVueForm\Elements\Structure;

use LaravelVueForm\Builder\FormSchemaBuilder;

class ObjectElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'addClass' => 'array|object|string|function',
        'addClasses' => 'object|function',
        'after' => 'object|string|number',
        'before' => 'object|string|number',
        'between' => 'object|string|number',
        'columns' => 'object|string|number',
        'conditions' => 'array',
        'default' => 'object',
        'description' => 'string|object',
        'displayErrors' => 'boolean',
        'embed' => 'boolean',
        'fieldName' => 'string|object',
        'formatData' => 'function',
        'formatLoad' => 'function',
        'id' => 'string',
        'info' => 'string|object',
        'infoPosition' => 'string',
        'inline' => 'boolean',
        'label' => 'string|object|function',
        'messages' => 'object',
        'name' => 'string|number',
        'overrideClass' => 'array|object|string|function',
        'overrideClasses' => 'object|function',
        'presets' => 'array',
        'removeClass' => 'array|object|function',
        'removeClasses' => 'object|function',
        'replaceClass' => 'object|function',
        'replaceClasses' => 'object|function',
        'rules' => 'array|string|object',
        'schema' => 'object',
        'size' => 'string',
        'slots' => 'object',
        'submit' => 'boolean',
        'templates' => 'object',
        'view' => 'string',
        'views' => 'object',
    ];

    protected static array $allowedProperties = [
        'aria' => 'object',
        'available' => 'boolean',
        'busy' => 'boolean',
        'children_' => 'object',
        'classes' => 'object',
        'container' => 'HTMLElement',
        'data' => 'object',
        'dataPath' => 'string',
        'debouncing' => 'boolean',
        'dirty' => 'boolean',
        'el_' => 'VueformElement',
        'error' => 'string',
        'errors' => 'array',
        'fieldId' => 'string',
        'form_' => 'Vueform',
        'hasLabel' => 'boolean',
        'hidden' => 'boolean',
        'invalid' => 'boolean',
        'isDefault' => 'boolean',
        'isFilled' => 'boolean',
        'isRequired' => 'boolean',
        'messageBag' => 'MessageBag',
        'mounted' => 'boolean',
        'parent' => 'VNode',
        'path' => 'string',
        'pending' => 'boolean',
        'requestData' => 'object',
        'size' => 'string',
        'template' => 'object',
        'theme' => 'object',
        'useCustomFilled' => 'boolean',
        'validated' => 'boolean',
        'value' => 'any',
        'view' => 'string',
        'visible' => 'boolean',
    ];

    protected static array $allowedEventAttributes = [
        'change',
        'clear',
        'reset',
    ];

    protected static array $allowedSlotAttributes = [
        'after' => [],
        'before' => [],
        'between' => [],
        'description' => [],
        'info' => [],
        'label' => [],
        'required' => [],
    ];

    /**
     * Create a VueForm group element with 1 column per row.
     *
     * @param  array  $data  Array of elements to include in the row.
     * @return static
     *
     * @desc This method generates a group element in VueForm with each item occupying a full row (1 column).
     */
    public static function rowWith1Columns(array $data)
    {
        $element = new static;
        $element->attributes = self::buildElement($data, 1);

        return $element;
    }

    /**
     * Create a VueForm group element with 2 columns per row.
     *
     * @param  array  $data  Array of elements to include in the row.
     * @return static
     *
     * @desc This method generates a group element in VueForm with 2 items per row.
     */
    public static function rowWith2Columns(array $data)
    {
        $element = new static;
        $element->attributes = self::buildElement($data, 2);

        return $element;
    }

    /**
     * Create a VueForm group element with 3 columns per row.
     *
     * @param  array  $data  Array of elements to include in the row.
     * @return static
     *
     * @desc This method generates a group element in VueForm with 3 items per row.
     */
    public static function rowWith3Columns(array $data)
    {
        $element = new static;
        $element->attributes = self::buildElement($data, 3);

        return $element;
    }

    /**
     * Create a VueForm group element with 4 columns per row.
     *
     * @param  array  $data  Array of elements to include in the row.
     * @return static
     *
     * @desc This method generates a group element in VueForm with 4 items per row.
     */
    public static function rowWith4Columns(array $data)
    {
        $element = new static;
        $element->attributes = self::buildElement($data, 4);

        return $element;
    }

    /**
     * Create a VueForm group element with 6 columns per row.
     *
     * @param  array  $data  Array of elements to include in the row.
     * @return static
     *
     * @desc This method generates a group element in VueForm with 6 items per row.
     */
    public static function rowWith6Columns(array $data)
    {
        $element = new static;
        $element->attributes = self::buildElement($data, 6);

        return $element;
    }

    private static function buildElement(array $data, $col)
    {
        return [
            'type' => 'group',
            'name' => static::generateRandomName(),
            'schema' => self::chunks($data, $col),
            'element-name' => 'object-element',
        ];
    }

    private static function chunks(array $data, $col)
    {
        $groups = [];

        foreach ($data as $value) {
            $instance = new static;
            $instance->attributes = [
                'name' => static::generateRandomName(),
                'schema' => $value,  // Convert to array if object
                'element-name' => 'object-element',
                'columns' => [
                    'container' => [
                        'sm' => 12 / $col,
                        'lg' => 12 / $col,
                    ],
                ],
            ];
            $groups[] = $instance;
        }

        return $groups;
    }
}
