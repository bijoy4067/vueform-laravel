<?php

namespace LaravelVueForm\Elements\Structure;

use LaravelVueForm\Builder\FormSchemaBuilder;

class GridElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'addClass',
        'addClasses',
        'after',
        'align',
        'before',
        'between',
        'colHeader',
        'cols',
        'columns',
        'default',
        'description',
        'displayErrors',
        'fieldName',
        'formatData',
        'formatLoad',
        'grid',
        'info',
        'infoPosition',
        'inline',
        'label',
        'maxWidth',
        'messages',
        'minWidth',
        'overrideClass',
        'overrideClasses',
        'presets',
        'removeClass',
        'removeClasses',
        'replaceClass',
        'replaceClasses',
        'rowHeader',
        'rows',
        'rules',
        'scrollable',
        'size',
        'slots',
        'submit',
        'templates',
        'valign',
        'view',
        'views',
        'widths',
    ];

    protected static array $allowedProperties = [
        'aria',
        'busy',
        'cells',
        'children_',
        'classes',
        'data',
        'dataPath',
        'debouncing',
        'dirty',
        'error',
        'errors',
        'fitWidth',
        'gridStyle',
        'hasLabel',
        'hidden',
        'invalid',
        'isDefault',
        'isFilled',
        'isRequired',
        'isTableView',
        'messageBag',
        'pending',
        'requestData',
        'resolvedRows',
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
     * @desc Arrange the given data into a single column row.
     * @param array $data The data to be arranged in the row.
     * @return GridElement The arranged grid data.
     */
    public static function rowWith1Columns(array $data)
    {
        return static::grid($data, 1);
    }

    /**
     * @desc Arrange the given data into a two-column row.
     * @param array $data The data to be arranged in the row.
     * @return GridElement The arranged grid data.
     */
    public static function rowWith2Columns(array $data)
    {
        return static::grid($data, 2);
    }

    /**
     * @desc Arrange the given data into a three-column row.
     * @param array $data The data to be arranged in the row.
     * @return GridElement The arranged grid data.
     */
    public static function rowWith3Columns(array $data)
    {
        return static::grid($data, 3);
    }

    /**
     * @desc Arrange the given data into a four-column row.
     * @param array $data The data to be arranged in the row.
     * @return GridElement The arranged grid data.
     */
    public static function rowWith4Columns(array $data)
    {
        return static::grid($data, 4);
    }

    /**
     * @desc Arrange the given data into a six-column row.
     * @param array $data The data to be arranged in the row.
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
        $instance = new static();
        $instance->attributes = [
            'grid' => static::chunks($data, $cols),
            'element' => 'grid-element',
            'cols' => $cols,
            'name' => static::generateRandomName()
        ];

        return $instance;
    }
}
