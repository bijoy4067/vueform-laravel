# Phone Input Element 

A complete example form demonstrating how to use the PhoneElement field within Laravel VueForm. 
      This form showcases international phone number handling with country filtering, automatic 
      formatting, and optional unmasking for raw value submission — ideal for forms that require 
      validated and standardized phone input. <a href="https://vueform.com/reference/phone-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use LaravelVueForm\Abstracts\VueFormBuilder;
use LaravelVueForm\Elements\Fields\PhoneElement;
use LaravelVueForm\Elements\Vueform;
```

---

## 🧩 Example

```php
class PhoneElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::name('phone-element-form')
            ->schema([
                PhoneElement::name('phone')
                    ->include(['bd'])
                    ->unmask(true)
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
| `after` | object|string|number |
| `allowIncomplete` | boolean |
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
| `exclude` | array |
| `fieldName` | string|object |
| `floating` | string|boolean|object |
| `formatData` | function |
| `formatLoad` | function |
| `id` | string |
| `include` | array |
| `info` | string|object |
| `infoPosition` | string |
| `inline` | boolean |
| `label` | string|object|function |
| `loading` | boolean |
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
| `unmask` | boolean |
| `view` | string |
| `views` | object |

