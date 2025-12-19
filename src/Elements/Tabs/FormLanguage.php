<?php

namespace LaravelVueForm\Elements\Tabs;

use LaravelVueForm\Builder\FormSchemaBuilder;

class FormLanguage extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'code' => 'string', // default: 'true'
        'language' => 'string', // default: 'true'
        'view' => 'string', // default: 'true'
    ];

    protected static array $allowedProperties = [
        'classes' => 'object',
        'form_' => 'Vueform',
        'selected' => 'boolean',
        'selectedLanguage' => 'string',
        'size' => 'string',
        'template' => 'object',
        'theme' => 'object',
        'view' => 'string',
    ];

    protected static array $allowedEventAttributes = [
        'select',
    ];

    protected static array $allowedSlotAttributes = [];
}
