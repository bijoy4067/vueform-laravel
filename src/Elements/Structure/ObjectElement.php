<?php

namespace LaravelVueForm\Elements\Structure;

use LaravelVueForm\Builder\FormSchemaBuilder;

class ObjectElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'type', 'container', 'wrapper', 'schema',
        'embed', 'name', 'id', 'label',
        'info', 'infoPosition', 'description', 'before',
        'between', 'after', 'default', 'formatData',
        'formatLoad', 'submit', 'rules', 'fieldName',
        'messages', 'displayErrors', 'conditions', 'columns',
        'inline', 'size', 'view', 'views',
        'addClasses', 'addClass', 'removeClasses', 'removeClass',
        'replaceClasses', 'replaceClass', 'overrideClasses', 'overrideClass',
        'templates', 'presets', 'slots',
    ];

    protected static array $allowedProperties = [
        'aria', 'isRequired', 'useCustomFilled', 'isFilled',
        'isDefault', 'value', 'data', 'requestData',
        'path', 'dataPath', 'parent', 'children_',
        'validated', 'invalid', 'dirty', 'pending',
        'debouncing', 'busy', 'messageBag', 'errors',
        'error', 'available', 'hidden', 'visible',
        'container', 'fieldId', 'hasLabel', 'size',
        'view', 'template', 'classes', 'theme',
        'form_', 'el_', 'mounted',
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
