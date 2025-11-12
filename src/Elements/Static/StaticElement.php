<?php

namespace LaravelVueForm\Elements\Static;

use LaravelVueForm\Builder\FormSchemaBuilder;

class StaticElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'type',
        'container',
        'wrapper',
        'content',
        'expressions',
        'wrap',
        'tag',
        'allowHtml',
        'href',
        'target',
        'src',
        'alt',
        'title',
        'width',
        'height',
        'align',
        'top',
        'bottom',
        'name',
        'id',
        'attrs',
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
        'resolvedContent',
        'path',
        'parent',
        'available',
        'hidden',
        'visible',
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
        'default' => [],
        'label' => [],
        'info' => [],
        'description' => [],
        'before' => [],
        'between' => [],
        'after' => [],
    ];

    public static function text(string $content)
    {
        $element = new static();
        return $element->name('static-content')->content($content);
    }

    public static function h1(string $content)
    {
        $element = new static();
        return $element->name('static-content-h1')->tag('h1')->content($content);
    }

    public static function h2(string $content)
    {
        $element = new static();
        return $element->name('static-content-h2')->tag('h2')->content($content);
    }

    public static function h3(string $content)
    {
        $element = new static();
        return $element->name('static-content-h3')->tag('h3')->content($content);
    }

    public static function h4(string $content)
    {
        $element = new static();
        return $element->name('static-content-h4')->tag('h4')->content($content);
    }

    public static function p(string $content)
    {
        $element = new static();
        return $element->name('static-content-p')->tag('p')->content($content);
    }

    public static function blockquote(string $content)
    {
        $element = new static();
        return $element->name('static-content-blockquote')->tag('blockquote')->content($content);
    }

    public static function a(
        string $href,
        string $target = '_blank'
    ) {
        $element = new static();
        return $element->name('static-content-blockquote')
            ->tag('a')
            ->href($href)
            ->target($target);
    }

    public static function img(
        string $src = '',
        string $alt = 'img',
        string $title = '',
        int $width = 30,
        int $height = 30,
    ) {
        $element = new static();
        return $element->name('static-content-img')
            ->tag('img')
            ->src($src)
            ->alt($alt)
            ->title($title)
            ->width($width)
            ->height($height);
    }

    public static function hr()
    {
        $element = new static();
        return $element->name('static-content-hr')->tag('hr');
    }
}
