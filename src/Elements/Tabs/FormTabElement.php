<?php

namespace VueFormLaravel\Elements\Tabs;

use VueFormLaravel\Builder\FormSchemaBuilder;

class FormTabElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'addClass' => 'array|object|string', // default: '[]'
        'conditions' => 'array', // default: '[]'
        'elements' => 'array', // default: '[]'
        'label' => 'string|object|function', // default: 'true'
        'name' => 'string|number', // default: 'true'
        'overrideClass' => 'array|object|string', // default: '[]'
        'removeClass' => 'array|object', // default: '[]'
        'replaceClass' => 'object', // default: '[]'
        'view' => 'string', // default: '[]'
    ];

    protected static array $allowedProperties = [
        'active' => 'boolean',
        'available' => 'boolean',
        'children_' => 'object',
        'classes' => 'object',
        'elements_' => 'object',
        'form_' => 'Vueform',
        'index' => 'number',
        'invalid' => 'boolean',
        'isFirst' => 'boolean',
        'isLast' => 'boolean',
        'size' => 'string',
        'tabLabel' => 'string|Component',
        'tab_' => 'FormTab',
        'tabs_' => 'FormTabs',
        'template' => 'object',
        'theme' => 'object',
        'view' => 'string',
        'visible' => 'boolean',
    ];

    protected static array $allowedEventAttributes = [
        'activate',
        'inactivate',
    ];

    protected static array $allowedSlotAttributes = [
        'default' => [],
    ];
}
