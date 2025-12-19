<?php

namespace LaravelVueForm\Elements\Tabs;

use LaravelVueForm\Builder\FormSchemaBuilder;

class FormStepsControl extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'type' => 'string', // default: 'true'
        'view' => 'string', // default: 'true'
    ];

    protected static array $allowedProperties = [
        'classes' => 'object',
        'form_' => 'Vueform',
        'isDisabled' => 'boolean',
        'isLoading' => 'boolean',
        'label' => 'string|Component',
        'size' => 'string',
        'template' => 'object',
        'theme' => 'object',
        'view' => 'string',
        'visible' => 'boolean',
    ];

    protected static array $allowedEventAttributes = [];

    protected static array $allowedSlotAttributes = [
        'default' => [],
    ];
}
