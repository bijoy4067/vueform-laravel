<?php

namespace LaravelVueForm\Elements\Fields;

use LaravelVueForm\Builder\FormSchemaBuilder;

class SignatureElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'accept' => 'array', // default: '["jpg","png","svg"]'
        'addClass' => 'array|object|string|function', // default: 'null'
        'addClasses' => 'object|function', // default: '{}'
        'after' => 'object|string|number', // default: 'null'
        'autoload' => 'boolean', // default: 'true'
        'before' => 'object|string|number', // default: 'null'
        'between' => 'object|string|number', // default: 'null'
        'canClear' => 'boolean', // default: 'true'
        'canDrop' => 'boolean', // default: 'true'
        'canUndo' => 'boolean', // default: 'true'
        'colors' => 'array', // default: '["#000000","#2558b2","#f22f30"]'
        'columns' => 'object|string|number', // default: 'null'
        'conditions' => 'array', // default: '[]'
        'debounce' => 'number', // default: 'null'
        'default' => 'string|number|object', // default: 'null'
        'description' => 'string|object', // default: 'null'
        'disabled' => 'boolean|function|array|object', // default: 'false'
        'displayErrors' => 'boolean', // default: 'true'
        'fieldName' => 'string|object', // default: 'name|label'
        'fonts' => 'array', // default: '["Caveat@400","Sacramento@400","Dancing Script@400"]'
        'formatData' => 'function', // default: 'null'
        'formatLoad' => 'function', // default: 'null'
        'height' => 'number', // default: '160'
        'id' => 'string', // default: 'null'
        'info' => 'string|object', // default: 'null'
        'infoPosition' => 'string', // default: 'right'
        'inline' => 'boolean', // default: 'false'
        'invertColors' => 'array', // default: '["#000000"]'
        'label' => 'string|object|function', // default: 'null'
        'line' => 'boolean', // default: 'true'
        'maxFontSize' => 'number', // default: '60'
        'maxSize' => 'number', // default: '2048'
        'maxWidth' => 'number|string', // default: 'auto'
        'messages' => 'object', // default: '{}'
        'minFontSize' => 'number', // default: '10'
        'modes' => 'array', // default: '["draw","type","upload"]'
        'name' => 'string|number', // default: 'undefined'
        'overrideClass' => 'array|object|string|function', // default: 'null'
        'overrideClasses' => 'object|function', // default: '{}'
        'placeholder' => 'string|object|boolean', // default: 'null'
        'presets' => 'array', // default: '[]'
        'readonly' => 'boolean|function|array|object', // default: 'false'
        'removeClass' => 'array|object|function', // default: 'null'
        'removeClasses' => 'object|function', // default: '{}'
        'replaceClass' => 'object|function', // default: 'null'
        'replaceClasses' => 'object|function', // default: '{}'
        'rules' => 'array|string|object', // default: 'null'
        'size' => 'string', // default: 'undefined'
        'slots' => 'object', // default: '{}'
        'submit' => 'boolean', // default: 'true'
        'templates' => 'object', // default: '{}'
        'uploadHeight' => 'number', // default: '160'
        'uploadWidth' => 'number', // default: '480'
        'view' => 'string', // default: 'undefined'
        'views' => 'object', // default: '{}'
    ];

    protected static array $allowedProperties = [
        'aria' => 'object',
        'available' => 'boolean',
        'busy' => 'boolean',
        'classes' => 'object',
        'clearAriaLabel' => 'string',
        'color' => 'string',
        'colorAriaLabel' => 'string',
        'container' => 'HTMLElement',
        'created' => 'boolean',
        'creating' => 'boolean',
        'data' => 'object',
        'dataPath' => 'string',
        'dirty' => 'boolean',
        'dndText' => 'string',
        'dragging' => 'boolean',
        'drawing' => 'boolean',
        'drawn' => 'boolean',
        'droppable' => 'boolean',
        'el_' => 'VueformElement',
        'empty' => 'boolean',
        'error' => 'string',
        'errors' => 'array',
        'fieldId' => 'string',
        'fileAccept' => 'string',
        'file_' => 'HTMLInputElement',
        'focused' => 'boolean',
        'fontFamilies' => 'array',
        'fontFamily' => 'string',
        'fontSelectorAria' => 'object',
        'fontSize' => 'number',
        'fontText' => 'string',
        'fontWeight' => 'string',
        'fontWeights' => 'array',
        'font_' => 'ElementAddonOptions',
        'form_' => 'Vueform',
        'hasLabel' => 'boolean',
        'hidden' => 'boolean',
        'image' => 'File',
        'imgAltText' => 'string',
        'imgTitleText' => 'string',
        'input' => 'HTMLElement',
        'inputAriaLabel' => 'string',
        'inputStyle' => 'object',
        'input_' => 'HTMLInputElement',
        'invalid' => 'boolean',
        'isDanger' => 'boolean',
        'isDefault' => 'boolean',
        'isDisabled' => 'boolean',
        'isFilled' => 'boolean',
        'isReadonly' => 'boolean',
        'isRequired' => 'boolean',
        'isSuccess' => 'boolean',
        'lastWidth' => 'number',
        'lineStyle' => 'object',
        'messageBag' => 'MessageBag',
        'mode' => 'string',
        'modeSelectorAria' => 'object',
        'mode_' => 'ElementAddonOptions',
        'model' => 'any',
        'mounted' => 'boolean',
        'pad' => 'object',
        'padAriaLabel' => 'string',
        'padHeight' => 'number',
        'padStyle' => 'object',
        'padWidth' => 'number',
        'pad_' => 'HTMLCanvasElement',
        'parent' => 'VNode',
        'path' => 'string',
        'pending' => 'boolean',
        'placeholder' => 'string',
        'placeholderText' => 'string',
        'preview_' => 'HTMLCanvasElement',
        'processing' => 'boolean',
        'redoText' => 'string',
        'redos' => 'array',
        'requestData' => 'object',
        'resolvedFonts' => 'array',
        'resolvedModes' => 'array',
        'showClear' => 'boolean',
        'showColors' => 'boolean',
        'showFonts' => 'boolean',
        'showInput' => 'boolean',
        'showLine' => 'boolean',
        'showModes' => 'boolean',
        'showPad' => 'boolean',
        'showPlaceholder' => 'boolean',
        'showPreview' => 'boolean',
        'showUndos' => 'boolean',
        'showUpload' => 'boolean',
        'showUploadContainer' => 'boolean',
        'size' => 'string',
        'tabindex' => 'number|undefined',
        'template' => 'object',
        'text' => 'string',
        'theme' => 'object',
        'undoText' => 'string',
        'undosLeft' => 'number',
        'uploadButtonText' => 'string',
        'uploadButton_' => 'HTMLElement',
        'upload_' => 'HTMLElement',
        'uploaded' => 'boolean',
        'useCustomFilled' => 'boolean',
        'validated' => 'boolean',
        'value' => 'any',
        'view' => 'string',
        'visible' => 'boolean',
        'width' => 'number',
        'wrapperAriaLabel' => 'string',
        'wrapperStyle' => 'object',
    ];

    protected static array $allowedEventAttributes = [
        'change',
        'clear',
        'reset',
    ];

    protected static array $allowedSlotAttributes = [
        'addon-after' => [],
        'addon-before' => [],
        'after' => [],
        'before' => [],
        'between' => [],
        'description' => [],
        'info' => [],
        'label' => [],
        'required' => [],
    ];
}
