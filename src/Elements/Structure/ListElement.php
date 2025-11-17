<?php

namespace LaravelVueForm\Elements\Structure;

use LaravelVueForm\Builder\FormSchemaBuilder;

class ListElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'type',
        'container',
        'wrapper',
        'element',
        'object',
        'initial',
        'min',
        'max',
        'addText',
        'sort',
        'controls',
        'storeOrder',
        'order',
        'orderBy',
        'name',
        'id',
        'disabled',
        'label',
        'info',
        'infoPosition',
        'description',
        'before',
        'between',
        'after',
        'default',
        'formatData',
        'formatLoad',
        'submit',
        'rules',
        'fieldName',
        'messages',
        'displayErrors',
        'conditions',
        'columns',
        'inline',
        'size',
        'view',
        'views',
        'addClasses',
        'addClass',
        'removeClasses',
        'removeClass',
        'replaceClasses',
        'replaceClass',
        'overrideClasses',
        'overrideClass',
        'templates',
        'presets',
        'slots',
    ];

    protected static array $allowedProperties = [
        'aria',
        'addLabel',
        'isRequired',
        'useCustomFilled',
        'isFilled',
        'isDefault',
        'value',
        'model',
        'data',
        'requestData',
        'empty',
        'path',
        'dataPath',
        'parent',
        'children_',
        'hasAdd',
        'hasRemove',
        'hasSort',
        'sorting',
        'isSortable',
        'orderByName',
        'validated',
        'invalid',
        'dirty',
        'pending',
        'debouncing',
        'busy',
        'messageBag',
        'errors',
        'error',
        'available',
        'hidden',
        'visible',
        'isDisabled',
        'container',
        'fieldId',
        'hasLabel',
        'size',
        'view',
        'template',
        'classes',
        'theme',
        'form_',
        'el_',
        'mounted',
    ];

    protected static array $allowedEventAttributes = [
        'reset',
        'clear',
        'change',
        'add',
        'remove',
        'sort',
        'before-create',
        'created',
        'before-mount',
        'mounted',
        'before-update',
        'updated',
        'before-unmount',
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

    public static function schema(array $data)
    {
        $element = new static();
        $groups = [];

        foreach ($data as $value) {
            $groups[] = $value;
        }

        $element->attributes = [
            'schema' => $groups,
            'element' => 'list-element'
        ];

        return $element;
    }
}
