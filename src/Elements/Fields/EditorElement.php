<?php

namespace LaravelVueForm\Elements\Fields;

use LaravelVueForm\Builder\FormSchemaBuilder;

class EditorElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'accept',
        'acceptMimes',
        'addClass',
        'addClasses',
        'after',
        'before',
        'between',
        'columns',
        'debounce',
        'default',
        'description',
        'disabled',
        'displayErrors',
        'endpoint',
        'fieldName',
        'formatData',
        'formatLoad',
        'hideTools',
        'info',
        'infoPosition',
        'inline',
        'label',
        'messages',
        'method',
        'overrideClass',
        'overrideClasses',
        'placeholder',
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
        'debouncing',
        'dirty',
        'empty',
        'error',
        'errors',
        'focused',
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
        'placeholder',
        'requestData',
        'size',
        'useCustomFilled',
        'validated',
        'value',
        'view',
        'visible',
    ];

    protected static array $allowedEventAttributes = [
        'alert',
        'blur',
        'change',
        'clear',
        'error',
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
