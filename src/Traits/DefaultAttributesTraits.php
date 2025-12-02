<?php 

namespace LaravelVueForm\Traits;

trait DefaultAttributesTraits 
{
    protected static array $defaultAllowedAttributes = [
        'conditions',
        'container',
        'id',
        'name',
        'type',
        'wrapper',
    ];

    protected static array $defaultAllowedProperties = [
        'available',
        'container',
        'el_',
        'fieldId',
        'form_',
        'mounted',
        'parent',
        'path',
        'template',
        'theme',
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