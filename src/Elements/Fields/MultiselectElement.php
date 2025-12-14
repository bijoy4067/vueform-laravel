<?php

namespace LaravelVueForm\Elements\Fields;

use LaravelVueForm\Builder\FormSchemaBuilder;

class MultiselectElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'addClass' => 'array|object|string|function', // default: 'null'
        'addClasses' => 'object|function', // default: '{}'
        'addOptionOn' => 'array', // default: '["enter"]'
        'after' => 'object|string|number', // default: 'null'
        'allowAbsent' => 'boolean', // default: 'false'
        'appendNewOption' => 'boolean', // default: 'true'
        'appendTo' => 'string', // default: 'undefined'
        'appendToBody' => 'boolean', // default: 'false'
        'attrs' => 'object', // default: '{}'
        'autocomplete' => 'string', // default: 'undefined'
        'before' => 'object|string|number', // default: 'null'
        'between' => 'object|string|number', // default: 'null'
        'canClear' => 'boolean', // default: 'true'
        'caret' => 'boolean', // default: 'true'
        'clearOnRefetch' => 'boolean', // default: 'true'
        'clearOnSearch' => 'boolean', // default: 'false'
        'clearOnSelect' => 'boolean', // default: 'false'
        'closeOnDeselect' => 'boolean', // default: 'false'
        'closeOnSelect' => 'boolean', // default: 'true'
        'columns' => 'object|string|number', // default: 'null'
        'conditions' => 'array', // default: '[]'
        'create' => 'boolean', // default: 'false'
        'dataKey' => 'string', // default: 'undefined'
        'default' => 'array', // default: '[]'
        'delay' => 'number', // default: '-1'
        'description' => 'string|object', // default: 'null'
        'disabled' => 'boolean|function|array|object', // default: 'false'
        'displayErrors' => 'boolean', // default: 'true'
        'extendOptions' => 'object', // default: '{}'
        'fieldName' => 'string|object', // default: 'name|label'
        'filterResults' => 'boolean', // default: 'true'
        'floating' => 'string|boolean|object', // default: 'null'
        'formatData' => 'function', // default: 'null'
        'formatLoad' => 'function', // default: 'null'
        'groupHideEmpty' => 'boolean', // default: 'false'
        'groupLabel' => 'string', // default: 'label'
        'groupOptions' => 'string', // default: 'items'
        'groupSelect' => 'boolean', // default: 'true'
        'groups' => 'boolean', // default: 'false'
        'hideSelected' => 'boolean', // default: 'true'
        'id' => 'string', // default: 'null'
        'info' => 'string|object', // default: 'null'
        'infoPosition' => 'string', // default: 'right'
        'inline' => 'boolean', // default: 'false'
        'inputType' => 'string', // default: 'text'
        'items' => 'object|array|function|string', // default: '{}'
        'label' => 'string|object|function', // default: 'null'
        'labelProp' => 'string', // default: 'label'
        'limit' => 'number', // default: '-1'
        'loading' => 'boolean', // default: 'false'
        'max' => 'number', // default: '-1'
        'messages' => 'object', // default: '{}'
        'minChars' => 'number', // default: '0'
        'multipleLabel' => 'function', // default: 'undefined'
        'multipleLabelMultiple' => 'string', // default: 'locale.vueform.multiselect.multipleLabelMore'
        'multipleLabelSingle' => 'string', // default: 'locale.vueform.multiselect.multipleLabelOne'
        'name' => 'string|number', // default: 'undefined'
        'native' => 'boolean', // default: 'true'
        'noOptionsText' => 'string|object', // default: 'locale.multiselect.noOptions'
        'noResultsText' => 'string|object', // default: 'locale.multiselect.noResults'
        'object' => 'boolean', // default: 'false'
        'openDirection' => 'string', // default: 'bottom'
        'overrideClass' => 'array|object|string|function', // default: 'null'
        'overrideClasses' => 'object|function', // default: '{}'
        'placeholder' => 'string|object', // default: 'null'
        'presets' => 'array', // default: '[]'
        'removeClass' => 'array|object|function', // default: 'null'
        'removeClasses' => 'object|function', // default: '{}'
        'replaceClass' => 'object|function', // default: 'null'
        'replaceClasses' => 'object|function', // default: '{}'
        'resolveOnLoad' => 'boolean', // default: 'true'
        'rules' => 'array|string|object', // default: 'null'
        'search' => 'boolean', // default: 'false'
        'searchParam' => 'string', // default: 'query'
        'size' => 'string', // default: 'undefined'
        'slots' => 'object', // default: '{}'
        'strict' => 'boolean', // default: 'true'
        'submit' => 'boolean', // default: 'true'
        'templates' => 'object', // default: '{}'
        'trackBy' => 'string|array', // default: 'label'
        'valueProp' => 'string', // default: 'value'
        'view' => 'string', // default: 'undefined'
        'views' => 'object', // default: '{}'
    ];

    protected static array $allowedProperties = [
        'aria' => 'object',
        'available' => 'boolean',
        'busy' => 'boolean',
        'classes' => 'object',
        'container' => 'HTMLElement',
        'dataPath' => 'string',
        'dirty' => 'boolean',
        'el_' => 'VueformElement',
        'empty' => 'boolean',
        'error' => 'string',
        'errors' => 'array',
        'fieldId' => 'string',
        'focused' => 'boolean',
        'form_' => 'Vueform',
        'hasFloating' => 'boolean',
        'hasLabel' => 'boolean',
        'hidden' => 'boolean',
        'input' => 'HTMLElement',
        'invalid' => 'boolean',
        'isDanger' => 'boolean',
        'isDefault' => 'boolean',
        'isDisabled' => 'boolean',
        'isFilled' => 'boolean',
        'isLoading' => 'boolean',
        'isRequired' => 'boolean',
        'isSuccess' => 'boolean',
        'messageBag' => 'MessageBag',
        'model' => 'any',
        'mounted' => 'boolean',
        'parent' => 'VNode',
        'path' => 'string',
        'pending' => 'boolean',
        'placeholder' => 'string',
        'resolvedOptions' => 'array',
        'size' => 'string',
        'template' => 'object',
        'theme' => 'object',
        'useCustomFilled' => 'boolean',
        'validated' => 'boolean',
        'value' => 'any',
        'view' => 'string',
        'visible' => 'boolean',
    ];

    protected static array $allowedEventAttributes = [
        'change',
        'clear',
        'close',
        'deselect',
        'open',
        'paste',
        'reset',
        'search-change',
        'select',
    ];

    protected static array $allowedSlotAttributes = [
        'after' => [],
        'after-list' => [],
        'before' => [],
        'before-list' => [],
        'between' => [],
        'caret' => [],
        'clear' => [],
        'description' => [],
        'group-label' => [],
        'info' => [],
        'label' => [],
        'multiple-label' => [],
        'no-options' => [],
        'no-results' => [],
        'option' => [],
        'placeholder' => [],
        'required' => [],
        'spinner' => [],
    ];
}
