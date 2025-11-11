<?php 

namespace LaravelVueForm\Elements;

/**
 * Trait VueElements
 * 
 * This trait holds a list of **custom Vue form elements** used in LaravelVueForm.
 * 
 * Usage:
 * - Add the element's tag name to the $customElements array to register it as a custom element.
 * - Example: 'tags-elements'
 */
class VueElements
{
    /**
     * List of custom Vue elements supported by the form builder.
     *
     * @var array
     */
    public static array $customElements = [
        'tags-element'
    ];
}