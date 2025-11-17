<?php

namespace LaravelVueForm\Elements\Fields;

use LaravelVueForm\Builder\FormSchemaBuilder;

class CheckboxgroupElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'addClass',
        'addClasses',
        'after',
        'before',
        'between',
        'clearOnRefetch',
        'columns',
        'default',
        'description',
        'disabled',
        'disables',
        'displayErrors',
        'fieldName',
        'formatData',
        'formatLoad',
        'info',
        'infoPosition',
        'inline',
        'items',
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
        'classes',
        'data',
        'dataPath',
        'dirty',
        'error',
        'errors',
        'hasLabel',
        'hidden',
        'invalid',
        'isDanger',
        'isDefault',
        'isDisabled',
        'isFilled',
        'isRequired',
        'isSuccess',
        'messageBag',
        'model',
        'pending',
        'requestData',
        'resolvedOptions',
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
        'checkbox' => [],
        'description' => [],
        'info' => [],
        'label' => [],
        'required' => [],
    ];
}
