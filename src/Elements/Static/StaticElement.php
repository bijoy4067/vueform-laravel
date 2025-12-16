<?php

namespace LaravelVueForm\Elements\Static;

use LaravelVueForm\Builder\FormSchemaBuilder;

class StaticElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'addClass' => 'array|object|string|function',
        'addClasses' => 'object|function',
        'after' => 'object|string|number',
        'align' => 'string',
        'allowHtml' => 'boolean',
        'alt' => 'string',
        'attrs' => 'object',
        'before' => 'object|string|number',
        'between' => 'object|string|number',
        'bottom' => 'string|number',
        'columns' => 'object|string|number',
        'conditions' => 'array',
        'content' => 'string|object|function',
        'description' => 'string|object',
        'expressions' => 'boolean',
        'height' => 'string|number',
        'href' => 'string',
        'id' => 'string',
        'info' => 'string|object',
        'infoPosition' => 'string',
        'inline' => 'boolean',
        'label' => 'string|object|function',
        'name' => 'string|number',
        'overrideClass' => 'array|object|string|function',
        'overrideClasses' => 'object|function',
        'presets' => 'array',
        'removeClass' => 'array|object|function',
        'removeClasses' => 'object|function',
        'replaceClass' => 'object|function',
        'replaceClasses' => 'object|function',
        'size' => 'string',
        'slots' => 'object',
        'src' => 'string',
        'tag' => 'string',
        'target' => 'string',
        'templates' => 'object',
        'title' => 'string',
        'top' => 'string|number',
        'view' => 'string',
        'views' => 'object',
        'width' => 'string|number',
        'wrap' => 'boolean',
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
        'mounted' => 'boolean',
        'parent' => 'VNode',
        'path' => 'string',
        'resolvedContent' => 'any',
        'size' => 'string',
        'template' => 'object',
        'theme' => 'object',
        'view' => 'string',
        'visible' => 'boolean',
    ];

    protected static array $allowedEventAttributes = [];

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
     * @desc Generates a simple static text block without any HTML tag.
     *
     * @param  string  $content  The text content to display.
     * @return static
     */
    public static function text(string $content)
    {
        $element = new static;

        return $element->name('static-content')->content($content);
    }

    /**
     * Create a static <h1> heading element.
     *
     * @desc Renders a bold level-one heading.
     *
     * @param  string  $content  The heading text.
     * @return static
     */
    public static function h1(string $content)
    {
        $element = new static;

        return $element->name('static-content-h1')->tag('h1')->content($content);
    }

    /**
     * Create a static <h2> heading element.
     *
     * @desc Renders a level-two heading.
     *
     * @param  string  $content  The heading text.
     * @return static
     */
    public static function h2(string $content)
    {
        $element = new static;

        return $element->name('static-content-h2')->tag('h2')->content($content);
    }

    /**
     * Create a static <h3> heading element.
     *
     * @desc Renders a level-three heading.
     *
     * @param  string  $content  The heading text.
     * @return static
     */
    public static function h3(string $content)
    {
        $element = new static;

        return $element->name('static-content-h3')->tag('h3')->content($content);
    }

    /**
     * Create a static <h4> heading element.
     *
     * @desc Renders a level-four heading.
     *
     * @param  string  $content  The heading text.
     * @return static
     */
    public static function h4(string $content)
    {
        $element = new static;

        return $element->name('static-content-h4')->tag('h4')->content($content);
    }

    /**
     * Create a static <p> paragraph element.
     *
     * @desc Renders a paragraph containing plain text.
     *
     * @param  string  $content  The paragraph text.
     * @return static
     */
    public static function p(string $content)
    {
        $element = new static;

        return $element->name('static-content-p')->tag('p')->content($content);
    }

    /**
     * Create a static <blockquote> element.
     *
     * @desc Renders a blockquote for quoted content.
     *
     * @param  string  $content  The quote text.
     * @return static
     */
    public static function blockquote(string $content)
    {
        $element = new static;

        return $element->name('static-content-blockquote')->tag('blockquote')->content($content);
    }

    /**
     * Create a static <a> anchor (link) element.
     *
     * @desc Renders a hyperlink with configurable URL and target.
     *
     * @param  string  $href  The URL the link points to.
     * @param  string  $target  The target attribute, defaults to '_blank'.
     * @return static
     */
    public static function a(string $href, string $target = '_blank')
    {
        $element = new static;

        return $element->name('static-content-link')
            ->tag('a')
            ->href($href)
            ->target($target);
    }

    /**
     * Create a static <img> image element.
     *
     * @desc Displays an image with optional alt text, title, and dimensions.
     *
     * @param  string  $src  The image source URL.
     * @param  string  $alt  The alt text for accessibility.
     * @param  string  $title  The image title tooltip.
     * @param  int  $width  The width of the image in pixels.
     * @param  int  $height  The height of the image in pixels.
     * @return static
     */
    public static function img(
        string $src = '',
        string $alt = 'img',
        string $title = '',
        int $width = 30,
        int $height = 30,
    ) {
        $element = new static;

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
     * @desc Renders a visual horizontal divider.
     *
     * @return static
     */
    public static function hr()
    {
        $element = new static;

        return $element->name('static-content-hr')->tag('hr');
    }
}
