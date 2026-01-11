# CheckboxElement

A form demonstrating usage of the CheckboxElement field within Laravel VueForm. <a href="https://vueform.com/reference/checkbox-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\CheckboxElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class CheckboxElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                CheckboxElement::name('foo')
            ]);
    }
}
```
---

## ⚙️ Allowed Attributes

| Name | Data Type | Default | Example |
| ---- | ---- | ---- | ---- |
| addClass | `array\|object\|string\|function` | null | `CheckboxElement::name("name")->addClass()` |
| addClasses | `object\|function` | {} | `CheckboxElement::name("name")->addClasses()` |
| after | `object\|string\|number` | null | `CheckboxElement::name("name")->after()` |
| align | `string` | undefined | `CheckboxElement::name("name")->align()` |
| before | `object\|string\|number` | null | `CheckboxElement::name("name")->before()` |
| between | `object\|string\|number` | null | `CheckboxElement::name("name")->between()` |
| columns | `object\|string\|number` | null | `CheckboxElement::name("name")->columns()` |
| conditions | `array` | [] | `CheckboxElement::name("name")->conditions()` |
| default | `string\|boolean\|number` | undefined | `CheckboxElement::name("name")->default()` |
| description | `string\|object` | null | `CheckboxElement::name("name")->description()` |
| disabled | `boolean\|function\|array\|object` | false | `CheckboxElement::name("name")->disabled()` |
| displayErrors | `boolean` | true | `CheckboxElement::name("name")->displayErrors()` |
| falseValue | `boolean\|string\|number` | false | `CheckboxElement::name("name")->falseValue()` |
| fieldName | `string\|object` | name|label | `CheckboxElement::name("name")->fieldName()` |
| formatData | `function` | null | `CheckboxElement::name("name")->formatData()` |
| formatLoad | `function` | null | `CheckboxElement::name("name")->formatLoad()` |
| id | `string` | null | `CheckboxElement::name("name")->id()` |
| info | `string\|object` | null | `CheckboxElement::name("name")->info()` |
| infoPosition | `string` | right | `CheckboxElement::name("name")->infoPosition()` |
| inline | `boolean` | false | `CheckboxElement::name("name")->inline()` |
| label | `string\|object\|function` | null | `CheckboxElement::name("name")->label()` |
| messages | `object` | {} | `CheckboxElement::name("name")->messages()` |
| name | `string\|number` | undefined | `CheckboxElement::name("name")->name()` |
| overrideClass | `array\|object\|string\|function` | null | `CheckboxElement::name("name")->overrideClass()` |
| overrideClasses | `object\|function` | {} | `CheckboxElement::name("name")->overrideClasses()` |
| presets | `array` | [] | `CheckboxElement::name("name")->presets()` |
| removeClass | `array\|object\|function` | null | `CheckboxElement::name("name")->removeClass()` |
| removeClasses | `object\|function` | {} | `CheckboxElement::name("name")->removeClasses()` |
| replaceClass | `object\|function` | null | `CheckboxElement::name("name")->replaceClass()` |
| replaceClasses | `object\|function` | {} | `CheckboxElement::name("name")->replaceClasses()` |
| rules | `array\|string\|object` | null | `CheckboxElement::name("name")->rules()` |
| size | `string` | undefined | `CheckboxElement::name("name")->size()` |
| slots | `object` | {} | `CheckboxElement::name("name")->slots()` |
| standalone | `boolean` | false | `CheckboxElement::name("name")->standalone()` |
| submit | `boolean` | true | `CheckboxElement::name("name")->submit()` |
| templates | `object` | {} | `CheckboxElement::name("name")->templates()` |
| text | `string\|object` | null | `CheckboxElement::name("name")->text()` |
| trueValue | `boolean\|string\|number` | true | `CheckboxElement::name("name")->trueValue()` |
| view | `string` | undefined | `CheckboxElement::name("name")->view()` |
| views | `object` | {} | `CheckboxElement::name("name")->views()` |

---

## ⚡ Events

The following events <a href="https://vueform.com/reference/checkbox-element#events" target="_blank">Documentation</a> are available for this element:

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

### 🔔 Example Usage of PHP

```php
CheckboxElement::name('example')
    ->events([
        'reset' => 'handleReset',
        'clear' => 'handleClear',
        'change' => 'handleChange',
        'beforeCreate' => 'handleBeforeCreate',
        'created' => 'handleCreated',
        'beforeMount' => 'handleBeforeMount',
        'mounted' => 'handleMounted',
        'beforeUpdate' => 'handleBeforeUpdate',
        'updated' => 'handleUpdated',
        'beforeUnmount' => 'handleBeforeUnmount',
        'unmounted' => 'handleUnmounted',
    ])
```

### 🔔 Example Usage of JavaScript

```javascript
function handleReset(el$) {
    // Your code here
}
function handleClear(el$) {
    // Your code here
}
function handleChange(newValue, oldValue, el$) {
    // Your code here
}
function handleBeforeCreate(el$) {
    // Your code here
}
function handleCreated(el$) {
    // Your code here
}
function handleBeforeMount(el$) {
    // Your code here
}
function handleMounted(el$) {
    // Your code here
}
function handleBeforeUpdate(el$) {
    // Your code here
}
function handleUpdated(el$) {
    // Your code here
}
function handleBeforeUnmount(el$) {
    // Your code here
}
function handleUnmounted(el$) {
    // Your code here
}
