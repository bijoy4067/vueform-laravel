# MultifileElement

A form demonstrating usage of the MultifileElement field within Laravel VueForm. <a href="https://vueform.com/reference/multifile-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\MultifileElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class MultifileElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                MultifileElement::name('foo')
            ]);
    }
}
```
---

## ⚙️ Allowed Attributes

| Name | Data Type | Default | Example |
| ---- | ---- | ---- | ---- |
| accept | `string\|array` | null | `MultifileElement::name("name")->accept()` |
| addClass | `array\|object\|string\|function` | null | `MultifileElement::name("name")->addClass()` |
| addClasses | `object\|function` | {} | `MultifileElement::name("name")->addClasses()` |
| after | `object\|string\|number` | null | `MultifileElement::name("name")->after()` |
| auto | `boolean` | true | `MultifileElement::name("name")->auto()` |
| before | `object\|string\|number` | null | `MultifileElement::name("name")->before()` |
| between | `object\|string\|number` | null | `MultifileElement::name("name")->between()` |
| clickable | `boolean` | true | `MultifileElement::name("name")->clickable()` |
| columns | `object\|string\|number` | null | `MultifileElement::name("name")->columns()` |
| conditions | `array` | [] | `MultifileElement::name("name")->conditions()` |
| controls | `object` | { "add": true, "remove": true, "sort": true} | `MultifileElement::name("name")->controls()` |
| default | `array` | [] | `MultifileElement::name("name")->default()` |
| description | `string\|object` | null | `MultifileElement::name("name")->description()` |
| disabled | `boolean\|function\|array\|object` | false | `MultifileElement::name("name")->disabled()` |
| displayErrors | `boolean` | true | `MultifileElement::name("name")->displayErrors()` |
| drop | `boolean` | false | `MultifileElement::name("name")->drop()` |
| fieldName | `string\|object` | name|label | `MultifileElement::name("name")->fieldName()` |
| fields | `object` | {} | `MultifileElement::name("name")->fields()` |
| file | `object` | {} | `MultifileElement::name("name")->file()` |
| formatData | `function` | null | `MultifileElement::name("name")->formatData()` |
| formatLoad | `function` | null | `MultifileElement::name("name")->formatLoad()` |
| id | `string` | null | `MultifileElement::name("name")->id()` |
| info | `string\|object` | null | `MultifileElement::name("name")->info()` |
| infoPosition | `string` | right | `MultifileElement::name("name")->infoPosition()` |
| inline | `boolean` | false | `MultifileElement::name("name")->inline()` |
| label | `string\|object\|function` | null | `MultifileElement::name("name")->label()` |
| messages | `object` | {} | `MultifileElement::name("name")->messages()` |
| name | `string\|number` | undefined | `MultifileElement::name("name")->name()` |
| object | `boolean` | null | `MultifileElement::name("name")->object()` |
| order | `string` | null | `MultifileElement::name("name")->order()` |
| orderBy | `string` | null | `MultifileElement::name("name")->orderBy()` |
| overrideClass | `array\|object\|string\|function` | null | `MultifileElement::name("name")->overrideClass()` |
| overrideClasses | `object\|function` | {} | `MultifileElement::name("name")->overrideClasses()` |
| params | `object` | {} | `MultifileElement::name("name")->params()` |
| presets | `array` | [] | `MultifileElement::name("name")->presets()` |
| previewUrl | `string` | undefined | `MultifileElement::name("name")->previewUrl()` |
| removeClass | `array\|object\|function` | null | `MultifileElement::name("name")->removeClass()` |
| removeClasses | `object\|function` | {} | `MultifileElement::name("name")->removeClasses()` |
| removeEndpoint | `object\|string\|function\|boolean\|promise` | config.endpoints.removeFile | `MultifileElement::name("name")->removeEndpoint()` |
| removeTempEndpoint | `object\|string\|function\|boolean\|promise` | config.endpoints.removeTempFile | `MultifileElement::name("name")->removeTempEndpoint()` |
| replaceClass | `object\|function` | null | `MultifileElement::name("name")->replaceClass()` |
| replaceClasses | `object\|function` | {} | `MultifileElement::name("name")->replaceClasses()` |
| rules | `array\|string\|object` | null | `MultifileElement::name("name")->rules()` |
| size | `string` | undefined | `MultifileElement::name("name")->size()` |
| slots | `object` | {} | `MultifileElement::name("name")->slots()` |
| softRemove | `boolean` | false | `MultifileElement::name("name")->softRemove()` |
| sort | `boolean` | false | `MultifileElement::name("name")->sort()` |
| storeFile | `string` | file | `MultifileElement::name("name")->storeFile()` |
| storeOrder | `string` | null | `MultifileElement::name("name")->storeOrder()` |
| submit | `boolean` | true | `MultifileElement::name("name")->submit()` |
| templates | `object` | {} | `MultifileElement::name("name")->templates()` |
| uploadTempEndpoint | `object\|string\|function\|boolean\|promise` | config.endpoints.uploadTempFile | `MultifileElement::name("name")->uploadTempEndpoint()` |
| url | `string\|boolean` | / | `MultifileElement::name("name")->url()` |
| view | `string` | file | `MultifileElement::name("name")->view()` |
| views | `object` | {} | `MultifileElement::name("name")->views()` |

---

## ⚡ Events

The following events <a href="https://vueform.com/reference/multifile-element#events" target="_blank">Documentation</a> are available for this element:

| Name | Parameters | Description |
| --- | --- | --- |
| `reset` | - {component} el$ - the element's component | Triggered when the input is resetted. |
| `clear` | - {component} el$ - the element's component | Triggered when the input is cleared. |
| `change` | - {string} newValue - the new value<br>- {string} oldValue - the old value<br>- {component} el$ - the element's component | Triggered when the element's value is changed. |
| `add` | - {number} index - the index of the added item<br>- {File|object|string} addedValue - the added value<br>- {array} value - the element's value after the item is added<br>- {component} el$ - the element's component | Triggered when a new item is added to the list. |
| `remove` | - {number} index - the index of the removed item<br>- {array} value - the element's value after the item is removed<br>- {component} el$ - the element's component | Triggered when an item is removed from the list. |
| `sort` | - {array} value - the element's value after sorting<br>- {number} oldIndex - the old index of the moved element<br>- {number} newIndex - the new index of the moved element<br>- {component} el$ - the moved element's component | Triggered when items are being sorted by the user, when sort: true. |
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
MultifileElement::name('example')
    ->events([
        'reset' => 'handleReset',
        'clear' => 'handleClear',
        'change' => 'handleChange',
        'add' => 'handleAdd',
        'remove' => 'handleRemove',
        'sort' => 'handleSort',
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
function handleAdd({number} index, {File|object|string} addedValue, value, el$) {
    // Your code here
}
function handleRemove({number} index, value, el$) {
    // Your code here
}
function handleSort(value, {number} oldIndex, {number} newIndex, el$) {
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
