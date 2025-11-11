<?php

namespace LaravelVueForm\Elements\Fields;

use LaravelVueForm\Builder\FormSchemaBuilder;

class CaptchaElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'type', 'container', 'wrapper', 'provider',
        'options', 'name', 'id', 'readonly',
        'disabled', 'label', 'info', 'infoPosition',
        'description', 'before', 'between', 'after',
        'default', 'formatData', 'formatLoad', 'submit',
        'rules', 'messages', 'displayErrors', 'conditions',
        'columns', 'inline', 'view', 'views',
        'addClasses', 'addClass', 'removeClasses', 'removeClass',
        'replaceClasses', 'replaceClass', 'overrideClasses', 'overrideClass',
        'templates', 'presets', 'slots',
    ];

    protected static array $allowedProperties = [
        'provider', 'captchaOptions', 'shouldVerify', 'isReadonly',
        'isRequired', 'useCustomFilled', 'isFilled', 'isDefault',
        'value', 'model', 'data', 'requestData',
        'empty', 'path', 'dataPath', 'parent',
        'validated', 'invalid', 'dirty', 'pending',
        'busy', 'messageBag', 'errors', 'error',
        'available', 'hidden', 'visible', 'isDisabled',
        'isLoading', 'isSuccess', 'isDanger', 'container',
        'input', 'fieldId', 'hasLabel', 'hasFloating',
        'size', 'view', 'template', 'classes',
        'theme', 'form_', 'el_', 'mounted',
    ];

    protected static array $allowedEventAttributes = [
        'reset', 'clear', 'change', 'before-create',
        'created', 'before-mount', 'mounted', 'before-update',
        'updated', 'before-unmount', 'unmounted',
    ];

    protected static array $allowedSlotAttributes = [
        'label' => [],
        'info' => [],
        'required' => [],
        'description' => [],
        'before' => [],
        'between' => [],
        'after' => [],
    ];
}
