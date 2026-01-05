<?php

namespace VueFormLaravel\Elements\Fields;

use VueFormLaravel\Builder\FormSchemaBuilder;

class RadiogroupElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'addClass' => 'array|object|string|function', // default: 'null'
        'addClasses' => 'object|function', // default: '{}'
        'after' => 'object|string|number', // default: 'null'
        'before' => 'object|string|number', // default: 'null'
        'between' => 'object|string|number', // default: 'null'
        'clearOnRefetch' => 'boolean', // default: 'true'
        'columns' => 'object|string|number', // default: 'null'
        'conditions' => 'array', // default: '[]'
        'default' => 'string|number|boolean', // default: 'null'
        'description' => 'string|object', // default: 'null'
        'disabled' => 'boolean|function|array|object', // default: 'false'
        'disables' => 'array', // default: '[]'
        'displayErrors' => 'boolean', // default: 'true'
        'fieldName' => 'string|object', // default: 'name|label'
        'formatData' => 'function', // default: 'null'
        'formatLoad' => 'function', // default: 'null'
        'id' => 'string', // default: 'null'
        'info' => 'string|object', // default: 'null'
        'infoPosition' => 'string', // default: 'right'
        'inline' => 'boolean', // default: 'false'
        'items' => 'object|array|function|string', // default: '{}'
        'label' => 'string|object|function', // default: 'null'
        'messages' => 'object', // default: '{}'
        'name' => 'string|number', // default: 'undefined'
        'overrideClass' => 'array|object|string|function', // default: 'null'
        'overrideClasses' => 'object|function', // default: '{}'
        'presets' => 'array', // default: '[]'
        'removeClass' => 'array|object|function', // default: 'null'
        'removeClasses' => 'object|function', // default: '{}'
        'replaceClass' => 'object|function', // default: 'null'
        'replaceClasses' => 'object|function', // default: '{}'
        'rules' => 'array|string|object', // default: 'null'
        'size' => 'string', // default: 'undefined'
        'slots' => 'object', // default: '{}'
        'submit' => 'boolean', // default: 'true'
        'templates' => 'object', // default: '{}'
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
        'error' => 'string',
        'errors' => 'array',
        'fieldId' => 'string',
        'form_' => 'Vueform',
        'hasLabel' => 'boolean',
        'hidden' => 'boolean',
        'invalid' => 'boolean',
        'isDanger' => 'boolean',
        'isDefault' => 'boolean',
        'isDisabled' => 'boolean',
        'isFilled' => 'boolean',
        'isRequired' => 'boolean',
        'isSuccess' => 'boolean',
        'messageBag' => 'MessageBag',
        'model' => 'any',
        'mounted' => 'boolean',
        'parent' => 'VNode',
        'path' => 'string',
        'pending' => 'boolean',
        'requestData' => 'object',
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
        'reset',
    ];

    protected static array $allowedSlotAttributes = [
        'after' => [],
        'before' => [],
        'between' => [],
        'description' => [],
        'info' => [],
        'label' => [],
        'radio' => [],
        'required' => [],
    ];
}
