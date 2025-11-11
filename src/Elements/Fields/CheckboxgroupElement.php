<?php

namespace LaravelVueForm\Elements\Fields;

use LaravelVueForm\Builder\FormSchemaBuilder;

class CheckboxgroupElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'type', 'container', 'wrapper', 'items',
        'disables', 'clearOnRefetch', 'name', 'id',
        'disabled', 'label', 'info', 'infoPosition',
        'description', 'before', 'between', 'after',
        'default', 'formatData', 'formatLoad', 'submit',
        'rules', 'fieldName', 'messages', 'displayErrors',
        'conditions', 'columns', 'inline', 'size',
        'view', 'views', 'addClasses', 'addClass',
        'removeClasses', 'removeClass', 'replaceClasses', 'replaceClass',
        'overrideClasses', 'overrideClass', 'templates', 'presets',
        'slots',
    ];

    protected static array $allowedProperties = [
        'aria', 'resolvedOptions', 'isRequired', 'useCustomFilled',
        'isFilled', 'isDefault', 'value', 'model',
        'data', 'requestData', 'path', 'dataPath',
        'parent', 'validated', 'invalid', 'dirty',
        'pending', 'busy', 'messageBag', 'errors',
        'error', 'available', 'hidden', 'visible',
        'isDisabled', 'isSuccess', 'isDanger', 'container',
        'fieldId', 'hasLabel', 'size', 'view',
        'template', 'classes', 'theme', 'form_',
        'el_', 'mounted',
    ];

    protected static array $allowedEventAttributes = [
        'reset', 'clear', 'change', 'before-create',
        'created', 'before-mount', 'mounted', 'before-update',
        'updated', 'before-unmount', 'unmounted',
    ];

    protected static array $allowedSlotAttributes = [
        'checkbox' => [],
        'label' => [],
        'info' => [],
        'required' => [],
        'description' => [],
        'before' => [],
        'between' => [],
        'after' => [],
    ];
}
