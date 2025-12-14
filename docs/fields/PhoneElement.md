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

| Name | Data Type | Default | Example |
| ---- | ---- | ---- | ---- |
| addClass | `array\|object\|string\|function` | null | `PhoneElement::name("name")->addClass()` |
| addClasses | `object\|function` | {} | `PhoneElement::name("name")->addClasses()` |
| after | `object\|string\|number` | null | `PhoneElement::name("name")->after()` |
| allowIncomplete | `boolean` | false | `PhoneElement::name("name")->allowIncomplete()` |
| attrs | `object` | {} | `PhoneElement::name("name")->attrs()` |
| autocomplete | `string\|number` | null | `PhoneElement::name("name")->autocomplete()` |
| before | `object\|string\|number` | null | `PhoneElement::name("name")->before()` |
| between | `object\|string\|number` | null | `PhoneElement::name("name")->between()` |
| columns | `object\|string\|number` | null | `PhoneElement::name("name")->columns()` |
| conditions | `array` | [] | `PhoneElement::name("name")->conditions()` |
| debounce | `number` | null | `PhoneElement::name("name")->debounce()` |
| default | `string\|number\|object` | null | `PhoneElement::name("name")->default()` |
| description | `string\|object` | null | `PhoneElement::name("name")->description()` |
| disabled | `boolean\|function\|array\|object` | false | `PhoneElement::name("name")->disabled()` |
| displayErrors | `boolean` | true | `PhoneElement::name("name")->displayErrors()` |
| exclude | `array` | [] | `PhoneElement::name("name")->exclude()` |
| fieldName | `string\|object` | name|label | `PhoneElement::name("name")->fieldName()` |
| floating | `string\|boolean\|object` | null | `PhoneElement::name("name")->floating()` |
| formatData | `function` | null | `PhoneElement::name("name")->formatData()` |
| formatLoad | `function` | null | `PhoneElement::name("name")->formatLoad()` |
| id | `string` | null | `PhoneElement::name("name")->id()` |
| include | `array` | [] | `PhoneElement::name("name")->include()` |
| info | `string\|object` | null | `PhoneElement::name("name")->info()` |
| infoPosition | `string` | right | `PhoneElement::name("name")->infoPosition()` |
| inline | `boolean` | false | `PhoneElement::name("name")->inline()` |
| label | `string\|object\|function` | null | `PhoneElement::name("name")->label()` |
| loading | `boolean` | false | `PhoneElement::name("name")->loading()` |
| messages | `object` | {} | `PhoneElement::name("name")->messages()` |
| name | `string\|number` | undefined | `PhoneElement::name("name")->name()` |
| overrideClass | `array\|object\|string\|function` | null | `PhoneElement::name("name")->overrideClass()` |
| overrideClasses | `object\|function` | {} | `PhoneElement::name("name")->overrideClasses()` |
| placeholder | `string\|object` | null | `PhoneElement::name("name")->placeholder()` |
| presets | `array` | [] | `PhoneElement::name("name")->presets()` |
| readonly | `boolean\|function\|array\|object` | false | `PhoneElement::name("name")->readonly()` |
| removeClass | `array\|object\|function` | null | `PhoneElement::name("name")->removeClass()` |
| removeClasses | `object\|function` | {} | `PhoneElement::name("name")->removeClasses()` |
| replaceClass | `object\|function` | null | `PhoneElement::name("name")->replaceClass()` |
| replaceClasses | `object\|function` | {} | `PhoneElement::name("name")->replaceClasses()` |
| rules | `array\|string\|object` | null | `PhoneElement::name("name")->rules()` |
| size | `string` | undefined | `PhoneElement::name("name")->size()` |
| slots | `object` | {} | `PhoneElement::name("name")->slots()` |
| submit | `boolean` | true | `PhoneElement::name("name")->submit()` |
| templates | `object` | {} | `PhoneElement::name("name")->templates()` |
| unmask | `boolean` | false | `PhoneElement::name("name")->unmask()` |
| view | `string` | undefined | `PhoneElement::name("name")->view()` |
| views | `object` | {} | `PhoneElement::name("name")->views()` |

