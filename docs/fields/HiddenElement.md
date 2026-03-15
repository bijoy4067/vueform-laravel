# Hidden Element

A form example demonstrating how to use the HiddenElement field in VueForm Laravel to store and submit hidden values within Laravel forms. <a href="https://vueform.com/reference/hidden-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\HiddenElement;
use VueFormLaravel\Elements\Vueform;
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
                HiddenElement::name('secret_token')
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

---

## ⚡ Events

You can define custom **hidden element** events <a href="https://vueform.com/reference/hidden-element#events" target="_blank">Documentation</a> directly in PHP using the `->events()` method.

Each event value refers to a JavaScript function name.

These functions must be defined inside:

```javascript
public/vueform-laravel/vueform-custom.js
```

This allows you to extend or override default behaviors for your generated VueForm components

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

### 🔔 Example Usage of event (PHP)

```php
HiddenElement::name('example')
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

### 🔔 Example Usage of event(JavaScript)

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
```

