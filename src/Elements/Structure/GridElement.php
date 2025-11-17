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
}
