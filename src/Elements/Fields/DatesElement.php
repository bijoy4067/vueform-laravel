<?php

namespace LaravelVueForm\Elements\Fields;

use LaravelVueForm\Builder\FormSchemaBuilder;

class DatesElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'addClass' => 'array|object|string|function', // default: 'null'
        'addClasses' => 'object|function', // default: '{}'
        'addons' => 'object', // default: '{}'
        'after' => 'object|string|number', // default: 'null'
        'autocomplete' => 'string|number', // default: 'null'
        'before' => 'object|string|number', // default: 'null'
        'between' => 'object|string|number', // default: 'null'
        'columns' => 'object|string|number', // default: 'null'
        'conditions' => 'array', // default: '[]'
        'default' => 'array', // default: '[]'
        'description' => 'string|object', // default: 'null'
        'disabled' => 'boolean|function|array|object', // default: 'false'
        'disables' => 'array', // default: '[]'
        'displayErrors' => 'boolean', // default: 'true'
        'displayFormat' => 'string', // default: 'null'
        'extendOptions' => 'object', // default: '{}'
        'fieldName' => 'string|object', // default: 'name|label'
        'floating' => 'string|boolean|object', // default: 'null'
        'formatData' => 'function', // default: 'null'
        'formatLoad' => 'function', // default: 'null'
        'id' => 'string', // default: 'null'
        'info' => 'string|object', // default: 'null'
        'infoPosition' => 'string', // default: 'right'
        'inline' => 'boolean', // default: 'false'
        'label' => 'string|object|function', // default: 'null'
        'loadFormat' => 'string|boolean', // default: 'null'
        'max' => 'string|date', // default: 'null'
        'messages' => 'object', // default: '{}'
        'min' => 'string|date', // default: 'null'
        'mode' => 'string', // default: 'multiple'
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
        'valueFormat' => 'string|boolean', // default: 'null'
        'view' => 'string', // default: 'undefined'
        'views' => 'object', // default: '{}'
    ];

    protected static array $allowedProperties = [
        'aria' => 'object',
        'available' => 'boolean',
        'busy' => 'boolean',
        'classes' => 'object',
        'container' => 'HTMLElement',
        'data' => 'object',
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
        'isReadonly' => 'boolean',
        'isRequired' => 'boolean',
        'isSuccess' => 'boolean',
        'messageBag' => 'MessageBag',
        'model' => 'any',
        'mounted' => 'boolean',
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
        'change',
        'clear',
        'reset',
    ];

    protected static array $allowedSlotAttributes = [
        'addon-after' => [],
        'addon-before' => [],
        'after' => [],
        'before' => [],
        'between' => [],
        'description' => [],
        'info' => [],
        'label' => [],
        'required' => [],
    ];
}
