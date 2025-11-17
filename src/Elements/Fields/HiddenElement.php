<?php

namespace LaravelVueForm\Elements\Fields;

use LaravelVueForm\Builder\FormSchemaBuilder;

class HiddenElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'default',
        'displayErrors',
        'expression',
        'fieldName',
        'forceNumbers',
        'formatData',
        'formatLoad',
        'messages',
        'meta',
        'rules',
        'submit',
    ];

    protected static array $allowedProperties = [
        'busy',
        'dataPath',
        'dirty',
        'empty',
        'error',
        'errors',
        'input',
        'invalid',
        'isDanger',
        'isDefault',
        'isFilled',
        'isRequired',
        'isSuccess',
        'messageBag',
        'model',
        'pending',
        'useCustomFilled',
        'validated',
        'value',
    ];

    protected static array $allowedEventAttributes = [
        'change',
        'clear',
        'reset',
    ];

    protected static array $allowedSlotAttributes = [

    ];
}
