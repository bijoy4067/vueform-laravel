<?php

namespace LaravelVueForm\Elements\Fields;

use LaravelVueForm\Builder\FormSchemaBuilder;

class CheckboxElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'addClass',
        'addClasses',
        'after',
        'align',
        'before',
        'between',
        'columns',
        'default',
        'description',
        'disabled',
        'displayErrors',
        'falseValue',
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
        'size',
        'slots',
        'standalone',
        'submit',
        'templates',
        'text',
        'trueValue',
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
        'input',
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
        'size',
        'text',
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
        'default' => [],
        'description' => [],
        'info' => [],
        'label' => [],
        'required' => [],
    ];
}
