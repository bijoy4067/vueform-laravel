# FileElement

A form demonstrating usage of the FileElement field within Laravel VueForm. <a href="https://vueform.com/reference/file-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\FileElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class FileElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                FileElement::name('foo')
            ]);
    }
}
```
---

## ⚙️ Allowed Attributes

| Name | Data Type | Default | Example |
| ---- | ---- | ---- | ---- |
| accept | `string\|array` | null | `FileElement::name("name")->accept()` |
| addClass | `array\|object\|string\|function` | null | `FileElement::name("name")->addClass()` |
| addClasses | `object\|function` | {} | `FileElement::name("name")->addClasses()` |
| after | `object\|string\|number` | null | `FileElement::name("name")->after()` |
| auto | `boolean` | true | `FileElement::name("name")->auto()` |
| before | `object\|string\|number` | null | `FileElement::name("name")->before()` |
| between | `object\|string\|number` | null | `FileElement::name("name")->between()` |
| clickable | `boolean` | true | `FileElement::name("name")->clickable()` |
| columns | `object\|string\|number` | null | `FileElement::name("name")->columns()` |
| conditions | `array` | [] | `FileElement::name("name")->conditions()` |
| default | `string\|object` | null | `FileElement::name("name")->default()` |
| description | `string\|object` | null | `FileElement::name("name")->description()` |
| disabled | `boolean\|function\|array\|object` | false | `FileElement::name("name")->disabled()` |
| displayErrors | `boolean` | true | `FileElement::name("name")->displayErrors()` |
| drop | `boolean` | false | `FileElement::name("name")->drop()` |
| fieldName | `string\|object` | name|label | `FileElement::name("name")->fieldName()` |
| formatData | `function` | null | `FileElement::name("name")->formatData()` |
| formatLoad | `function` | null | `FileElement::name("name")->formatLoad()` |
| id | `string` | null | `FileElement::name("name")->id()` |
| info | `string\|object` | null | `FileElement::name("name")->info()` |
| infoPosition | `string` | right | `FileElement::name("name")->infoPosition()` |
| inline | `boolean` | false | `FileElement::name("name")->inline()` |
| label | `string\|object\|function` | null | `FileElement::name("name")->label()` |
| messages | `object` | {} | `FileElement::name("name")->messages()` |
| methods | `object` | {} | `FileElement::name("name")->methods()` |
| name | `string\|number` | undefined | `FileElement::name("name")->name()` |
| overrideClass | `array\|object\|string\|function` | null | `FileElement::name("name")->overrideClass()` |
| overrideClasses | `object\|function` | {} | `FileElement::name("name")->overrideClasses()` |
| params | `object` | {} | `FileElement::name("name")->params()` |
| presets | `array` | [] | `FileElement::name("name")->presets()` |
| previewUrl | `string` | undefined | `FileElement::name("name")->previewUrl()` |
| removeClass | `array\|object\|function` | null | `FileElement::name("name")->removeClass()` |
| removeClasses | `object\|function` | {} | `FileElement::name("name")->removeClasses()` |
| removeEndpoint | `object\|string\|function\|boolean\|promise` | config.endpoints.removeFile | `FileElement::name("name")->removeEndpoint()` |
| removeTempEndpoint | `object\|string\|function\|boolean\|promise` | config.endpoints.removeTempFile | `FileElement::name("name")->removeTempEndpoint()` |
| replaceClass | `object\|function` | null | `FileElement::name("name")->replaceClass()` |
| replaceClasses | `object\|function` | {} | `FileElement::name("name")->replaceClasses()` |
| rules | `array\|string\|object` | null | `FileElement::name("name")->rules()` |
| size | `string` | undefined | `FileElement::name("name")->size()` |
| slots | `object` | {} | `FileElement::name("name")->slots()` |
| softRemove | `boolean` | false | `FileElement::name("name")->softRemove()` |
| submit | `boolean` | true | `FileElement::name("name")->submit()` |
| templates | `object` | {} | `FileElement::name("name")->templates()` |
| uploadTempEndpoint | `object\|string\|function\|boolean\|promise` | config.endpoints.uploadTempFile | `FileElement::name("name")->uploadTempEndpoint()` |
| url | `string\|boolean` | / | `FileElement::name("name")->url()` |
| urls | `object` | {} | `FileElement::name("name")->urls()` |
| view | `string` | file | `FileElement::name("name")->view()` |
| views | `object` | {} | `FileElement::name("name")->views()` |

---

## ⚡ Events

The following events <a href="https://vueform.com/reference/file-element#events" target="_blank">Documentation</a> are available for this element:

| Name | Parameters | Description |
| --- | --- | --- |
| `reset` | - {component} el$ - the element's component | Triggered when the input is resetted. |
| `clear` | - {component} el$ - the element's component | Triggered when the input is cleared. |
| `change` | - {string} newValue - the new value<br>- {string} oldValue - the old value<br>- {component} el$ - the element's component | Triggered when the element's value is changed. |
| `remove` | - | Triggered after the file is removed. |
| `error` | - {string} type - the type of the error, possible values: &apos;upload|remove&apos;<br>- {Error} error - the Error object | Triggered when temporary upload or file remove throws an error. |
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
FileElement::name('example')
    ->events([
        'reset' => 'handleReset',
        'clear' => 'handleClear',
        'change' => 'handleChange',
        'remove' => 'handleRemove',
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
function handleRemove() {
    // Your code here
}
function handleError(type, {Error} error) {
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
