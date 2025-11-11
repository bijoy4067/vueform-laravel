<?php

namespace LaravelVueForm\Elements\Fields;

use LaravelVueForm\Builder\FormSchemaBuilder;

class PhoneElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'type', 'container', 'wrapper', 'include',
        'exclude', 'unmask', 'allowIncomplete', 'autocomplete',
        'loading', 'name', 'id', 'readonly',
        'disabled', 'attrs', 'label', 'placeholder',
        'floating', 'info', 'infoPosition', 'description',
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
        'options_', 'addonPlaceholder', 'aria', 'addonOptions',
        'maskPluginInstalled', 'inputType', 'mask', 'placeholder',
        'isReadonly', 'isRequired', 'useCustomFilled', 'isFilled',
        'isDefault', 'value', 'model', 'data',
        'requestData', 'empty', 'path', 'dataPath',
        'parent', 'validated', 'invalid', 'dirty',
        'pending', 'debouncing', 'busy', 'messageBag',
        'errors', 'error', 'available', 'hidden',
        'visible', 'focused', 'isDisabled', 'isLoading',
        'isSuccess', 'isDanger', 'container', 'input',
        'fieldId', 'hasLabel', 'hasFloating', 'size',
        'view', 'template', 'classes', 'theme',
        'form_', 'el_', 'mounted',
    ];

    protected static array $allowedEventAttributes = [
        'reset', 'clear', 'change', 'select',
        'open', 'close', 'blur', 'focus',
        'before-create', 'created', 'before-mount', 'mounted',
        'before-update', 'updated', 'before-unmount', 'unmounted',
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
