<?php

namespace LaravelVueForm\Elements\Fields;

use LaravelVueForm\Builder\FormSchemaBuilder;

class FileElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'type', 'container', 'wrapper', 'drop',
        'accept', 'clickable', 'url', 'previewUrl',
        'auto', 'urls', 'methods', 'uploadTempEndpoint',
        'removeTempEndpoint', 'removeEndpoint', 'params', 'softRemove',
        'name', 'id', 'disabled', 'label',
        'info', 'infoPosition', 'description', 'before',
        'between', 'after', 'default', 'formatData',
        'formatLoad', 'submit', 'rules', 'fieldName',
        'messages', 'displayErrors', 'conditions', 'columns',
        'inline', 'size', 'view', 'views',
        'addClasses', 'addClass', 'removeClasses', 'removeClass',
        'replaceClasses', 'replaceClass', 'overrideClasses', 'overrideClass',
        'templates', 'presets', 'slots',
    ];

    protected static array $allowedProperties = [
        'aria', 'isRequired', 'useCustomFilled', 'isFilled',
        'isDefault', 'stage', 'filename', 'link',
        'preview', 'progress', 'uploaded', 'hasUploadError',
        'removing', 'preparing', 'canRemove', 'canUploadTemp',
        'canSelect', 'value', 'model', 'data',
        'requestData', 'empty', 'path', 'dataPath',
        'parent', 'validated', 'invalid', 'dirty',
        'pending', 'busy', 'messageBag', 'errors',
        'error', 'available', 'hidden', 'visible',
        'isDisabled', 'container', 'input', 'fieldId',
        'hasLabel', 'size', 'view', 'template',
        'classes', 'theme', 'form_', 'el_',
        'mounted',
    ];

    protected static array $allowedEventAttributes = [
        'reset', 'clear', 'change', 'remove',
        'error', 'before-create', 'created', 'before-mount',
        'mounted', 'before-update', 'updated', 'before-unmount',
        'unmounted',
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
