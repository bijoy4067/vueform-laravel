<?php

namespace LaravelVueForm\Elements\Tabs;

use LaravelVueForm\Builder\FormSchemaBuilder;

class FormLanguages extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'view' => 'string', // default: '{string} language'
        'schema' => 'object|array' // default '[]'
    ];

    protected static array $allowedProperties = [
        'classes' => 'object',
        'form_' => 'Vueform',
        'language' => 'string',
        'languages' => 'object',
        'size' => 'string',
        'template' => 'object',
        'theme' => 'object',
        'view' => 'string',
    ];

    protected static array $allowedEventAttributes = [];

    protected static array $allowedSlotAttributes = [];
}
