<?php

namespace VueFormLaravel\Traits;


trait DefaultAttributesTraits
{
    protected static array $defaultAllowedAttributes = [
        'conditions' => 'array',
        'container' => 'string',
        'id' => 'string',
        'name' => 'string',
        'type' => 'string',
        'wrapper' => 'string',
    ];


    protected static array $defaultAllowedProperties = [
        'available' => 'array',
        'container' => 'string',
        'el_' => 'VueformElement',
        'fieldId' => 'string',
        'form_' => 'Vueform',
        'mounted' => 'boolean',
        'parent' => 'VueformElement',
        'path' => 'string',
        'template' => 'object',
        'theme' => 'object',
    ];

    protected static array $defaultAllowedEventAttributes = [
        'before-create',
        'before-mount',
        'before-unmount',
        'before-update',
        'created',
        'mounted',
        'unmounted',
        'updated',
    ];
}
