<?php

namespace LaravelVueForm\Elements\Fields;

use LaravelVueForm\Builder\FormSchemaBuilder;

class HiddenElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'type', 'container', 'wrapper', 'meta',
        'expression', 'name', 'id', 'default',
        'forceNumbers', 'formatData', 'formatLoad', 'submit',
        'rules', 'fieldName', 'messages', 'displayErrors',
        'conditions',
    ];

    protected static array $allowedProperties = [
        'isRequired', 'useCustomFilled', 'isFilled', 'isDefault',
        'value', 'model', 'empty', 'path',
        'dataPath', 'parent', 'validated', 'invalid',
        'dirty', 'pending', 'busy', 'messageBag',
        'errors', 'error', 'available', 'isSuccess',
        'isDanger', 'container', 'input', 'fieldId',
        'template', 'theme', 'form_', 'el_',
        'mounted',
    ];

    protected static array $allowedEventAttributes = [
        'reset', 'clear', 'change', 'before-create',
        'created', 'before-mount', 'mounted', 'before-update',
        'updated', 'before-unmount', 'unmounted',
    ];

    protected static array $allowedSlotAttributes = [

    ];
}
