<?php

namespace LaravelVueForm\Elements\Structure;

use LaravelVueForm\Builder\FormSchemaBuilder;

class GridElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'addClass' => 'array|object|string|function',
        'addClasses' => 'object|function',
        'after' => 'object|string|number',
        'align' => 'string',
        'before' => 'object|string|number',
        'between' => 'object|string|number',
        'colHeader' => 'boolean',
        'cols' => 'number',
        'columns' => 'object|string|number',
        'conditions' => 'array',
        'default' => 'object',
        'description' => 'string|object',
        'displayErrors' => 'boolean',
        'fieldName' => 'string|object',
        'formatData' => 'function',
        'formatLoad' => 'function',
        'grid' => 'array',
        'id' => 'string',
        'info' => 'string|object',
        'infoPosition' => 'string',
        'inline' => 'boolean',
        'label' => 'string|object|function',
        'maxWidth' => 'string|number',
        'messages' => 'object',
        'minWidth' => 'string|number',
        'name' => 'string|number',
        'overrideClass' => 'array|object|string|function',
        'overrideClasses' => 'object|function',
        'presets' => 'array',
        'removeClass' => 'array|object|function',
        'removeClasses' => 'object|function',
        'replaceClass' => 'object|function',
        'replaceClasses' => 'object|function',
        'rowHeader' => 'boolean',
        'rows' => 'number',
        'rules' => 'array|string|object',
        'scrollable' => 'boolean',
        'size' => 'string',
        'slots' => 'object',
        'submit' => 'boolean',
        'templates' => 'object',
        'valign' => 'string',
        'view' => 'string',
        'views' => 'object',
        'widths' => 'array',
    ];

    protected static array $allowedProperties = [
        'aria' => 'object',
        'available' => 'boolean',
        'busy' => 'boolean',
        'cells' => 'array',
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
        'fitWidth' => 'boolean',
        'form_' => 'Vueform',
        'gridStyle' => 'object',
        'hasLabel' => 'boolean',
        'hidden' => 'boolean',
        'invalid' => 'boolean',
        'isDefault' => 'boolean',
        'isFilled' => 'boolean',
        'isRequired' => 'boolean',
        'isTableView' => 'boolean',
        'messageBag' => 'MessageBag',
        'mounted' => 'boolean',
        'parent' => 'VNode',
        'path' => 'string',
        'pending' => 'boolean',
        'requestData' => 'object',
        'resolvedRows' => 'array',
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
     * @desc Arrange the given data into a single column row.
     *
     * @param  array  $data  The data to be arranged in the row.
     * @return GridElement The arranged grid data.
     */
    public static function rowWith1Columns(array $data)
    {
        return static::grid($data, 1);
    }

    /**
     * @desc Arrange the given data into a two-column row.
     *
     * @param  array  $data  The data to be arranged in the row.
     * @return GridElement The arranged grid data.
     */
    public static function rowWith2Columns(array $data)
    {
        return static::grid($data, 2);
    }

    /**
     * @desc Arrange the given data into a three-column row.
     *
     * @param  array  $data  The data to be arranged in the row.
     * @return GridElement The arranged grid data.
     */
    public static function rowWith3Columns(array $data)
    {
        return static::grid($data, 3);
    }

    /**
     * @desc Arrange the given data into a four-column row.
     *
     * @param  array  $data  The data to be arranged in the row.
     * @return GridElement The arranged grid data.
     */
    public static function rowWith4Columns(array $data)
    {
        return static::grid($data, 4);
    }

    /**
     * @desc Arrange the given data into a six-column row.
     *
     * @param  array  $data  The data to be arranged in the row.
     * @return GridElement The arranged grid data.
     */
    public static function rowWith6Columns(array $data)
    {
        return static::grid($data, 6);
    }

    private static function chunks(array $data, int $cols)
    {
        $count = count($data);
        $chunkSize = ceil($count / $cols); // divide into $cols parts

        return array_chunk($data, $chunkSize);
    }

    private static function grid(array $data, int $cols)
    {
        $instance = new static;
        $instance->attributes = [
            'grid' => static::chunks($data, $cols),
            'element-name' => 'grid-element',
            'cols' => $cols,
            'name' => static::generateRandomName(),
        ];

        return $instance;
    }
}
