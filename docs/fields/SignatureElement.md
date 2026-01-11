# SignatureElement

A form demonstrating usage of the SignatureElement field within Laravel VueForm. <a href="https://vueform.com/reference/signature-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\SignatureElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class SignatureElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                SignatureElement::name('foo')
            ]);
    }
}
```
---

## ⚙️ Allowed Attributes

| Name | Data Type | Default | Example |
| ---- | ---- | ---- | ---- |
| accept | `array` | ["jpg","png","svg"] | `SignatureElement::name("name")->accept()` |
| addClass | `array\|object\|string\|function` | null | `SignatureElement::name("name")->addClass()` |
| addClasses | `object\|function` | {} | `SignatureElement::name("name")->addClasses()` |
| after | `object\|string\|number` | null | `SignatureElement::name("name")->after()` |
| autoload | `boolean` | true | `SignatureElement::name("name")->autoload()` |
| before | `object\|string\|number` | null | `SignatureElement::name("name")->before()` |
| between | `object\|string\|number` | null | `SignatureElement::name("name")->between()` |
| canClear | `boolean` | true | `SignatureElement::name("name")->canClear()` |
| canDrop | `boolean` | true | `SignatureElement::name("name")->canDrop()` |
| canUndo | `boolean` | true | `SignatureElement::name("name")->canUndo()` |
| colors | `array` | ["#000000","#2558b2","#f22f30"] | `SignatureElement::name("name")->colors()` |
| columns | `object\|string\|number` | null | `SignatureElement::name("name")->columns()` |
| conditions | `array` | [] | `SignatureElement::name("name")->conditions()` |
| debounce | `number` | null | `SignatureElement::name("name")->debounce()` |
| default | `string\|number\|object` | null | `SignatureElement::name("name")->default()` |
| description | `string\|object` | null | `SignatureElement::name("name")->description()` |
| disabled | `boolean\|function\|array\|object` | false | `SignatureElement::name("name")->disabled()` |
| displayErrors | `boolean` | true | `SignatureElement::name("name")->displayErrors()` |
| fieldName | `string\|object` | name|label | `SignatureElement::name("name")->fieldName()` |
| fonts | `array` | ["Caveat@400","Sacramento@400","Dancing Script@400"] | `SignatureElement::name("name")->fonts()` |
| formatData | `function` | null | `SignatureElement::name("name")->formatData()` |
| formatLoad | `function` | null | `SignatureElement::name("name")->formatLoad()` |
| height | `number` | 160 | `SignatureElement::name("name")->height()` |
| id | `string` | null | `SignatureElement::name("name")->id()` |
| info | `string\|object` | null | `SignatureElement::name("name")->info()` |
| infoPosition | `string` | right | `SignatureElement::name("name")->infoPosition()` |
| inline | `boolean` | false | `SignatureElement::name("name")->inline()` |
| invertColors | `array` | ["#000000"] | `SignatureElement::name("name")->invertColors()` |
| label | `string\|object\|function` | null | `SignatureElement::name("name")->label()` |
| line | `boolean` | true | `SignatureElement::name("name")->line()` |
| maxFontSize | `number` | 60 | `SignatureElement::name("name")->maxFontSize()` |
| maxSize | `number` | 2048 | `SignatureElement::name("name")->maxSize()` |
| maxWidth | `number\|string` | auto | `SignatureElement::name("name")->maxWidth()` |
| messages | `object` | {} | `SignatureElement::name("name")->messages()` |
| minFontSize | `number` | 10 | `SignatureElement::name("name")->minFontSize()` |
| modes | `array` | ["draw","type","upload"] | `SignatureElement::name("name")->modes()` |
| name | `string\|number` | undefined | `SignatureElement::name("name")->name()` |
| overrideClass | `array\|object\|string\|function` | null | `SignatureElement::name("name")->overrideClass()` |
| overrideClasses | `object\|function` | {} | `SignatureElement::name("name")->overrideClasses()` |
| placeholder | `string\|object\|boolean` | null | `SignatureElement::name("name")->placeholder()` |
| presets | `array` | [] | `SignatureElement::name("name")->presets()` |
| readonly | `boolean\|function\|array\|object` | false | `SignatureElement::name("name")->readonly()` |
| removeClass | `array\|object\|function` | null | `SignatureElement::name("name")->removeClass()` |
| removeClasses | `object\|function` | {} | `SignatureElement::name("name")->removeClasses()` |
| replaceClass | `object\|function` | null | `SignatureElement::name("name")->replaceClass()` |
| replaceClasses | `object\|function` | {} | `SignatureElement::name("name")->replaceClasses()` |
| rules | `array\|string\|object` | null | `SignatureElement::name("name")->rules()` |
| size | `string` | undefined | `SignatureElement::name("name")->size()` |
| slots | `object` | {} | `SignatureElement::name("name")->slots()` |
| submit | `boolean` | true | `SignatureElement::name("name")->submit()` |
| templates | `object` | {} | `SignatureElement::name("name")->templates()` |
| uploadHeight | `number` | 160 | `SignatureElement::name("name")->uploadHeight()` |
| uploadWidth | `number` | 480 | `SignatureElement::name("name")->uploadWidth()` |
| view | `string` | undefined | `SignatureElement::name("name")->view()` |
| views | `object` | {} | `SignatureElement::name("name")->views()` |

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

