<?php

namespace LaravelVueForm\Elements\Fields;

use LaravelVueForm\Builder\FormSchemaBuilder;

class FileElement extends FormSchemaBuilder
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
        'default' => 'string|object', // default: 'null'
        'description' => 'string|object', // default: 'null'
        'disabled' => 'boolean|function|array|object', // default: 'false'
        'displayErrors' => 'boolean', // default: 'true'
        'drop' => 'boolean', // default: 'false'
        'fieldName' => 'string|object', // default: 'name|label'
        'formatData' => 'function', // default: 'null'
        'formatLoad' => 'function', // default: 'null'
        'id' => 'string', // default: 'null'
        'info' => 'string|object', // default: 'null'
        'infoPosition' => 'string', // default: 'right'
        'inline' => 'boolean', // default: 'false'
        'label' => 'string|object|function', // default: 'null'
        'messages' => 'object', // default: '{}'
        'methods' => 'object', // default: '{}'
        'name' => 'string|number', // default: 'undefined'
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
        'submit' => 'boolean', // default: 'true'
        'templates' => 'object', // default: '{}'
        'uploadTempEndpoint' => 'object|string|function|boolean|promise', // default: 'config.endpoints.uploadTempFile'
        'url' => 'string|boolean', // default: '/'
        'urls' => 'object', // default: '{}'
        'view' => 'string', // default: 'file'
        'views' => 'object', // default: '{}'
    ];

    protected static array $allowedProperties = [
        'aria' => 'object',
        'available' => 'boolean',
        'busy' => 'boolean',
        'canRemove' => 'boolean',
        'canSelect' => 'boolean',
        'canUploadTemp' => 'boolean',
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
        'filename' => 'string',
        'form_' => 'Vueform',
        'hasLabel' => 'boolean',
        'hasUploadError' => 'boolean',
        'hidden' => 'boolean',
        'input' => 'HTMLElement',
        'invalid' => 'boolean',
        'isDefault' => 'boolean',
        'isDisabled' => 'boolean',
        'isFilled' => 'boolean',
        'isRequired' => 'boolean',
        'link' => 'string',
        'messageBag' => 'MessageBag',
        'model' => 'any',
        'mounted' => 'boolean',
        'parent' => 'VNode',
        'path' => 'string',
        'pending' => 'boolean',
        'preparing' => 'boolean',
        'preview' => 'string',
        'progress' => 'number',
        'removing' => 'boolean',
        'requestData' => 'object',
        'size' => 'string',
        'stage' => 'number',
        'template' => 'object',
        'theme' => 'object',
        'uploaded' => 'boolean',
        'useCustomFilled' => 'boolean',
        'validated' => 'boolean',
        'value' => 'any',
        'view' => 'string',
        'visible' => 'boolean',
    ];

    protected static array $allowedEventAttributes = [
        'change',
        'clear',
        'error',
        'remove',
        'reset',
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
