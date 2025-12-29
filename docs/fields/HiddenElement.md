# HiddenElement

A form demonstrating usage of the HiddenElement field within Laravel VueForm. <a href="https://vueform.com/reference/hidden-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use LaravelVueForm\Abstracts\VueFormBuilder;
use LaravelVueForm\Elements\Fields\HiddenElement;
use LaravelVueForm\Elements\Vueform;
```

---

## 🧩 Example

```php
class HiddenElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                HiddenElement::name('foo')
            ]);
    }
}
```
---

## ⚙️ Allowed Attributes

| Name | Data Type | Default | Example |
| ---- | ---- | ---- | ---- |
| conditions | `array` | [] | `HiddenElement::name("name")->conditions()` |
| default | `string\|number\|object` | null | `HiddenElement::name("name")->default()` |
| displayErrors | `boolean` | true | `HiddenElement::name("name")->displayErrors()` |
| expression | `string\|object` | undefined | `HiddenElement::name("name")->expression()` |
| fieldName | `string\|object` | name|label | `HiddenElement::name("name")->fieldName()` |
| forceNumbers | `boolean` | null | `HiddenElement::name("name")->forceNumbers()` |
| formatData | `function` | null | `HiddenElement::name("name")->formatData()` |
| formatLoad | `function` | null | `HiddenElement::name("name")->formatLoad()` |
| id | `string` | null | `HiddenElement::name("name")->id()` |
| messages | `object` | {} | `HiddenElement::name("name")->messages()` |
| meta | `boolean` | false | `HiddenElement::name("name")->meta()` |
| name | `string\|number` | undefined | `HiddenElement::name("name")->name()` |
| rules | `array\|string\|object` | null | `HiddenElement::name("name")->rules()` |
| submit | `boolean` | true | `HiddenElement::name("name")->submit()` |

