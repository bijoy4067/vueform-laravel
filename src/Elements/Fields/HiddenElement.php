<?php

namespace LaravelVueForm\Elements\Fields;

use LaravelVueForm\Builder\FormSchemaBuilder;

class HiddenElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'conditions' => 'array',
        'default' => 'string|number|object',
        'displayErrors' => 'boolean',
        'expression' => 'string|object',
        'fieldName' => 'string|object',
        'forceNumbers' => 'boolean',
        'formatData' => 'function',
        'formatLoad' => 'function',
        'id' => 'string',
        'messages' => 'object',
        'meta' => 'boolean',
        'name' => 'string|number',
        'rules' => 'array|string|object',
        'submit' => 'boolean',
    ];

    protected static array $allowedProperties = [
        'available' => 'boolean',
        'busy' => 'boolean',
        'container' => 'HTMLElement',
        'dataPath' => 'string',
        'dirty' => 'boolean',
        'el_' => 'VueformElement',
        'empty' => 'boolean',
        'error' => 'string',
        'errors' => 'array',
        'fieldId' => 'string',
        'form_' => 'Vueform',
        'input' => 'HTMLElement',
        'invalid' => 'boolean',
        'isDanger' => 'boolean',
        'isDefault' => 'boolean',
        'isFilled' => 'boolean',
        'isRequired' => 'boolean',
        'isSuccess' => 'boolean',
        'messageBag' => 'MessageBag',
        'model' => 'any',
        'mounted' => 'boolean',
        'parent' => 'VNode',
        'path' => 'string',
        'pending' => 'boolean',
        'template' => 'object',
        'theme' => 'object',
        'useCustomFilled' => 'boolean',
        'validated' => 'boolean',
        'value' => 'any',
    ];

    protected static array $allowedEventAttributes = [
        'change',
        'clear',
        'reset',
    ];

    protected static array $allowedSlotAttributes = [

    ];
}
