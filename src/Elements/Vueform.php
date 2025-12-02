<?php

namespace LaravelVueForm\Elements;

use LaravelVueForm\Builder\FormSchemaBuilder;

class Vueform extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'ajax',
        'type',
        'container',
        'wrapper',
        'schema',
        'tabs',
        'steps',
        'stepsControls',
        'scrollOnNext',
        'validateOn',
        'scrollToInvalid',
        'showRequired',
        'displayErrors',
        'displayMessages',
        'messages',
        'endpoint',
        'method',
        'prepare',
        'formKey',
        'formData',
        'value',
        'modelValue',
        'sync',
        'default',
        'forceNumbers',
        'formatData',
        'formatLoad',
        'loading',
        'disabled',
        'columns',
        'forceLabels',
        'floatPlaceholders',
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
        'multilingual',
        'languages',
        'language',
        'locale',
        'providers',
        'useProviders',
        'providerOptions',

        'showSuccessAlert'
    ];

    protected static array $allowedProperties = [
        'validation',
        'conditions',
        'selectedLanguage',
        'submitting',
        'cancelToken',
        'formErrors',
        'formMessages',
        'hasTabs',
        'hasErrors',
        'hasMessages',
        'isMultilingual',
        'showErrors',
        'showMessages',
        'showLanguages',
        'showSteps',
        'showTabs',
        'showStepsControls',
        'extendedTheme',
        'tree',
        'flatTree',
        'translations',
        'locale_',
        'steps_',
        'tabs_',
        'preparing',
        'data',
        'requestData',
        'validated',
        'invalid',
        'dirty',
        'pending',
        'debouncing',
        'busy',
        'messageBag',
        'isDisabled',
        'isLoading',
        'size',
        'view',
        'template',
        'classes',
        'form_',
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

    // public static function schema($data)
    // {
    //     $instance = new static();
    //     $instance->attributes = [
    //         'schema' => $data,  // Convert to array if object
    //         'element' => 'vue-form',
    //     ];
    //     dd($instance);
    //     return $instance->toArray();
    // }

    public function showSuccessAlert($type = 'toast')
    {
        $this->attributes['showAlert'] = true;
        $this->attributes['alertType'] = $type;
        return $this;
    }
}
