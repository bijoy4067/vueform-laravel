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
}
