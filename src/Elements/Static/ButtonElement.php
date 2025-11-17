<?php

namespace LaravelVueForm\Elements\Static;

use LaravelVueForm\Builder\FormSchemaBuilder;

class ButtonElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'addClass',
        'addClasses',
        'after',
        'align',
        'before',
        'between',
        'buttonClass',
        'buttonLabel',
        'buttonType',
        'columns',
        'danger',
        'description',
        'disabled',
        'full',
        'href',
        'info',
        'infoPosition',
        'inline',
        'label',
        'loading',
        'overrideClass',
        'overrideClasses',
        'presets',
        'removeClass',
        'removeClasses',
        'replaceClass',
        'replaceClasses',
        'resets',
        'secondary',
        'size',
        'slots',
        'submits',
        'target',
        'templates',
        'view',
        'views',
    ];

    protected static array $allowedProperties = [
        'aria',
        'classes',
        'hasLabel',
        'hidden',
        'isDisabled',
        'isLoading',
        'size',
        'view',
        'visible',
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
        $element = new static();
        return $element->name(static::generateRandomName())->submits(true);
    }
}
