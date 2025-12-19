<?php

namespace LaravelVueForm\Elements\Tabs;

use LaravelVueForm\Builder\FormSchemaBuilder;

class FormStepsElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'view' => 'string', // default: 'inject'
        'schema' => 'object|array' // default '[]'
    ];

    protected static array $allowedProperties = [
        'busy' => 'boolean',
        'classes' => 'object',
        'current_' => 'FormStep|undefined',
        'debouncing' => 'boolean',
        'done' => 'boolean',
        'elements_' => 'object',
        'firstInvalid_' => 'FormStep|undefined',
        'firstNonDone_' => 'FormStep|undefined',
        'first_' => 'FormStep|undefined',
        'form_' => 'Vueform',
        'invalid' => 'boolean',
        'isAtFirstStep' => 'boolean',
        'isAtLastStep' => 'boolean',
        'lastEnabled_' => 'FormStep|undefined',
        'last_' => 'FormStep|undefined',
        'next_' => 'FormStep|undefined',
        'pending' => 'boolean',
        'previous_' => 'FormStep|undefined',
        'size' => 'string',
        'steps' => 'object',
        'stepsArray' => 'array',
        'steps_' => 'object',
        'template' => 'object',
        'theme' => 'object',
        'view' => 'string',
        'visible_' => 'object',
    ];

    protected static array $allowedEventAttributes = [
        'select',
        'next',
        'previous',
        'finish',
    ];

    protected static array $allowedSlotAttributes = [];
}
