<?php

namespace LaravelVueForm\Elements\Fields;

use LaravelVueForm\Builder\FormSchemaBuilder;

class SelectElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'type', 'container', 'wrapper', 'native',
        'items', 'labelProp', 'valueProp', 'dataKey',
        'searchParam', 'search', 'trackBy', 'strict',
        'create', 'appendNewOption', 'addOptionOn', 'allowAbsent',
        'object', 'limit', 'groups', 'groupLabel',
        'groupOptions', 'groupHideEmpty', 'openDirection', 'appendToBody',
        'appendTo', 'canDeselect', 'canClear', 'closeOnSelect',
        'closeOnDeselect', 'clearOnRefetch', 'delay', 'minChars',
        'resolveOnLoad', 'filterResults', 'clearOnSearch', 'caret',
        'truncate', 'loading', 'noOptionsText', 'noResultsText',
        'autocomplete', 'inputType', 'extendOptions', 'name',
        'id', 'disabled', 'attrs', 'label',
        'placeholder', 'floating', 'info', 'infoPosition',
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
        'aria', 'resolvedOptions', 'placeholder', 'isRequired',
        'useCustomFilled', 'isFilled', 'isDefault', 'value',
        'model', 'data', 'requestData', 'empty',
        'path', 'dataPath', 'parent', 'validated',
        'invalid', 'dirty', 'pending', 'busy',
        'messageBag', 'errors', 'error', 'available',
        'hidden', 'visible', 'focused', 'isDisabled',
        'isLoading', 'isSuccess', 'isDanger', 'container',
        'input', 'fieldId', 'hasLabel', 'hasFloating',
        'size', 'view', 'template', 'classes',
        'theme', 'form_', 'el_', 'mounted',
    ];

    protected static array $allowedEventAttributes = [
        'reset', 'clear', 'change', 'select',
        'deselect', 'search-change', 'open', 'close',
        'paste', 'before-create', 'created', 'before-mount',
        'mounted', 'before-update', 'updated', 'before-unmount',
        'unmounted',
    ];

    protected static array $allowedSlotAttributes = [
        'option' => [],
        'single-label' => [],
        'placeholder' => [],
        'group-label' => [],
        'before-list' => [],
        'after-list' => [],
        'no-results' => [],
        'no-options' => [],
        'caret' => [],
        'spinner' => [],
        'clear' => [],
        'label' => [],
        'info' => [],
        'required' => [],
        'description' => [],
        'before' => [],
        'between' => [],
        'after' => [],
    ];
}
