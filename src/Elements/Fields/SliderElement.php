<?php

namespace LaravelVueForm\Elements\Fields;

use LaravelVueForm\Builder\FormSchemaBuilder;

class SliderElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'addClass',
        'addClasses',
        'after',
        'before',
        'between',
        'columns',
        'default',
        'description',
        'direction',
        'disabled',
        'displayErrors',
        'extendOptions',
        'fieldName',
        'format',
        'formatData',
        'formatLoad',
        'info',
        'infoPosition',
        'inline',
        'label',
        'max',
        'merge',
        'messages',
        'min',
        'orientation',
        'overrideClass',
        'overrideClasses',
        'presets',
        'removeClass',
        'removeClasses',
        'replaceClass',
        'replaceClasses',
        'rules',
        'showTooltip',
        'size',
        'slots',
        'step',
        'submit',
        'templates',
        'tooltipPosition',
        'tooltips',
        'view',
        'views',
    ];

    protected static array $allowedProperties = [
        'aria',
        'busy',
        'classes',
        'data',
        'dataPath',
        'dirty',
        'error',
        'errors',
        'hasLabel',
        'hidden',
        'input',
        'invalid',
        'isDefault',
        'isDisabled',
        'isFilled',
        'isRequired',
        'messageBag',
        'model',
        'pending',
        'requestData',
        'size',
        'useCustomFilled',
        'validated',
        'value',
        'view',
        'visible',
    ];

    protected static array $allowedEventAttributes = [
        'change',
        'clear',
        'reset',
    ];

    protected static array $allowedSlotAttributes = [
        'after' => [],
        'before' => [],
        'between' => [],
        'description' => [],
        'info' => [],
        'label' => [],
        'required' => [],
    ];
}
