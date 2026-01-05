# CheckboxGroupElement

A form demonstrating usage of the CheckboxgroupElement field within Laravel VueForm. <a href="https://vueform.com/reference/checkboxgroup-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\CheckboxgroupElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class CheckboxgroupElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                CheckboxgroupElement::name('foo')
            ]);
    }
}
```
---

## ⚙️ Allowed Attributes

| Name | Data Type | Default | Example |
| ---- | ---- | ---- | ---- |
| addClass | `array\|object\|string\|function` | null | `CheckboxgroupElement::name("name")->addClass()` |
| addClasses | `object\|function` | {} | `CheckboxgroupElement::name("name")->addClasses()` |
| after | `object\|string\|number` | null | `CheckboxgroupElement::name("name")->after()` |
| before | `object\|string\|number` | null | `CheckboxgroupElement::name("name")->before()` |
| between | `object\|string\|number` | null | `CheckboxgroupElement::name("name")->between()` |
| clearOnRefetch | `boolean` | true | `CheckboxgroupElement::name("name")->clearOnRefetch()` |
| columns | `object\|string\|number` | null | `CheckboxgroupElement::name("name")->columns()` |
| conditions | `array` | [] | `CheckboxgroupElement::name("name")->conditions()` |
| default | `array` | [] | `CheckboxgroupElement::name("name")->default()` |
| description | `string\|object` | null | `CheckboxgroupElement::name("name")->description()` |
| disabled | `boolean\|function\|array\|object` | false | `CheckboxgroupElement::name("name")->disabled()` |
| disables | `array` | [] | `CheckboxgroupElement::name("name")->disables()` |
| displayErrors | `boolean` | true | `CheckboxgroupElement::name("name")->displayErrors()` |
| fieldName | `string\|object` | name|label | `CheckboxgroupElement::name("name")->fieldName()` |
| formatData | `function` | null | `CheckboxgroupElement::name("name")->formatData()` |
| formatLoad | `function` | null | `CheckboxgroupElement::name("name")->formatLoad()` |
| id | `string` | null | `CheckboxgroupElement::name("name")->id()` |
| info | `string\|object` | null | `CheckboxgroupElement::name("name")->info()` |
| infoPosition | `string` | right | `CheckboxgroupElement::name("name")->infoPosition()` |
| inline | `boolean` | false | `CheckboxgroupElement::name("name")->inline()` |
| items | `object\|array\|function\|string` | {} | `CheckboxgroupElement::name("name")->items()` |
| label | `string\|object\|function` | null | `CheckboxgroupElement::name("name")->label()` |
| messages | `object` | {} | `CheckboxgroupElement::name("name")->messages()` |
| name | `string\|number` | undefined | `CheckboxgroupElement::name("name")->name()` |
| overrideClass | `array\|object\|string\|function` | null | `CheckboxgroupElement::name("name")->overrideClass()` |
| overrideClasses | `object\|function` | {} | `CheckboxgroupElement::name("name")->overrideClasses()` |
| presets | `array` | [] | `CheckboxgroupElement::name("name")->presets()` |
| removeClass | `array\|object\|function` | null | `CheckboxgroupElement::name("name")->removeClass()` |
| removeClasses | `object\|function` | {} | `CheckboxgroupElement::name("name")->removeClasses()` |
| replaceClass | `object\|function` | null | `CheckboxgroupElement::name("name")->replaceClass()` |
| replaceClasses | `object\|function` | {} | `CheckboxgroupElement::name("name")->replaceClasses()` |
| rules | `array\|string\|object` | null | `CheckboxgroupElement::name("name")->rules()` |
| size | `string` | undefined | `CheckboxgroupElement::name("name")->size()` |
| slots | `object` | {} | `CheckboxgroupElement::name("name")->slots()` |
| submit | `boolean` | true | `CheckboxgroupElement::name("name")->submit()` |
| templates | `object` | {} | `CheckboxgroupElement::name("name")->templates()` |
| view | `string` | undefined | `CheckboxgroupElement::name("name")->view()` |
| views | `object` | {} | `CheckboxgroupElement::name("name")->views()` |

