<?php

namespace VueFormLaravel\Elements\Fields;

use VueFormLaravel\Builder\FormSchemaBuilder;

class HiddenElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'conditions' => 'array', // default: '[]'
        'default' => 'string|number|object', // default: 'null'
        'displayErrors' => 'boolean', // default: 'true'
        'expression' => 'string|object', // default: 'undefined'
        'fieldName' => 'string|object', // default: 'name|label'
        'forceNumbers' => 'boolean', // default: 'null'
        'formatData' => 'function', // default: 'null'
        'formatLoad' => 'function', // default: 'null'
        'id' => 'string', // default: 'null'
        'messages' => 'object', // default: '{}'
        'meta' => 'boolean', // default: 'false'
        'name' => 'string|number', // default: 'undefined'
        'rules' => 'array|string|object', // default: 'null'
        'submit' => 'boolean', // default: 'true'
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

    protected static array $allowedSlotAttributes = [];
}
