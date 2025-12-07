# Text Input Element 

A comprehensive form demonstrating various text input types including text, number, email, password, and URL fields with conditional rendering support. <a href="https://vueform.com/reference/text-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use LaravelVueForm\Abstracts\VueFormBuilder;
use LaravelVueForm\Elements\Fields\TextElement;
use LaravelVueForm\Elements\Static\ButtonElement;
use LaravelVueForm\Elements\Vueform;
```

---

## 🧩 Example

```php
class TextElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::name('text-element-form')
            ->default([
                'search' => 'Search',
                'number' => '123456',
                'email' => 'user@example.com',
                'password' => 'password123',
                'url' => 'https://example.com',
            ])
            ->schema([
                TextElement::name('search')
                    ->info(null)
                    ->addClass('block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focused:outline-sky-500 focus:outline-sky-500 sm:text-sm/6'),
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
            ]);
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
---

## ⚙️ Allowed Attributes

| Name | Data Type |
| --- | --- |
| `addClass` | array|object|string|function |
| `addClasses` | object|function |
| `addons` | object |
| `after` | object|string|number |
| `attrs` | object |
| `autocomplete` | string|number |
| `before` | object|string|number |
| `between` | object|string|number |
| `columns` | object|string|number |
| `conditions` | array |
| `debounce` | number |
| `default` | string|number|object |
| `description` | string|object |
| `disabled` | boolean|function|array|object |
| `displayErrors` | boolean |
| `expression` | string|object |
| `fieldName` | string|object |
| `floating` | string|boolean|object |
| `forceNumbers` | boolean |
| `formatData` | function |
| `formatLoad` | function |
| `id` | string |
| `info` | string|object |
| `infoPosition` | string |
| `inline` | boolean |
| `inputType` | string |
| `label` | string|object|function |
| `loading` | boolean |
| `mask` | string|object|array|function |
| `messages` | object |
| `name` | string|number |
| `overrideClass` | array|object|string|function |
| `overrideClasses` | object|function |
| `placeholder` | string|object |
| `presets` | array |
| `readonly` | boolean|function|array|object |
| `removeClass` | array|object|function |
| `removeClasses` | object|function |
| `replaceClass` | object|function |
| `replaceClasses` | object|function |
| `rules` | array|string|object |
| `size` | string |
| `slots` | object |
| `submit` | boolean |
| `templates` | object |
| `view` | string |
| `views` | object |

