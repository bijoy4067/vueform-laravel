<?php

namespace LaravelVueForm\Elements\Fields;

use LaravelVueForm\Builder\FormSchemaBuilder;

class PhoneElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'addClass' => 'array|object|string|function', // default: 'null'
        'addClasses' => 'object|function', // default: '{}'
        'after' => 'object|string|number', // default: 'null'
        'allowIncomplete' => 'boolean', // default: 'false'
        'attrs' => 'object', // default: '{}'
        'autocomplete' => 'string|number', // default: 'null'
        'before' => 'object|string|number', // default: 'null'
        'between' => 'object|string|number', // default: 'null'
        'columns' => 'object|string|number', // default: 'null'
        'conditions' => 'array', // default: '[]'
        'debounce' => 'number', // default: 'null'
        'default' => 'string|number|object', // default: 'null'
        'description' => 'string|object', // default: 'null'
        'disabled' => 'boolean|function|array|object', // default: 'false'
        'displayErrors' => 'boolean', // default: 'true'
        'exclude' => 'array', // default: '[]'
        'fieldName' => 'string|object', // default: 'name|label'
        'floating' => 'string|boolean|object', // default: 'null'
        'formatData' => 'function', // default: 'null'
        'formatLoad' => 'function', // default: 'null'
        'id' => 'string', // default: 'null'
        'include' => 'array', // default: '[]'
        'info' => 'string|object', // default: 'null'
        'infoPosition' => 'string', // default: 'right'
        'inline' => 'boolean', // default: 'false'
        'label' => 'string|object|function', // default: 'null'
        'loading' => 'boolean', // default: 'false'
        'messages' => 'object', // default: '{}'
        'name' => 'string|number', // default: 'undefined'
        'overrideClass' => 'array|object|string|function', // default: 'null'
        'overrideClasses' => 'object|function', // default: '{}'
        'placeholder' => 'string|object', // default: 'null'
        'presets' => 'array', // default: '[]'
        'readonly' => 'boolean|function|array|object', // default: 'false'
        'removeClass' => 'array|object|function', // default: 'null'
        'removeClasses' => 'object|function', // default: '{}'
        'replaceClass' => 'object|function', // default: 'null'
        'replaceClasses' => 'object|function', // default: '{}'
        'rules' => 'array|string|object', // default: 'null'
        'size' => 'string', // default: 'undefined'
        'slots' => 'object', // default: '{}'
        'submit' => 'boolean', // default: 'true'
        'templates' => 'object', // default: '{}'
        'unmask' => 'boolean', // default: 'false'
        'view' => 'string', // default: 'undefined'
        'views' => 'object', // default: '{}'
    ];

    protected static array $allowedProperties = [
        'addonOptions' => 'array',
        'addonPlaceholder' => 'component',
        'aria' => 'object',
        'available' => 'boolean',
        'busy' => 'boolean',
        'classes' => 'object',
        'container' => 'HTMLElement',
        'data' => 'object',
        'dataPath' => 'string',
        'debouncing' => 'boolean',
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
        'inputType' => 'string',
        'invalid' => 'boolean',
        'isDanger' => 'boolean',
        'isDefault' => 'boolean',
        'isDisabled' => 'boolean',
        'isFilled' => 'boolean',
        'isLoading' => 'boolean',
        'isReadonly' => 'boolean',
        'isRequired' => 'boolean',
        'isSuccess' => 'boolean',
        'mask' => 'object|undefined',
        'maskPluginInstalled' => 'boolean',
        'messageBag' => 'MessageBag',
        'model' => 'any',
        'mounted' => 'boolean',
        'options_' => 'component',
        'parent' => 'VNode',
        'path' => 'string',
        'pending' => 'boolean',
        'placeholder' => 'string',
        'requestData' => 'object',
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
        'blur',
        'change',
        'clear',
        'close',
        'focus',
        'open',
        'reset',
        'select',
    ];

    protected static array $allowedSlotAttributes = [
        'after' => [],
        'before' => [],
        'between' => [],
        'description' => [],
        'info' => [],
        'label' => [],
        'required' => [],
    ];
}
