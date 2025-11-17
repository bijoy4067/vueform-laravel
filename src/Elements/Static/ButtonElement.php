<?php

namespace LaravelVueForm\Elements\Static;

use LaravelVueForm\Builder\FormSchemaBuilder;

class ButtonElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'type',
        'container',
        'wrapper',
        'buttonLabel',
        'buttonType',
        'buttonClass',
        'loading',
        'href',
        'target',
        'resets',
        'submits',
        'secondary',
        'danger',
        'full',
        'align',
        'name',
        'id',
        'disabled',
        'label',
        'info',
        'infoPosition',
        'description',
        'before',
        'between',
        'after',
        'conditions',
        'columns',
        'inline',
        'size',
        'view',
        'views',
        'addClasses',
        'addClass',
        'removeClasses',
        'removeClass',
        'replaceClasses',
        'replaceClass',
        'overrideClasses',
        'overrideClass',
        'templates',
        'presets',
        'slots',
    ];

    protected static array $allowedProperties = [
        'aria',
        'path',
        'parent',
        'available',
        'hidden',
        'visible',
        'isDisabled',
        'isLoading',
        'container',
        'fieldId',
        'hasLabel',
        'size',
        'view',
        'template',
        'classes',
        'theme',
        'form_',
        'el_',
        'mounted',
    ];

    protected static array $allowedEventAttributes = [
        'click',
        'before-create',
        'created',
        'before-mount',
        'mounted',
        'before-update',
        'updated',
        'before-unmount',
        'unmounted',
    ];

    protected static array $allowedSlotAttributes = [
        'label' => [],
        'info' => [],
        'description' => [],
        'before' => [],
        'between' => [],
        'after' => [],
        'default' => [],
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
