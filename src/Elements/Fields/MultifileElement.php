<?php

namespace LaravelVueForm\Elements\Fields;

use LaravelVueForm\Builder\FormSchemaBuilder;

class MultifileElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'type', 'container', 'wrapper', 'drop',
        'sort', 'controls', 'object', 'storeFile',
        'fields', 'storeOrder', 'order', 'orderBy',
        'file', 'accept', 'clickable', 'url',
        'previewUrl', 'auto', 'uploadTempEndpoint', 'removeTempEndpoint',
        'removeEndpoint', 'params', 'softRemove', 'name',
        'id', 'disabled', 'label', 'info',
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
        'aria', 'isRequired', 'useCustomFilled', 'isFilled',
        'isDefault', 'hasUploading', 'preparing', 'value',
        'model', 'data', 'requestData', 'empty',
        'path', 'dataPath', 'parent', 'children_',
        'hasAdd', 'hasRemove', 'hasSort', 'sorting',
        'isSortable', 'orderByName', 'validated', 'invalid',
        'dirty', 'pending', 'debouncing', 'busy',
        'messageBag', 'errors', 'error', 'available',
        'hidden', 'visible', 'isDisabled', 'container',
        'input', 'fieldId', 'hasLabel', 'size',
        'view', 'template', 'classes', 'theme',
        'form_', 'el_', 'mounted',
    ];

    protected static array $allowedEventAttributes = [
        'reset', 'clear', 'change', 'add',
        'remove', 'sort', 'before-create', 'created',
        'before-mount', 'mounted', 'before-update', 'updated',
        'before-unmount', 'unmounted',
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
