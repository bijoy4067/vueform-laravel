<div class="vue-app">

    {{-- STEP 1: DEFINE VARIABLES AND RECURSIVE FUNCTION --}}
    @php
        // Define $formElements and $formOptions from $formData (passed to the view)
        $formElements = $formData['schema'];
        $formOptions = $formData;
        unset($formOptions['schema']); // Remove schema to keep :options clean

        /**
         * Recursive renderer for nested form elements.
         */
        $renderElements = function ($elements) use (&$renderElements) {
            $html = '';

            foreach ($elements as $formElement => $elementData) {
                $component = $elementData['element-name'] ?? $formElement;
                // 1. Render children first (pass the schema array recursively)
                $childHtml = '';
                if (!empty($elementData['schema']) && is_array($elementData['schema'])) {
                    $childHtml = $renderElements($elementData['schema']);
                }
                unset($elementData['schema']);
                unset($elementData['element-name']);

                // 3. Render this element, passing its data and the rendered children
                $html .= view('vueForm::components.core.element-render', [
                    'component' => $component,
                    'data' => $elementData,
                    'html' => $childHtml, // The rendered children
                ])->render();
            }

            return $html;
        };
    @endphp

    <{{ $formOptions['element-name'] . '-inline' }} :data='{!! json_encode($formOptions, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) !!}'>
        {!! $renderElements($formElements) !!}
    </{{ $formOptions['element-name'] . '-inline' }}>

</div>
