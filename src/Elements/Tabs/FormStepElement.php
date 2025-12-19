<?php

namespace LaravelVueForm\Elements\Tabs;

use LaravelVueForm\Builder\FormSchemaBuilder;

class FormStepElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'addClass' => 'array|object|string', // default: '[]'
        'buttons' => 'object', // default: '{}'
        'conditions' => 'array', // default: '[]'
        'elements' => 'array', // default: '[]'
        'label' => 'string|object|function', // default: 'true'
        'labels' => 'object', // default: '{}'
        'name' => 'string|number', // default: 'true'
        'overrideClass' => 'array|object|string', // default: '[]'
        'removeClass' => 'array|object', // default: '[]'
        'replaceClass' => 'object', // default: '[]'
        'view' => 'string', // default: '[]'
    ];

    protected static array $allowedProperties = [
        'active' => 'boolean',
        'available' => 'boolean',
        'busy' => 'boolean',
        'children_' => 'object',
        'classes' => 'object',
        'completed' => 'boolean',
        'debouncing' => 'boolean',
        'done' => 'boolean',
        'elements_' => 'object',
        'form_' => 'Vueform',
        'index' => 'number',
        'invalid' => 'boolean',
        'isDisabled' => 'boolean',
        'isFirst' => 'boolean',
        'isLast' => 'boolean',
        'pending' => 'boolean',
        'size' => 'string',
        'stepLabel' => 'string|Component',
        'step_' => 'FormStep',
        'steps_' => 'FormSteps',
        'template' => 'object',
        'theme' => 'object',
        'validated' => 'boolean',
        'view' => 'string',
        'visible' => 'boolean',
    ];

    protected static array $allowedEventAttributes = [
        'activate',
        'inactivate',
        'enable',
        'disable',
        'complete',
    ];

    protected static array $allowedSlotAttributes = [
        'default' => [],
    ];
}
