# DateElement

A form demonstrating usage of the DateElement field within Laravel VueForm. <a href="https://vueform.com/reference/date-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\DateElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class DateElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                DateElement::name('foo')
            ]);
    }
}
```
---

## ⚙️ Allowed Attributes

| Name | Data Type | Default | Example |
| ---- | ---- | ---- | ---- |
| addClass | `array\|object\|string\|function` | null | `DateElement::name("name")->addClass()` |
| addClasses | `object\|function` | {} | `DateElement::name("name")->addClasses()` |
| addons | `object` | {} | `DateElement::name("name")->addons()` |
| after | `object\|string\|number` | null | `DateElement::name("name")->after()` |
| autocomplete | `string\|number` | null | `DateElement::name("name")->autocomplete()` |
| before | `object\|string\|number` | null | `DateElement::name("name")->before()` |
| between | `object\|string\|number` | null | `DateElement::name("name")->between()` |
| columns | `object\|string\|number` | null | `DateElement::name("name")->columns()` |
| conditions | `array` | [] | `DateElement::name("name")->conditions()` |
| date | `boolean` | true | `DateElement::name("name")->date()` |
| default | `string\|date` | null | `DateElement::name("name")->default()` |
| description | `string\|object` | null | `DateElement::name("name")->description()` |
| disabled | `boolean\|function\|array\|object` | false | `DateElement::name("name")->disabled()` |
| disables | `array` | [] | `DateElement::name("name")->disables()` |
| displayErrors | `boolean` | true | `DateElement::name("name")->displayErrors()` |
| displayFormat | `string` | locale.vueform.dateFormats.* | `DateElement::name("name")->displayFormat()` |
| extendOptions | `object` | {} | `DateElement::name("name")->extendOptions()` |
| fieldName | `string\|object` | name|label | `DateElement::name("name")->fieldName()` |
| floating | `string\|boolean\|object` | null | `DateElement::name("name")->floating()` |
| formatData | `function` | null | `DateElement::name("name")->formatData()` |
| formatLoad | `function` | null | `DateElement::name("name")->formatLoad()` |
| hour24 | `boolean` | true | `DateElement::name("name")->hour24()` |
| id | `string` | null | `DateElement::name("name")->id()` |
| info | `string\|object` | null | `DateElement::name("name")->info()` |
| infoPosition | `string` | right | `DateElement::name("name")->infoPosition()` |
| inline | `boolean` | false | `DateElement::name("name")->inline()` |
| label | `string\|object\|function` | null | `DateElement::name("name")->label()` |
| loadFormat | `string` | locale.vueform.dateFormats.* | `DateElement::name("name")->loadFormat()` |
| max | `string\|date` | null | `DateElement::name("name")->max()` |
| messages | `object` | {} | `DateElement::name("name")->messages()` |
| min | `string\|date` | null | `DateElement::name("name")->min()` |
| name | `string\|number` | undefined | `DateElement::name("name")->name()` |
| overrideClass | `array\|object\|string\|function` | null | `DateElement::name("name")->overrideClass()` |
| overrideClasses | `object\|function` | {} | `DateElement::name("name")->overrideClasses()` |
| placeholder | `string\|object` | null | `DateElement::name("name")->placeholder()` |
| presets | `array` | [] | `DateElement::name("name")->presets()` |
| readonly | `boolean\|function\|array\|object` | false | `DateElement::name("name")->readonly()` |
| removeClass | `array\|object\|function` | null | `DateElement::name("name")->removeClass()` |
| removeClasses | `object\|function` | {} | `DateElement::name("name")->removeClasses()` |
| replaceClass | `object\|function` | null | `DateElement::name("name")->replaceClass()` |
| replaceClasses | `object\|function` | {} | `DateElement::name("name")->replaceClasses()` |
| rules | `array\|string\|object` | null | `DateElement::name("name")->rules()` |
| seconds | `boolean` | false | `DateElement::name("name")->seconds()` |
| size | `string` | undefined | `DateElement::name("name")->size()` |
| slots | `object` | {} | `DateElement::name("name")->slots()` |
| submit | `boolean` | true | `DateElement::name("name")->submit()` |
| templates | `object` | {} | `DateElement::name("name")->templates()` |
| time | `boolean` | false | `DateElement::name("name")->time()` |
| valueFormat | `string\|boolean` | locale.vueform.dateFormats.* | `DateElement::name("name")->valueFormat()` |
| view | `string` | undefined | `DateElement::name("name")->view()` |
| views | `object` | {} | `DateElement::name("name")->views()` |

---

## ⚡ Events

| Name | Parameters | Description |
| --- | --- | --- |
| `reset` | - {component} el$ - the element's component | Triggered when the input is resetted. |
| `clear` | - {component} el$ - the element's component | Triggered when the input is cleared. |
| `change` | - {string} newValue - the new value<br>- {string} oldValue - the old value<br>- {component} el$ - the element's component | Triggered when the element's value is changed. |
| `beforeCreate` | - {component} el$ - the element's component | Triggered in beforeCreate hook. |
| `created` | - {component} el$ - the element's component | Triggered in created hook. |
| `beforeMount` | - {component} el$ - the element's component | Triggered in beforeMount hook. |
| `mounted` | - {component} el$ - the element's component | Triggered in mounted hook. |
| `beforeUpdate` | - {component} el$ - the element's component | Triggered in beforeUpdate hook. |
| `updated` | - {component} el$ - the element's component | Triggered in updated hook. |
| `beforeUnmount` | - {component} el$ - the element's component | Triggered in beforeUnmount (or beforeDestroy in Vue 2) hook. |
| `unmounted` | - {component} el$ - the element's component | Triggered in unmounted (or destroyed in Vue 2) hook. |

