<?php

namespace LaravelVueForm\Elements\Fields;

use LaravelVueForm\Builder\FormSchemaBuilder;

class EditorElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'type', 'container', 'wrapper', 'accept',
        'acceptMimes', 'endpoint', 'method', 'hideTools',
        'name', 'id', 'disabled', 'label',
        'placeholder', 'info', 'infoPosition', 'description',
        'before', 'between', 'after', 'default',
        'formatData', 'formatLoad', 'submit', 'rules',
        'fieldName', 'debounce', 'messages', 'displayErrors',
        'conditions', 'columns', 'inline', 'size',
        'view', 'views', 'addClasses', 'addClass',
        'removeClasses', 'removeClass', 'replaceClasses', 'replaceClass',
        'overrideClasses', 'overrideClass', 'templates', 'presets',
        'slots',
    ];

    protected static array $allowedProperties = [
        'aria', 'placeholder', 'isRequired', 'useCustomFilled',
        'isFilled', 'isDefault', 'value', 'model',
        'data', 'requestData', 'empty', 'path',
        'dataPath', 'parent', 'validated', 'invalid',
        'dirty', 'pending', 'debouncing', 'busy',
        'messageBag', 'errors', 'error', 'available',
        'hidden', 'visible', 'focused', 'isDisabled',
        'isSuccess', 'isDanger', 'container', 'input',
        'fieldId', 'hasLabel', 'size', 'view',
        'template', 'classes', 'theme', 'form_',
        'el_', 'mounted',
    ];

    protected static array $allowedEventAttributes = [
        'reset', 'clear', 'change', 'blur',
        'alert', 'error', 'before-create', 'created',
        'before-mount', 'mounted', 'before-update', 'updated',
        'before-unmount', 'unmounted',
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
