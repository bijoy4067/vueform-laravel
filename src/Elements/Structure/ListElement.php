<?php

namespace VueFormLaravel\Elements\Structure;

use VueFormLaravel\Builder\FormSchemaBuilder;

class ListElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'addClass' => 'array|object|string|function',
        'addClasses' => 'object|function',
        'addText' => 'string',
        'after' => 'object|string|number',
        'before' => 'object|string|number',
        'between' => 'object|string|number',
        'columns' => 'object|string|number',
        'conditions' => 'array',
        'controls' => 'object',
        'default' => 'array',
        'description' => 'string|object',
        'disabled' => 'boolean|function|array|object',
        'displayErrors' => 'boolean',
        'element' => 'object',
        'fieldName' => 'string|object',
        'formatData' => 'function',
        'formatLoad' => 'function',
        'id' => 'string',
        'info' => 'string|object',
        'infoPosition' => 'string',
        'initial' => 'number',
        'inline' => 'boolean',
        'label' => 'string|object|function',
        'max' => 'number',
        'messages' => 'object',
        'min' => 'number',
        'name' => 'string|number',
        'object' => 'object',
        'order' => 'string',
        'orderBy' => 'string',
        'overrideClass' => 'array|object|string|function',
        'overrideClasses' => 'object|function',
        'presets' => 'array',
        'removeClass' => 'array|object|function',
        'removeClasses' => 'object|function',
        'replaceClass' => 'object|function',
        'replaceClasses' => 'object|function',
        'rules' => 'array|string|object',
        'size' => 'string',
        'slots' => 'object',
        'sort' => 'boolean',
        'storeOrder' => 'string',
        'submit' => 'boolean',
        'templates' => 'object',
        'view' => 'string',
        'views' => 'object',
    ];

    protected static array $allowedProperties = [
        'addLabel' => 'string',
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
        'hidden' => 'boolean',
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

    /**
     * Create a VueForm List Element from an array of elements.
     *
     * @param  array  $data  Array of elements to include in the list.
     * @return static
     *
     * @desc This method generates a List Element in VueForm, where each item in the provided
     *       array becomes a child element in the list. Useful for creating repeatable or
     *       structured lists of form fields.
     */
    public static function schema(array $data)
    {
        $element = new static;
        $groups = [];

        foreach ($data as $value) {
            $groups[] = $value;
        }

        $element->attributes = [
            'schema' => $groups,
            'element-name' => 'list-element',
        ];

        return $element;
    }
}
