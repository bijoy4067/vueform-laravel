<?php

namespace VueFormLaravel\Elements\Tabs;

use VueFormLaravel\Builder\FormSchemaBuilder;

class FormStepsControls extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'labels' => 'boolean', // default: 'true'
        'view' => 'string', // default: 'true'
        'schema' => 'object|array' // default '[]'
    ];

    protected static array $allowedProperties = [
        'classes' => 'object',
        'form_' => 'Vueform',
        'size' => 'string',
        'template' => 'object',
        'theme' => 'object',
        'view' => 'string',
    ];

    protected static array $allowedEventAttributes = [];

    protected static array $allowedSlotAttributes = [
        'previous' => [],
        'next' => [],
        'finish' => [],
    ];
}
