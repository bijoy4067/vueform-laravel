<?php

namespace LaravelVueForm\Elements;

use LaravelVueForm\Builder\FormSchemaBuilder;

class Vueform extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'addClass' => 'array|object|string|function',
        'addClasses' => 'object|function',
        'ajax' => 'boolean',
        'columns' => 'object',
        'default' => 'object',
        'disabled' => 'boolean|function|object|array',
        'displayErrors' => 'boolean',
        'displayMessages' => 'boolean',
        'endpoint' => 'string|boolean|function|promise',
        'floatPlaceholders' => 'boolean',
        'forceLabels' => 'boolean',
        'forceNumbers' => 'boolean',
        'formData' => 'function',
        'formKey' => 'string|number',
        'formatData' => 'function',
        'formatLoad' => 'function',
        'language' => 'string',
        'languages' => 'object',
        'loading' => 'boolean',
        'locale' => 'string',
        'messages' => 'object',
        'method' => 'string',
        'modelValue' => 'object',
        'multilingual' => 'boolean',
        'overrideClass' => 'array|object|string|function',
        'overrideClasses' => 'object|function',
        'prepare' => 'function',
        'presets' => 'array',
        'providerOptions' => 'object',
        'providers' => 'object',
        'removeClass' => 'array|object|function',
        'removeClasses' => 'object|function',
        'replaceClass' => 'object|function',
        'replaceClasses' => 'object|function',
        'schema' => 'object',
        'scrollOnNext' => 'boolean',
        'scrollToInvalid' => 'boolean',
        'showRequired' => 'array',
        'size' => 'string',
        'steps' => 'object',
        'stepsControls' => 'boolean',
        'sync' => 'boolean',
        'tabs' => 'object',
        'templates' => 'object',
        'useProviders' => 'object',
        'validateOn' => 'string',
        'value' => 'object',
        'view' => 'string',
        'views' => 'object',
    ];


    protected static array $allowedProperties = [
        'busy' => 'boolean',
        'cancelToken' => 'boolean',
        'classes' => 'object',
        'conditions' => 'boolean',
        'data' => 'object',
        'debouncing' => 'boolean',
        'dirty' => 'boolean',
        'extendedTheme' => 'object',
        'flatTree' => 'array',
        'formErrors' => 'array',
        'formMessages' => 'array',
        'form_' => 'Vueform',
        'hasErrors' => 'boolean',
        'hasMessages' => 'boolean',
        'hasTabs' => 'boolean',
        'invalid' => 'boolean',
        'isDisabled' => 'boolean',
        'isLoading' => 'boolean',
        'isMultilingual' => 'boolean',
        'locale_' => 'string',
        'messageBag' => 'MessageBag',
        'pending' => 'boolean',
        'preparing' => 'boolean',
        'requestData' => 'object',
        'selectedLanguage' => 'string',
        'showErrors' => 'boolean',
        'showLanguages' => 'boolean',
        'showMessages' => 'boolean',
        'showSteps' => 'boolean',
        'showStepsControls' => 'boolean',
        'showTabs' => 'boolean',
        'size' => 'string',
        'steps_' => 'FormSteps',
        'submitting' => 'boolean',
        'tabs_' => 'FormTabs',
        'template' => 'object',
        'translations' => 'object',
        'tree' => 'array',
        'validated' => 'boolean',
        'validation' => 'boolean',
        'view' => 'string',
    ];


    protected static array $allowedEventAttributes = [
        'change',
        'reset',
        'clear',
        'submit',
        'success',
        'error',
        'response',
        'language',
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
        'empty' => [],
    ];

    public static function build()
    {
        return static::name();
    }

    public function showSuccessAlert($type = 'toast')
    {
        $this->attributes['showAlert'] = true;
        $this->attributes['alertType'] = $type;
        return $this;
    }
}
