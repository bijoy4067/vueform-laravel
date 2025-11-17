<?php

namespace LaravelVueForm\Elements\Structure;

use LaravelVueForm\Builder\FormSchemaBuilder;

class ObjectElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'addClass',
        'addClasses',
        'after',
        'before',
        'between',
        'columns',
        'default',
        'description',
        'displayErrors',
        'embed',
        'fieldName',
        'formatData',
        'formatLoad',
        'info',
        'infoPosition',
        'inline',
        'label',
        'messages',
        'overrideClass',
        'overrideClasses',
        'presets',
        'removeClass',
        'removeClasses',
        'replaceClass',
        'replaceClasses',
        'rules',
        'schema',
        'size',
        'slots',
        'submit',
        'templates',
        'view',
        'views',
    ];

    protected static array $allowedProperties = [
        'aria',
        'busy',
        'children_',
        'classes',
        'data',
        'dataPath',
        'debouncing',
        'dirty',
        'error',
        'errors',
        'hasLabel',
        'hidden',
        'invalid',
        'isDefault',
        'isFilled',
        'isRequired',
        'messageBag',
        'pending',
        'requestData',
        'size',
        'useCustomFilled',
        'validated',
        'value',
        'view',
        'visible',
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
     * @param array $data Array of elements to include in the row.
     * @return static
     * @desc This method generates a group element in VueForm with each item occupying a full row (1 column).
     */
    public static function rowWith1Columns(array $data)
    {
        $element = new static();
        $element->attributes = [
            'type' => 'group',
            'schema' => self::chunks($data, 1),
            'element' => 'object-element'
        ];

        return $element;
    }

    /**
     * Create a VueForm group element with 2 columns per row.
     *
     * @param array $data Array of elements to include in the row.
     * @return static
     * @desc This method generates a group element in VueForm with 2 items per row.
     */
    public static function rowWith2Columns(array $data)
    {
        $element = new static();
        $element->attributes = [
            'type' => 'group',
            'schema' => self::chunks($data, 2),
            'element' => 'object-element'
        ];

        return $element;
    }

    /**
     * Create a VueForm group element with 3 columns per row.
     *
     * @param array $data Array of elements to include in the row.
     * @return static
     * @desc This method generates a group element in VueForm with 3 items per row.
     */
    public static function rowWith3Columns(array $data)
    {
        $element = new static();
        $element->attributes = [
            'type' => 'group',
            'schema' => self::chunks($data, 3),
            'element' => 'object-element'
        ];

        return $element;
    }

    /**
     * Create a VueForm group element with 4 columns per row.
     *
     * @param array $data Array of elements to include in the row.
     * @return static
     * @desc This method generates a group element in VueForm with 4 items per row.
     */
    public static function rowWith4Columns(array $data)
    {
        $element = new static();
        $element->attributes = [
            'type' => 'group',
            'name' => static::generateRandomName(),
            'schema' => self::chunks($data, 4),
            'element' => 'object-element',
        ];

        return $element;
    }

    /**
     * Create a VueForm group element with 6 columns per row.
     *
     * @param array $data Array of elements to include in the row.
     * @return static
     * @desc This method generates a group element in VueForm with 6 items per row.
     */
    public static function rowWith6Columns(array $data)
    {
        $element = new static();
        $element->attributes = [
            'type' => 'group',
            'schema' => self::chunks($data, 6),
            'element' => 'object-element'
        ];

        return $element;
    }

    private static function chunks(array $data, $col)
    {
        $groups = [];

        foreach ($data as $value) {
            $instance = new static();
            $instance->attributes = [
                'name' => static::generateRandomName(),
                'schema' => $value,  // Convert to array if object
                'element' => 'object-element',
                'columns' => [
                    'container' => [
                        'sm' => 12 / $col,
                        'lg' => 12 / $col,
                    ],
                ]
            ];
            $groups[] = $instance;
        }

        return $groups;
    }
}
