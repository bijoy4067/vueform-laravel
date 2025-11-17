<?php

namespace LaravelVueForm\Elements\Static;

use LaravelVueForm\Builder\FormSchemaBuilder;

class StaticElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'addClass',
        'addClasses',
        'after',
        'align',
        'allowHtml',
        'alt',
        'attrs',
        'before',
        'between',
        'bottom',
        'columns',
        'content',
        'description',
        'expressions',
        'height',
        'href',
        'info',
        'infoPosition',
        'inline',
        'label',
        'overrideClass',
        'overrideClasses',
        'presets',
        'removeClass',
        'removeClasses',
        'replaceClass',
        'replaceClasses',
        'size',
        'slots',
        'src',
        'tag',
        'target',
        'templates',
        'title',
        'top',
        'view',
        'views',
        'width',
        'wrap',
    ];

    protected static array $allowedProperties = [
        'aria',
        'classes',
        'hasLabel',
        'hidden',
        'resolvedContent',
        'size',
        'view',
        'visible',
    ];

    protected static array $allowedEventAttributes = [

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
     * Create a plain static text element.
     *
     * @param string $content The text content to display.
     * @return static
     */
    public static function text(string $content)
    {
        $element = new static();
        return $element->name('static-content')->content($content);
    }

    /**
     * Create a static <h1> heading element.
     *
     * @param string $content The heading text.
     * @return static
     */
    public static function h1(string $content)
    {
        $element = new static();
        return $element->name('static-content-h1')->tag('h1')->content($content);
    }

    /**
     * Create a static <h2> heading element.
     *
     * @param string $content The heading text.
     * @return static
     */
    public static function h2(string $content)
    {
        $element = new static();
        return $element->name('static-content-h2')->tag('h2')->content($content);
    }

    /**
     * Create a static <h3> heading element.
     *
     * @param string $content The heading text.
     * @return static
     */
    public static function h3(string $content)
    {
        $element = new static();
        return $element->name('static-content-h3')->tag('h3')->content($content);
    }

    /**
     * Create a static <h4> heading element.
     *
     * @param string $content The heading text.
     * @return static
     */
    public static function h4(string $content)
    {
        $element = new static();
        return $element->name('static-content-h4')->tag('h4')->content($content);
    }

    /**
     * Create a static <p> paragraph element.
     *
     * @param string $content The paragraph text.
     * @return static
     */
    public static function p(string $content)
    {
        $element = new static();
        return $element->name('static-content-p')->tag('p')->content($content);
    }

    /**
     * Create a static <blockquote> element.
     *
     * @param string $content The quote text.
     * @return static
     */
    public static function blockquote(string $content)
    {
        $element = new static();
        return $element->name('static-content-blockquote')->tag('blockquote')->content($content);
    }

    /**
     * Create a static <a> anchor (link) element.
     *
     * @param string $href   The URL the link points to.
     * @param string $target The target attribute, defaults to '_blank'.
     * @return static
     */
    public static function a(string $href, string $target = '_blank')
    {
        $element = new static();
        return $element->name('static-content-link')
            ->tag('a')
            ->href($href)
            ->target($target);
    }

    /**
     * Create a static <img> image element.
     *
     * @param string $src     The image source URL.
     * @param string $alt     The alt text for accessibility.
     * @param string $title   The image title tooltip.
     * @param int    $width   The width of the image in pixels.
     * @param int    $height  The height of the image in pixels.
     * @return static
     */
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

    /**
     * Create a static <hr> horizontal rule element.
     *
     * @return static
     */
    public static function hr()
    {
        $element = new static();
        return $element->name('static-content-hr')->tag('hr');
    }
}
