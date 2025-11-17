# Text Input Element 

A comprehensive form demonstrating various text input types including text, number, email, password, and URL fields with conditional rendering support. <a href="https://vueform.com/reference/text-input-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use LaravelVueForm\Abstracts\VueFormBuilder;
use LaravelVueForm\Elements\Fields\TextElement;
use LaravelVueForm\Elements\Static\ButtonElement;
```

---

## 🧩 Example

```php
class TextElementForm extends VueFormBuilder
{
    protected static $method = 'post';
    /**
     * Build the form structure.s
     *
     * @return array
     */
    protected function buildForm(): array
    {
        return [
            TextElement::name('search')
                ->info(null),
            TextElement::name('addon')->slots([
                'addon-before' => '<i class="fa fa-search"></i>'
            ]),
            TextElement::name('number')
                ->inputType('number')
                ->conditions([
                    ['search', 'not_empty'] 
                ]),
            TextElement::name('email')->inputType('email'),
            TextElement::name('password')->inputType('password'),
            TextElement::name('url')->inputType('url'),
            ButtonElement::submitButton()

        ];
    }

    public static function formData($request)
    {
        $request->validate([
            'search' => 'required'
        ]);

        return response()->json([
            'status' => 'success'
        ]);
    }
}
```
