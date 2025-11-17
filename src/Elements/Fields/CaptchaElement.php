<?php

namespace LaravelVueForm\Elements\Fields;

use LaravelVueForm\Builder\FormSchemaBuilder;

class CaptchaElement extends FormSchemaBuilder
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
        'disabled',
        'displayErrors',
        'formatData',
        'formatLoad',
        'info',
        'infoPosition',
        'inline',
        'label',
        'messages',
        'options',
        'overrideClass',
        'overrideClasses',
        'presets',
        'provider',
        'readonly',
        'removeClass',
        'removeClasses',
        'replaceClass',
        'replaceClasses',
        'rules',
        'slots',
        'submit',
        'templates',
        'view',
        'views',
    ];

    protected static array $allowedProperties = [
        'busy',
        'captchaOptions',
        'classes',
        'data',
        'dataPath',
        'dirty',
        'empty',
        'error',
        'errors',
        'hasFloating',
        'hasLabel',
        'hidden',
        'input',
        'invalid',
        'isDanger',
        'isDefault',
        'isDisabled',
        'isFilled',
        'isLoading',
        'isReadonly',
        'isRequired',
        'isSuccess',
        'messageBag',
        'model',
        'pending',
        'provider',
        'requestData',
        'shouldVerify',
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
