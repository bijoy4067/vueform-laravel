# TextElement 

A comprehensive form demonstrating various text input types including text, number, email, password, and URL fields with conditional rendering support. <a href="https://vueform.com/reference/t-text-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\TTextElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class TTextElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                TTextElement::name('search')
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

| Name | Data Type | Default | Example |
| ---- | ---- | ---- | ---- |
| addClass | `array\|object\|string\|function` | null | `TTextElement::name("name")->addClass()` |
| addClasses | `object\|function` | {} | `TTextElement::name("name")->addClasses()` |
| addons | `object` | {} | `TTextElement::name("name")->addons()` |
| after | `object\|string\|number` | null | `TTextElement::name("name")->after()` |
| attrs | `object` | {} | `TTextElement::name("name")->attrs()` |
| autocomplete | `string\|number` | null | `TTextElement::name("name")->autocomplete()` |
| before | `object\|string\|number` | null | `TTextElement::name("name")->before()` |
| between | `object\|string\|number` | null | `TTextElement::name("name")->between()` |
| columns | `object\|string\|number` | null | `TTextElement::name("name")->columns()` |
| conditions | `array` | [] | `TTextElement::name("name")->conditions()` |
| debounce | `number` | null | `TTextElement::name("name")->debounce()` |
| default | `object\|string\|number` | undefined | `TTextElement::name("name")->default()` |
| description | `string\|object` | null | `TTextElement::name("name")->description()` |
| disabled | `boolean\|function\|array\|object` | false | `TTextElement::name("name")->disabled()` |
| displayErrors | `boolean` | true | `TTextElement::name("name")->displayErrors()` |
| fieldName | `string\|object` | name|label | `TTextElement::name("name")->fieldName()` |
| floating | `string\|boolean\|object` | null | `TTextElement::name("name")->floating()` |
| formatData | `function` | null | `TTextElement::name("name")->formatData()` |
| formatLoad | `function` | null | `TTextElement::name("name")->formatLoad()` |
| id | `string` | null | `TTextElement::name("name")->id()` |
| info | `string\|object` | null | `TTextElement::name("name")->info()` |
| infoPosition | `string` | right | `TTextElement::name("name")->infoPosition()` |
| inline | `boolean` | false | `TTextElement::name("name")->inline()` |
| inputType | `string` | text | `TTextElement::name("name")->inputType()` |
| label | `string\|object\|function` | null | `TTextElement::name("name")->label()` |
| loading | `boolean` | false | `TTextElement::name("name")->loading()` |
| messages | `object` | {} | `TTextElement::name("name")->messages()` |
| name | `string\|number` | undefined | `TTextElement::name("name")->name()` |
| overrideClass | `array\|object\|string\|function` | null | `TTextElement::name("name")->overrideClass()` |
| overrideClasses | `object\|function` | {} | `TTextElement::name("name")->overrideClasses()` |
| placeholder | `string\|object` | null | `TTextElement::name("name")->placeholder()` |
| presets | `array` | [] | `TTextElement::name("name")->presets()` |
| readonly | `boolean\|function\|array\|object` | false | `TTextElement::name("name")->readonly()` |
| removeClass | `array\|object\|function` | null | `TTextElement::name("name")->removeClass()` |
| removeClasses | `object\|function` | {} | `TTextElement::name("name")->removeClasses()` |
| replaceClass | `object\|function` | null | `TTextElement::name("name")->replaceClass()` |
| replaceClasses | `object\|function` | {} | `TTextElement::name("name")->replaceClasses()` |
| rules | `array\|string\|object` | null | `TTextElement::name("name")->rules()` |
| size | `string` | undefined | `TTextElement::name("name")->size()` |
| slots | `object` | {} | `TTextElement::name("name")->slots()` |
| submit | `boolean` | true | `TTextElement::name("name")->submit()` |
| templates | `object` | {} | `TTextElement::name("name")->templates()` |
| view | `string` | undefined | `TTextElement::name("name")->view()` |
| views | `object` | {} | `TTextElement::name("name")->views()` |

---

## ⚡ Events

| Name | Parameters | Description |
| --- | --- | --- |
| `reset` | - {component} el$ - the element's component | Triggered when the input is resetted. |
| `clear` | - {component} el$ - the element's component | Triggered when the input is cleared. |
| `change` | - {string} newValue - the new value<br>- {string} oldValue - the old value<br>- {component} el$ - the element's component | Triggered when the element's value is changed. |
| `blur` | - {component} el$ - the element's component | Triggered when the input is blurred. |
| `focus` | - {component} el$ - the element's component | Triggered when the input is focused. |
| `keydown` | - {Event} Event - the Event object<br>- {component} el$ - the element's component | Triggered on keydown. |
| `keyup` | - {Event} Event - the Event object<br>- {component} el$ - the element's component | Triggered on keyup. |
| `keypress` | - {Event} Event - the Event object<br>- {component} el$ - the element's component | Triggered on keypress. |
| `beforeCreate` | - {component} el$ - the element's component | Triggered in beforeCreate hook. |
| `created` | - {component} el$ - the element's component | Triggered in created hook. |
| `beforeMount` | - {component} el$ - the element's component | Triggered in beforeMount hook. |
| `mounted` | - {component} el$ - the element's component | Triggered in mounted hook. |
| `beforeUpdate` | - {component} el$ - the element's component | Triggered in beforeUpdate hook. |
| `updated` | - {component} el$ - the element's component | Triggered in updated hook. |
| `beforeUnmount` | - {component} el$ - the element's component | Triggered in beforeUnmount (or beforeDestroy in Vue 2) hook. |
| `unmounted` | - {component} el$ - the element's component | Triggered in unmounted (or destroyed in Vue 2) hook. |

