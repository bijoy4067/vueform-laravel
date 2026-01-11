# RadioElement

A form demonstrating usage of the RadioElement field within Laravel VueForm. <a href="https://vueform.com/reference/radio-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\RadioElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class RadioElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                RadioElement::name('foo')
            ]);
    }
}
```
---

## ⚙️ Allowed Attributes

| Name | Data Type | Default | Example |
| ---- | ---- | ---- | ---- |
| addClass | `array\|object\|string\|function` | null | `RadioElement::name("name")->addClass()` |
| addClasses | `object\|function` | {} | `RadioElement::name("name")->addClasses()` |
| after | `object\|string\|number` | null | `RadioElement::name("name")->after()` |
| align | `string` | undefined | `RadioElement::name("name")->align()` |
| before | `object\|string\|number` | null | `RadioElement::name("name")->before()` |
| between | `object\|string\|number` | null | `RadioElement::name("name")->between()` |
| columns | `object\|string\|number` | null | `RadioElement::name("name")->columns()` |
| conditions | `array` | [] | `RadioElement::name("name")->conditions()` |
| default | `string\|number` | null | `RadioElement::name("name")->default()` |
| description | `string\|object` | null | `RadioElement::name("name")->description()` |
| disabled | `boolean\|function\|array\|object` | false | `RadioElement::name("name")->disabled()` |
| displayErrors | `boolean` | true | `RadioElement::name("name")->displayErrors()` |
| fieldName | `string\|object` | name|label | `RadioElement::name("name")->fieldName()` |
| formatData | `function` | null | `RadioElement::name("name")->formatData()` |
| formatLoad | `function` | null | `RadioElement::name("name")->formatLoad()` |
| id | `string` | null | `RadioElement::name("name")->id()` |
| info | `string\|object` | null | `RadioElement::name("name")->info()` |
| infoPosition | `string` | right | `RadioElement::name("name")->infoPosition()` |
| inline | `boolean` | false | `RadioElement::name("name")->inline()` |
| label | `string\|object\|function` | null | `RadioElement::name("name")->label()` |
| messages | `object` | {} | `RadioElement::name("name")->messages()` |
| name | `string\|number` | undefined | `RadioElement::name("name")->name()` |
| overrideClass | `array\|object\|string\|function` | null | `RadioElement::name("name")->overrideClass()` |
| overrideClasses | `object\|function` | {} | `RadioElement::name("name")->overrideClasses()` |
| presets | `array` | [] | `RadioElement::name("name")->presets()` |
| radioName | `string` | null | `RadioElement::name("name")->radioName()` |
| radioValue | `boolean\|string\|number` | 1 | `RadioElement::name("name")->radioValue()` |
| removeClass | `array\|object\|function` | null | `RadioElement::name("name")->removeClass()` |
| removeClasses | `object\|function` | {} | `RadioElement::name("name")->removeClasses()` |
| replaceClass | `object\|function` | null | `RadioElement::name("name")->replaceClass()` |
| replaceClasses | `object\|function` | {} | `RadioElement::name("name")->replaceClasses()` |
| rules | `array\|string\|object` | null | `RadioElement::name("name")->rules()` |
| size | `string` | undefined | `RadioElement::name("name")->size()` |
| slots | `object` | {} | `RadioElement::name("name")->slots()` |
| standalone | `boolean` | false | `RadioElement::name("name")->standalone()` |
| submit | `boolean` | true | `RadioElement::name("name")->submit()` |
| templates | `object` | {} | `RadioElement::name("name")->templates()` |
| text | `string\|object` | null | `RadioElement::name("name")->text()` |
| view | `string` | undefined | `RadioElement::name("name")->view()` |
| views | `object` | {} | `RadioElement::name("name")->views()` |

---

## ⚡ Events

The following events <a href="https://vueform.com/reference/radio-element#events" target="_blank">Documentation</a> are available for this element:

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
RadioElement::name('example')
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
