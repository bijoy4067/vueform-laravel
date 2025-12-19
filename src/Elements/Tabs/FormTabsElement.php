<?php

namespace LaravelVueForm\Elements\Tabs;

use LaravelVueForm\Builder\FormSchemaBuilder;

class FormTabsElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'view' => 'string', // default: NULL
        'schema' => 'array|object' // default: '[]'
    ];

    protected static array $allowedProperties = [
        'classes' => 'object',
        'current_' => 'FormTab',
        'elements_' => 'object',
        'first_' => 'FormTab',
        'form_' => 'Vueform',
        'last_' => 'FormTab',
        'next_' => 'FormTab',
        'previous_' => 'FormTab',
        'size' => 'string',
        'tabs' => 'object',
        'tabsArray' => 'array',
        'tabs_' => 'object',
        'template' => 'object',
        'theme' => 'object',
        'view' => 'string',
        'visible_' => 'object',
    ];

    protected static array $allowedEventAttributes = [
        'select',
    ];

    protected static array $allowedSlotAttributes = [];
}
