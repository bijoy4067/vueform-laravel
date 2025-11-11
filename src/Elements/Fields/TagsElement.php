<?php

namespace LaravelVueForm\Elements\Fields;

use LaravelVueForm\Builder\FormSchemaBuilder;

class TagsElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'type', 'container', 'wrapper', 'items',
        'labelProp', 'valueProp', 'dataKey', 'searchParam',
        'search', 'trackBy', 'strict', 'breakTags',
        'create', 'appendNewOption', 'addOptionOn', 'allowAbsent',
        'object', 'limit', 'max', 'groups',
        'groupLabel', 'groupOptions', 'groupHideEmpty', 'groupSelect',
        'openDirection', 'appendToBody', 'appendTo', 'canClear',
        'clearOnSelect', 'closeOnSelect', 'closeOnDeselect', 'clearOnRefetch',
        'delay', 'minChars', 'resolveOnLoad', 'filterResults',
        'clearOnSearch', 'hideSelected', 'showOptions', 'caret',
        'loading', 'noOptionsText', 'noResultsText', 'autocomplete',
        'inputType', 'extendOptions', 'name', 'id',
        'disabled', 'attrs', 'label', 'placeholder',
        'floating', 'info', 'infoPosition', 'description',
        'before', 'between', 'after', 'default',
        'formatData', 'formatLoad', 'submit', 'rules',
        'fieldName', 'messages', 'displayErrors', 'conditions',
        'columns', 'inline', 'size', 'view',
        'views', 'addClasses', 'addClass', 'removeClasses',
        'removeClass', 'replaceClasses', 'replaceClass', 'overrideClasses',
        'overrideClass', 'templates', 'presets', 'slots',
    ];

    protected static array $allowedProperties = [
        'aria', 'resolvedOptions', 'placeholder', 'isRequired',
        'useCustomFilled', 'isFilled', 'isDefault', 'value',
        'model', 'empty', 'path', 'dataPath',
        'parent', 'validated', 'invalid', 'dirty',
        'pending', 'busy', 'messageBag', 'errors',
        'error', 'available', 'hidden', 'visible',
        'focused', 'isDisabled', 'isLoading', 'isSuccess',
        'isDanger', 'container', 'input', 'fieldId',
        'hasLabel', 'hasFloating', 'size', 'view',
        'template', 'classes', 'theme', 'form_',
        'el_', 'mounted',
    ];

    protected static array $allowedEventAttributes = [
        'reset', 'clear', 'change', 'select',
        'deselect', 'search-change', 'open', 'close',
        'tag', 'paste', 'before-create', 'created',
        'before-mount', 'mounted', 'before-update', 'updated',
        'before-unmount', 'unmounted',
    ];

    protected static array $allowedSlotAttributes = [
        'tag' => [
            'option',
            'disabled',
            'handleTagRemove',
        ],
        'option' => [],
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
    
    protected function items(array|string $data): static
    {
        $this->attributes['items'] = $data;
        return $this;
    }
}
