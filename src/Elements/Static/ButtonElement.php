<?php

namespace VueFormLaravel\Elements\Static;

use VueFormLaravel\Builder\FormSchemaBuilder;

class ButtonElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'addClass' => 'array|object|string|function',
        'addClasses' => 'object|function',
        'after' => 'object|string|number',
        'align' => 'string',
        'before' => 'object|string|number',
        'between' => 'object|string|number',
        'buttonClass' => 'string|array|object',
        'buttonLabel' => 'string|object|function',
        'buttonType' => 'string',
        'columns' => 'object|string|number',
        'conditions' => 'array',
        'danger' => 'boolean',
        'description' => 'string|object',
        'disabled' => 'boolean|function|array|object',
        'full' => 'boolean',
        'href' => 'string',
        'id' => 'string',
        'info' => 'string|object',
        'infoPosition' => 'string',
        'inline' => 'boolean',
        'label' => 'string|object|function',
        'loading' => 'function|boolean',
        'name' => 'string|number',
        'overrideClass' => 'array|object|string|function',
        'overrideClasses' => 'object|function',
        'presets' => 'array',
        'removeClass' => 'array|object|function',
        'removeClasses' => 'object|function',
        'replaceClass' => 'object|function',
        'replaceClasses' => 'object|function',
        'resets' => 'boolean',
        'secondary' => 'boolean',
        'size' => 'string',
        'slots' => 'object',
        'submits' => 'boolean',
        'target' => 'string',
        'templates' => 'object',
        'view' => 'string',
        'views' => 'object',
    ];

    protected static array $allowedProperties = [
        'aria' => 'object',
        'available' => 'boolean',
        'classes' => 'object',
        'container' => 'HTMLElement',
        'el_' => 'VueformElement',
        'fieldId' => 'string',
        'form_' => 'Vueform',
        'hasLabel' => 'boolean',
        'hidden' => 'boolean',
        'isDisabled' => 'boolean',
        'isLoading' => 'boolean',
        'mounted' => 'boolean',
        'parent' => 'VNode',
        'path' => 'string',
        'size' => 'string',
        'template' => 'object',
        'theme' => 'object',
        'view' => 'string',
        'visible' => 'boolean',
    ];

    protected static array $allowedEventAttributes = [
        'click',
    ];

    protected static array $allowedSlotAttributes = [
        'after' => [],
        'before' => [],
        'between' => [],
        'default' => [],
        'description' => [],
        'info' => [],
        'label' => [],
    ];

    /**
     * @desc Create a form submit button
     *
     * @param  array  $data  Optional configuration data (currently unused).
     * @return static
     */
    public static function submitButton(array $data = [])
    {
        $element = new static;

        return $element->name(static::generateRandomName())->submits(true);
    }
}
