# DatesElement

A form demonstrating usage of the DatesElement field within Laravel VueForm. <a href="https://vueform.com/reference/dates-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use LaravelVueForm\Abstracts\VueFormBuilder;
use LaravelVueForm\Elements\Fields\DatesElement;
use LaravelVueForm\Elements\Vueform;
```

---

## 🧩 Example

```php
class DatesElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                DatesElement::name('foo')
            ]);
    }
}
```
---

## ⚙️ Allowed Attributes

| Name | Data Type | Default | Example |
| ---- | ---- | ---- | ---- |
| addClass | `array\|object\|string\|function` | null | `DatesElement::name("name")->addClass()` |
| addClasses | `object\|function` | {} | `DatesElement::name("name")->addClasses()` |
| addons | `object` | {} | `DatesElement::name("name")->addons()` |
| after | `object\|string\|number` | null | `DatesElement::name("name")->after()` |
| autocomplete | `string\|number` | null | `DatesElement::name("name")->autocomplete()` |
| before | `object\|string\|number` | null | `DatesElement::name("name")->before()` |
| between | `object\|string\|number` | null | `DatesElement::name("name")->between()` |
| columns | `object\|string\|number` | null | `DatesElement::name("name")->columns()` |
| conditions | `array` | [] | `DatesElement::name("name")->conditions()` |
| default | `array` | [] | `DatesElement::name("name")->default()` |
| description | `string\|object` | null | `DatesElement::name("name")->description()` |
| disabled | `boolean\|function\|array\|object` | false | `DatesElement::name("name")->disabled()` |
| disables | `array` | [] | `DatesElement::name("name")->disables()` |
| displayErrors | `boolean` | true | `DatesElement::name("name")->displayErrors()` |
| displayFormat | `string` | null | `DatesElement::name("name")->displayFormat()` |
| extendOptions | `object` | {} | `DatesElement::name("name")->extendOptions()` |
| fieldName | `string\|object` | name|label | `DatesElement::name("name")->fieldName()` |
| floating | `string\|boolean\|object` | null | `DatesElement::name("name")->floating()` |
| formatData | `function` | null | `DatesElement::name("name")->formatData()` |
| formatLoad | `function` | null | `DatesElement::name("name")->formatLoad()` |
| id | `string` | null | `DatesElement::name("name")->id()` |
| info | `string\|object` | null | `DatesElement::name("name")->info()` |
| infoPosition | `string` | right | `DatesElement::name("name")->infoPosition()` |
| inline | `boolean` | false | `DatesElement::name("name")->inline()` |
| label | `string\|object\|function` | null | `DatesElement::name("name")->label()` |
| loadFormat | `string\|boolean` | null | `DatesElement::name("name")->loadFormat()` |
| max | `string\|date` | null | `DatesElement::name("name")->max()` |
| messages | `object` | {} | `DatesElement::name("name")->messages()` |
| min | `string\|date` | null | `DatesElement::name("name")->min()` |
| mode | `string` | multiple | `DatesElement::name("name")->mode()` |
| name | `string\|number` | undefined | `DatesElement::name("name")->name()` |
| overrideClass | `array\|object\|string\|function` | null | `DatesElement::name("name")->overrideClass()` |
| overrideClasses | `object\|function` | {} | `DatesElement::name("name")->overrideClasses()` |
| placeholder | `string\|object` | null | `DatesElement::name("name")->placeholder()` |
| presets | `array` | [] | `DatesElement::name("name")->presets()` |
| readonly | `boolean\|function\|array\|object` | false | `DatesElement::name("name")->readonly()` |
| removeClass | `array\|object\|function` | null | `DatesElement::name("name")->removeClass()` |
| removeClasses | `object\|function` | {} | `DatesElement::name("name")->removeClasses()` |
| replaceClass | `object\|function` | null | `DatesElement::name("name")->replaceClass()` |
| replaceClasses | `object\|function` | {} | `DatesElement::name("name")->replaceClasses()` |
| rules | `array\|string\|object` | null | `DatesElement::name("name")->rules()` |
| size | `string` | undefined | `DatesElement::name("name")->size()` |
| slots | `object` | {} | `DatesElement::name("name")->slots()` |
| submit | `boolean` | true | `DatesElement::name("name")->submit()` |
| templates | `object` | {} | `DatesElement::name("name")->templates()` |
| valueFormat | `string\|boolean` | null | `DatesElement::name("name")->valueFormat()` |
| view | `string` | undefined | `DatesElement::name("name")->view()` |
| views | `object` | {} | `DatesElement::name("name")->views()` |

