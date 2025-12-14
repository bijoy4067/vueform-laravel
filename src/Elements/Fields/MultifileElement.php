<?php

namespace LaravelVueForm\Elements\Fields;

use LaravelVueForm\Builder\FormSchemaBuilder;

class MultifileElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'accept' => 'string|array', // default: 'null'
        'addClass' => 'array|object|string|function', // default: 'null'
        'addClasses' => 'object|function', // default: '{}'
        'after' => 'object|string|number', // default: 'null'
        'auto' => 'boolean', // default: 'true'
        'before' => 'object|string|number', // default: 'null'
        'between' => 'object|string|number', // default: 'null'
        'clickable' => 'boolean', // default: 'true'
        'columns' => 'object|string|number', // default: 'null'
        'conditions' => 'array', // default: '[]'
        'controls' => 'object', // default: '{ "add": true, "remove": true, "sort": true}'
        'default' => 'array', // default: '[]'
        'description' => 'string|object', // default: 'null'
        'disabled' => 'boolean|function|array|object', // default: 'false'
        'displayErrors' => 'boolean', // default: 'true'
        'drop' => 'boolean', // default: 'false'
        'fieldName' => 'string|object', // default: 'name|label'
        'fields' => 'object', // default: '{}'
        'file' => 'object', // default: '{}'
        'formatData' => 'function', // default: 'null'
        'formatLoad' => 'function', // default: 'null'
        'id' => 'string', // default: 'null'
        'info' => 'string|object', // default: 'null'
        'infoPosition' => 'string', // default: 'right'
        'inline' => 'boolean', // default: 'false'
        'label' => 'string|object|function', // default: 'null'
        'messages' => 'object', // default: '{}'
        'name' => 'string|number', // default: 'undefined'
        'object' => 'boolean', // default: 'null'
        'order' => 'string', // default: 'null'
        'orderBy' => 'string', // default: 'null'
        'overrideClass' => 'array|object|string|function', // default: 'null'
        'overrideClasses' => 'object|function', // default: '{}'
        'params' => 'object', // default: '{}'
        'presets' => 'array', // default: '[]'
        'previewUrl' => 'string', // default: 'undefined'
        'removeClass' => 'array|object|function', // default: 'null'
        'removeClasses' => 'object|function', // default: '{}'
        'removeEndpoint' => 'object|string|function|boolean|promise', // default: 'config.endpoints.removeFile'
        'removeTempEndpoint' => 'object|string|function|boolean|promise', // default: 'config.endpoints.removeTempFile'
        'replaceClass' => 'object|function', // default: 'null'
        'replaceClasses' => 'object|function', // default: '{}'
        'rules' => 'array|string|object', // default: 'null'
        'size' => 'string', // default: 'undefined'
        'slots' => 'object', // default: '{}'
        'softRemove' => 'boolean', // default: 'false'
        'sort' => 'boolean', // default: 'false'
        'storeFile' => 'string', // default: 'file'
        'storeOrder' => 'string', // default: 'null'
        'submit' => 'boolean', // default: 'true'
        'templates' => 'object', // default: '{}'
        'uploadTempEndpoint' => 'object|string|function|boolean|promise', // default: 'config.endpoints.uploadTempFile'
        'url' => 'string|boolean', // default: '/'
        'view' => 'string', // default: 'file'
        'views' => 'object', // default: '{}'
    ];

    protected static array $allowedProperties = [
        'aria' => 'object',
        'available' => 'boolean',
        'busy' => 'boolean',
        'children_' => 'object',
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
        'form_' => 'Vueform',
        'hasAdd' => 'boolean',
        'hasLabel' => 'boolean',
        'hasRemove' => 'boolean',
        'hasSort' => 'boolean',
        'hasUploading' => 'boolean',
        'hidden' => 'boolean',
        'input' => 'HTMLElement',
        'invalid' => 'boolean',
        'isDefault' => 'boolean',
        'isDisabled' => 'boolean',
        'isFilled' => 'boolean',
        'isRequired' => 'boolean',
        'isSortable' => 'boolean',
        'messageBag' => 'MessageBag',
        'model' => 'any',
        'mounted' => 'boolean',
        'orderByName' => 'string',
        'parent' => 'VNode',
        'path' => 'string',
        'pending' => 'boolean',
        'preparing' => 'boolean',
        'requestData' => 'object',
        'size' => 'string',
        'sorting' => 'boolean',
        'template' => 'object',
        'theme' => 'object',
        'useCustomFilled' => 'boolean',
        'validated' => 'boolean',
        'value' => 'any',
        'view' => 'string',
        'visible' => 'boolean',
    ];

    protected static array $allowedEventAttributes = [
        'add',
        'change',
        'clear',
        'remove',
        'reset',
        'sort',
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
