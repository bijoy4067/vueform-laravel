<?php

namespace LaravelVueForm\Elements\Structure;

use LaravelVueForm\Builder\FormSchemaBuilder;

class ListElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'addClass',
        'addClasses',
        'addText',
        'after',
        'before',
        'between',
        'columns',
        'controls',
        'default',
        'description',
        'disabled',
        'displayErrors',
        'element',
        'fieldName',
        'formatData',
        'formatLoad',
        'info',
        'infoPosition',
        'initial',
        'inline',
        'label',
        'max',
        'messages',
        'min',
        'object',
        'order',
        'orderBy',
        'overrideClass',
        'overrideClasses',
        'presets',
        'removeClass',
        'removeClasses',
        'replaceClass',
        'replaceClasses',
        'rules',
        'size',
        'slots',
        'sort',
        'storeOrder',
        'submit',
        'templates',
        'view',
        'views',
    ];

    protected static array $allowedProperties = [
        'addLabel',
        'aria',
        'busy',
        'children_',
        'classes',
        'data',
        'dataPath',
        'debouncing',
        'dirty',
        'empty',
        'error',
        'errors',
        'hasAdd',
        'hasLabel',
        'hasRemove',
        'hasSort',
        'hidden',
        'invalid',
        'isDefault',
        'isDisabled',
        'isFilled',
        'isRequired',
        'isSortable',
        'messageBag',
        'model',
        'orderByName',
        'pending',
        'requestData',
        'size',
        'sorting',
        'useCustomFilled',
        'validated',
        'value',
        'view',
        'visible',
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
    /**
     * Create a VueForm List Element from an array of elements.
     *
     * @param array $data Array of elements to include in the list.
     * @return static
     * @desc This method generates a List Element in VueForm, where each item in the provided
     *       array becomes a child element in the list. Useful for creating repeatable or
     *       structured lists of form fields.
     */
    public static function schema(array $data)
    {
        $element = new static();
        $groups = [];

        foreach ($data as $value) {
            $groups[] = $value;
        }

        $element->attributes = [
            'schema' => $groups,
            'element-name' => 'list-element'
        ];

        return $element;
    }
}
