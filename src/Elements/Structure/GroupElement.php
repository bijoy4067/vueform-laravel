<?php

namespace VueFormLaravel\Elements\Structure;

use VueFormLaravel\Builder\FormSchemaBuilder;

class GroupElement extends FormSchemaBuilder
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
     * @param  array  $data  Array of elements to include in the group.
     * @return static
     *
     * @desc Generates a VueForm Group Element where each item occupies a full row (1 column per row).
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
     * @param  array  $data  Array of elements to include in the group.
     * @return static
     *
     * @desc Generates a VueForm Group Element with 2 items per row.
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
     * @param  array  $data  Array of elements to include in the group.
     * @return static
     *
     * @desc Generates a VueForm Group Element with 3 items per row.
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
     * @param  array  $data  Array of elements to include in the group.
     * @return static
     *
     * @desc Generates a VueForm Group Element with 4 items per row and a unique random name.
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
     * @param  array  $data  Array of elements to include in the group.
     * @return static
     *
     * @desc Generates a VueForm Group Element with 6 items per row.
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
            'schema' => self::chunks($data, 4),
            'element-name' => 'group-element',
        ];
    }

    private static function chunks(array $data, $col)
    {
        $groups = [];

        foreach ($data as $value) {
            $instance = new static;
            $instance->attributes = [
                'type' => 'group',
                'name' => static::generateRandomName(),
                'schema' => $value,  // Convert to array if object
                'element-name' => 'group-element',
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
    //             'element-name' => 'group-element',
    //             'columns' => $columns,
    //         ];

    //         $groups[] = $instance;
    //     }

    //     $element->attributes = [
    //         'type' => 'group',
    //         'schema' => $groups,
    //         'element-name' => 'group-element',
    //     ];

    //     return $element;
    // }
}
