<?php

namespace LaravelVueForm\Elements\Structure;

use LaravelVueForm\Builder\FormSchemaBuilder;

class GroupElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'type',
        'container',
        'wrapper',
        'schema',
        'name',
        'id',
        'label',
        'info',
        'infoPosition',
        'description',
        'before',
        'between',
        'after',
        'default',
        'formatData',
        'formatLoad',
        'submit',
        'rules',
        'fieldName',
        'messages',
        'displayErrors',
        'conditions',
        'columns',
        'inline',
        'size',
        'view',
        'views',
        'addClasses',
        'addClass',
        'removeClasses',
        'removeClass',
        'replaceClasses',
        'replaceClass',
        'overrideClasses',
        'overrideClass',
        'templates',
        'presets',
        'slots',
    ];

    protected static array $allowedProperties = [
        'aria',
        'isRequired',
        'useCustomFilled',
        'isFilled',
        'isDefault',
        'value',
        'data',
        'requestData',
        'path',
        'dataPath',
        'parent',
        'children_',
        'validated',
        'invalid',
        'dirty',
        'pending',
        'debouncing',
        'busy',
        'messageBag',
        'errors',
        'error',
        'available',
        'hidden',
        'visible',
        'container',
        'fieldId',
        'hasLabel',
        'size',
        'view',
        'template',
        'classes',
        'theme',
        'form_',
        'el_',
        'mounted',
    ];

    protected static array $allowedEventAttributes = [
        'reset',
        'clear',
        'change',
        'before-create',
        'created',
        'before-mount',
        'mounted',
        'before-update',
        'updated',
        'before-unmount',
        'unmounted',
    ];

    protected static array $allowedSlotAttributes = [
        'label' => [],
        'info' => [],
        'required' => [],
        'description' => [],
        'before' => [],
        'between' => [],
        'after' => [],
    ];


    public static function rowWith1Columns(array $data)
    {
        $element = new static();
        $groups = [];

        foreach ($data as $value) {
            $instance = new static();
            $instance->attributes = [
                'type' => 'group',
                'name' => static::generateRandomName(),
                'schema' => $value,  // Convert to array if object
                'element' => 'group-element',
                'columns' => [
                    'default' => 12,
                ]
            ];
            $groups[] = $instance;
        }
        $element->attributes = [
            'type' => 'group',
            'schema' => $groups,
            'element' => 'group-element'
        ];

        return $element;
    }
    public static function rowWith2Columns(array $data)
    {
        $element = new static();
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
                        'sm' => 6,
                        'lg' => 6,
                    ],
                ]
            ];
            $groups[] = $instance;
        }

        $element->attributes = [
            'type' => 'group',
            'schema' => $groups,
            'element' => 'group-element'
        ];

        return $element;
    }
    public static function rowWith3Columns(array $data)
    {
        $element = new static();
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
                        'sm' => 6,
                        'lg' => 4,
                    ],
                ]
            ];
            $groups[] = $instance;
        }

        $element->attributes = [
            'type' => 'group',
            'schema' => $groups,
            'element' => 'group-element'
        ];

        return $element;
    }
    public static function rowWith4Columns(array $data)
    {
        $element = new static();
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
                        'sm' => 6,
                        'lg' => 3,
                    ]
                ]
            ];
            $groups[] = $instance;
        }

        $element->attributes = [
            'type' => 'group',
            'name' => static::generateRandomName(),
            'schema' => $groups,
            'element' => 'group-element',
        ];

        return $element;
    }
    public static function rowWith6Columns(array $data)
    {
        $element = new static();
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
                        'sm' => 6,
                        'lg' => 2,
                    ]
                ]
            ];
            $groups[] = $instance;
        }

        $element->attributes = [
            'type' => 'group',
            'schema' => $groups,
            'element' => 'group-element'
        ];

        return $element;
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
