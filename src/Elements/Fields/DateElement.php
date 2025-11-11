<?php

namespace LaravelVueForm\Elements\Fields;

use LaravelVueForm\Builder\FormSchemaBuilder;

class DateElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'type', 'container', 'wrapper', 'addons',
        'displayFormat', 'valueFormat', 'loadFormat', 'date',
        'time', 'seconds', 'hour24', 'min',
        'max', 'disables', 'extendOptions', 'autocomplete',
        'name', 'id', 'readonly', 'disabled',
        'label', 'placeholder', 'floating', 'info',
        'infoPosition', 'description', 'before', 'between',
        'after', 'default', 'formatData', 'formatLoad',
        'submit', 'rules', 'fieldName', 'messages',
        'displayErrors', 'conditions', 'columns', 'inline',
        'size', 'view', 'views', 'addClasses',
        'addClass', 'removeClasses', 'removeClass', 'replaceClasses',
        'replaceClass', 'overrideClasses', 'overrideClass', 'templates',
        'presets', 'slots',
    ];

    protected static array $allowedProperties = [
        'aria', 'placeholder', 'isReadonly', 'isRequired',
        'useCustomFilled', 'isFilled', 'isDefault', 'value',
        'model', 'data', 'requestData', 'empty',
        'path', 'dataPath', 'parent', 'validated',
        'invalid', 'dirty', 'pending', 'busy',
        'messageBag', 'errors', 'error', 'available',
        'hidden', 'visible', 'focused', 'isDisabled',
        'isSuccess', 'isDanger', 'container', 'input',
        'fieldId', 'hasLabel', 'hasFloating', 'size',
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
        'addon-before' => [],
        'addon-after' => [],
    ];
}
