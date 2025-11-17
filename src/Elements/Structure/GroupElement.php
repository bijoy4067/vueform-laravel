<?php

namespace LaravelVueForm\Elements\Structure;

use LaravelVueForm\Builder\FormSchemaBuilder;

class GroupElement extends FormSchemaBuilder
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


    public static function rowWith1Columns(array $data)
    {
        $element = new static();
        $element->attributes = [
            'type' => 'group',
            'schema' => self::chunks($data, 1),
            'element' => 'group-element'
        ];

        return $element;
    }
    public static function rowWith2Columns(array $data)
    {
        $element = new static();
        $element->attributes = [
            'type' => 'group',
            'schema' => self::chunks($data, 2),
            'element' => 'group-element'
        ];

        return $element;
    }
    public static function rowWith3Columns(array $data)
    {
        $element = new static();
        $element->attributes = [
            'type' => 'group',
            'schema' => self::chunks($data, 3),
            'element' => 'group-element'
        ];

        return $element;
    }
    public static function rowWith4Columns(array $data)
    {
        $element = new static();
        $element->attributes = [
            'type' => 'group',
            'name' => static::generateRandomName(),
            'schema' => self::chunks($data, 4),
            'element' => 'group-element',
        ];

        return $element;
    }
    public static function rowWith6Columns(array $data)
    {
        $element = new static();
        $element->attributes = [
            'type' => 'group',
            'schema' => self::chunks($data, 6),
            'element' => 'group-element'
        ];

        return $element;
    }

    private static function chunks(array $data, $col)
    {
        $groups = [];

        foreach ($data as $value) {
            $instance = new static();
            $instance->attributes = [
                'type' => 'group',
                'name' => static::generateRandomName(),
                'schema' => $value,  // Convert to array if object
                'element' => 'group-element',
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
    /**
     * Magic handler for calls like rowWith1Columns, rowWith2Columns, etc.
     */
    // public static function __callStatic($method, $arguments)
    // {
    //     if (preg_match('/^rowWith(\d+)Columns$/', $method, $matches)) {
    //         $columnsCount = (int) $matches[1];
    //         $data = $arguments[0] ?? [];

    //         return static::makeRowWithColumns($data, $columnsCount);
    //     }

    //     // throw new BadMethodCallException("Method {$method} does not exist on " . static::class);
    // }

    /**
 * Build a group element dynamically with any number of columns.
 */
    // protected static function makeRowWithColumns(array $data, int $columnsCount = 1)
    // {
    //     $element = new static();
    //     $groups = [];

    //     // Calculate default width per column (Bootstrap 12 grid)
    //     $defaultWidth = (int) floor(12 / $columnsCount);

    //     foreach ($data as $value) {
    //         $instance = new static();

    //         $columns = $columnsCount === 1
    //             ? ['default' => 12]
    //             : [
    //                 'container' => [
    //                     'sm' => min(12, max(1, $defaultWidth)),
    //                     'lg' => min(12, max(1, $defaultWidth)),
    //                 ],
    //             ];

    //         $instance->attributes = [
    //             'type' => 'group',
    //             'schema' => $value,
    //             'element' => 'group-element',
    //             'columns' => $columns,
    //         ];

    //         $groups[] = $instance;
    //     }

    //     $element->attributes = [
    //         'type' => 'group',
    //         'schema' => $groups,
    //         'element' => 'group-element',
    //     ];

    //     return $element;
    // }
}
