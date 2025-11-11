<?php

namespace LaravelVueForm\Elements\Fields;

use LaravelVueForm\Builder\FormSchemaBuilder;

class SignatureElement extends FormSchemaBuilder
{
    protected static array $allowedAttributes = [
        'type', 'container', 'wrapper', 'modes',
        'fonts', 'autoload', 'minFontSize', 'maxFontSize',
        'colors', 'invertColors', 'maxWidth', 'height',
        'uploadWidth', 'uploadHeight', 'maxSize', 'accept',
        'line', 'canClear', 'canUndo', 'canDrop',
        'name', 'id', 'readonly', 'disabled',
        'label', 'placeholder', 'info', 'infoPosition',
        'description', 'before', 'between', 'after',
        'default', 'formatData', 'formatLoad', 'submit',
        'rules', 'fieldName', 'debounce', 'messages',
        'displayErrors', 'conditions', 'columns', 'inline',
        'size', 'view', 'views', 'addClasses',
        'addClass', 'removeClasses', 'removeClass', 'replaceClasses',
        'replaceClass', 'overrideClasses', 'overrideClass', 'templates',
        'presets', 'slots',
    ];

    protected static array $allowedProperties = [
        'mode_', 'font_', 'input_', 'preview_',
        'pad_', 'file_', 'upload_', 'uploadButton_',
        'mode', 'fontFamily', 'fontWeight', 'color',
        'text', 'fontSize', 'pad', 'image',
        'created', 'creating', 'dragging', 'drawn',
        'drawing', 'redos', 'undosLeft', 'width',
        'lastWidth', 'aria', 'placeholder', 'isReadonly',
        'fontFamilies', 'fontWeights', 'processing', 'droppable',
        'resolvedModes', 'resolvedFonts', 'fileAccept', 'showLine',
        'showInput', 'showPlaceholder', 'showUploadContainer', 'showUpload',
        'showPreview', 'showPad', 'showUndos', 'showColors',
        'showModes', 'showFonts', 'showClear', 'tabindex',
        'placeholderText', 'dndText', 'uploadButtonText', 'imgAltText',
        'imgTitleText', 'fontText', 'undoText', 'redoText',
        'modeSelectorAria', 'fontSelectorAria', 'wrapperAriaLabel', 'inputAriaLabel',
        'padAriaLabel', 'colorAriaLabel', 'clearAriaLabel', 'padWidth',
        'padHeight', 'padStyle', 'wrapperStyle', 'inputStyle',
        'lineStyle', 'isRequired', 'useCustomFilled', 'isFilled',
        'isDefault', 'uploaded', 'value', 'model',
        'data', 'requestData', 'empty', 'path',
        'dataPath', 'parent', 'validated', 'invalid',
        'dirty', 'pending', 'busy', 'messageBag',
        'errors', 'error', 'available', 'hidden',
        'visible', 'focused', 'isDisabled', 'isSuccess',
        'isDanger', 'container', 'input', 'fieldId',
        'hasLabel', 'size', 'view', 'template',
        'classes', 'theme', 'form_', 'el_',
        'mounted',
    ];

    protected static array $allowedEventAttributes = [
        'reset', 'clear', 'change', 'before-create',
        'created', 'before-mount', 'mounted', 'before-update',
        'updated', 'before-unmount', 'unmounted',
    ];

    protected static array $allowedSlotAttributes = [
        'label' => [],
        'info' => [],
        'required' => [],
        'description' => [],
        'before' => [],
        'between' => [],
        'after' => [],
        'addon-before' => [],
        'addon-after' => [],
    ];
}
