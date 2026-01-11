# EditorElement

A form demonstrating usage of the EditorElement field within Laravel VueForm. <a href="https://vueform.com/reference/editor-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\EditorElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class EditorElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                EditorElement::name('foo')
            ]);
    }
}
```
---

## ⚙️ Allowed Attributes

| Name | Data Type | Default | Example |
| ---- | ---- | ---- | ---- |
| accept | `array` | [] | `EditorElement::name("name")->accept()` |
| acceptMimes | `array` | [] | `EditorElement::name("name")->acceptMimes()` |
| addClass | `array\|object\|string\|function` | null | `EditorElement::name("name")->addClass()` |
| addClasses | `object\|function` | {} | `EditorElement::name("name")->addClasses()` |
| after | `object\|string\|number` | null | `EditorElement::name("name")->after()` |
| before | `object\|string\|number` | null | `EditorElement::name("name")->before()` |
| between | `object\|string\|number` | null | `EditorElement::name("name")->between()` |
| columns | `object\|string\|number` | null | `EditorElement::name("name")->columns()` |
| conditions | `array` | [] | `EditorElement::name("name")->conditions()` |
| debounce | `number` | null | `EditorElement::name("name")->debounce()` |
| default | `string\|number\|object` | null | `EditorElement::name("name")->default()` |
| description | `string\|object` | null | `EditorElement::name("name")->description()` |
| disabled | `boolean\|function\|array\|object` | false | `EditorElement::name("name")->disabled()` |
| displayErrors | `boolean` | true | `EditorElement::name("name")->displayErrors()` |
| endpoint | `string\|function\|promise` | config.endpoints.attachment.url | `EditorElement::name("name")->endpoint()` |
| fieldName | `string\|object` | name|label | `EditorElement::name("name")->fieldName()` |
| formatData | `function` | null | `EditorElement::name("name")->formatData()` |
| formatLoad | `function` | null | `EditorElement::name("name")->formatLoad()` |
| hideTools | `array` | [] | `EditorElement::name("name")->hideTools()` |
| id | `string` | null | `EditorElement::name("name")->id()` |
| info | `string\|object` | null | `EditorElement::name("name")->info()` |
| infoPosition | `string` | right | `EditorElement::name("name")->infoPosition()` |
| inline | `boolean` | false | `EditorElement::name("name")->inline()` |
| label | `string\|object\|function` | null | `EditorElement::name("name")->label()` |
| messages | `object` | {} | `EditorElement::name("name")->messages()` |
| method | `string` | config.endpoints.attachment.method | `EditorElement::name("name")->method()` |
| name | `string\|number` | undefined | `EditorElement::name("name")->name()` |
| overrideClass | `array\|object\|string\|function` | null | `EditorElement::name("name")->overrideClass()` |
| overrideClasses | `object\|function` | {} | `EditorElement::name("name")->overrideClasses()` |
| placeholder | `string\|object` | null | `EditorElement::name("name")->placeholder()` |
| presets | `array` | [] | `EditorElement::name("name")->presets()` |
| removeClass | `array\|object\|function` | null | `EditorElement::name("name")->removeClass()` |
| removeClasses | `object\|function` | {} | `EditorElement::name("name")->removeClasses()` |
| replaceClass | `object\|function` | null | `EditorElement::name("name")->replaceClass()` |
| replaceClasses | `object\|function` | {} | `EditorElement::name("name")->replaceClasses()` |
| rules | `array\|string\|object` | null | `EditorElement::name("name")->rules()` |
| size | `string` | undefined | `EditorElement::name("name")->size()` |
| slots | `object` | {} | `EditorElement::name("name")->slots()` |
| submit | `boolean` | true | `EditorElement::name("name")->submit()` |
| templates | `object` | {} | `EditorElement::name("name")->templates()` |
| view | `string` | undefined | `EditorElement::name("name")->view()` |
| views | `object` | {} | `EditorElement::name("name")->views()` |

---

## ⚡ Events

The following events <a href="https://vueform.com/reference/editor-element#events" target="_blank">Documentation</a> are available for this element:

| Name | Parameters | Description |
| --- | --- | --- |
| `reset` | - {component} el$ - the element's component | Triggered when the input is resetted. |
| `clear` | - {component} el$ - the element's component | Triggered when the input is cleared. |
| `change` | - {string} newValue - the new value<br>- {string} oldValue - the old value<br>- {component} el$ - the element's component | Triggered when the element's value is changed. |
| `blur` | - {component} el$ - the element's component | Triggered when the input is blurred. |
| `alert` | - {string} message - the alert message | Triggered when the user select a file/mime type that is not allowed. If the event does not have a listener the alert message will be displayed by alert(). |
| `error` | - {Error} error - the Error object | Triggered when file upload throws an error. |
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
EditorElement::name('example')
    ->events([
        'reset' => 'handleReset',
        'clear' => 'handleClear',
        'change' => 'handleChange',
        'blur' => 'handleBlur',
        'alert' => 'handleAlert',
        'error' => 'handleError',
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
function handleBlur(el$) {
    // Your code here
}
function handleAlert(message) {
    // Your code here
}
function handleError({Error} error) {
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
