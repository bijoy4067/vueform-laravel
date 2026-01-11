# RadiogroupElement

A form demonstrating usage of the RadiogroupElement field within Laravel VueForm. <a href="https://vueform.com/reference/radiogroup-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\RadiogroupElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class RadiogroupElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                RadiogroupElement::name('foo')
            ]);
    }
}
```
---

## ⚙️ Allowed Attributes

| Name | Data Type | Default | Example |
| ---- | ---- | ---- | ---- |
| addClass | `array\|object\|string\|function` | null | `RadiogroupElement::name("name")->addClass()` |
| addClasses | `object\|function` | {} | `RadiogroupElement::name("name")->addClasses()` |
| after | `object\|string\|number` | null | `RadiogroupElement::name("name")->after()` |
| before | `object\|string\|number` | null | `RadiogroupElement::name("name")->before()` |
| between | `object\|string\|number` | null | `RadiogroupElement::name("name")->between()` |
| clearOnRefetch | `boolean` | true | `RadiogroupElement::name("name")->clearOnRefetch()` |
| columns | `object\|string\|number` | null | `RadiogroupElement::name("name")->columns()` |
| conditions | `array` | [] | `RadiogroupElement::name("name")->conditions()` |
| default | `string\|number\|boolean` | null | `RadiogroupElement::name("name")->default()` |
| description | `string\|object` | null | `RadiogroupElement::name("name")->description()` |
| disabled | `boolean\|function\|array\|object` | false | `RadiogroupElement::name("name")->disabled()` |
| disables | `array` | [] | `RadiogroupElement::name("name")->disables()` |
| displayErrors | `boolean` | true | `RadiogroupElement::name("name")->displayErrors()` |
| fieldName | `string\|object` | name|label | `RadiogroupElement::name("name")->fieldName()` |
| formatData | `function` | null | `RadiogroupElement::name("name")->formatData()` |
| formatLoad | `function` | null | `RadiogroupElement::name("name")->formatLoad()` |
| id | `string` | null | `RadiogroupElement::name("name")->id()` |
| info | `string\|object` | null | `RadiogroupElement::name("name")->info()` |
| infoPosition | `string` | right | `RadiogroupElement::name("name")->infoPosition()` |
| inline | `boolean` | false | `RadiogroupElement::name("name")->inline()` |
| items | `object\|array\|function\|string` | {} | `RadiogroupElement::name("name")->items()` |
| label | `string\|object\|function` | null | `RadiogroupElement::name("name")->label()` |
| messages | `object` | {} | `RadiogroupElement::name("name")->messages()` |
| name | `string\|number` | undefined | `RadiogroupElement::name("name")->name()` |
| overrideClass | `array\|object\|string\|function` | null | `RadiogroupElement::name("name")->overrideClass()` |
| overrideClasses | `object\|function` | {} | `RadiogroupElement::name("name")->overrideClasses()` |
| presets | `array` | [] | `RadiogroupElement::name("name")->presets()` |
| removeClass | `array\|object\|function` | null | `RadiogroupElement::name("name")->removeClass()` |
| removeClasses | `object\|function` | {} | `RadiogroupElement::name("name")->removeClasses()` |
| replaceClass | `object\|function` | null | `RadiogroupElement::name("name")->replaceClass()` |
| replaceClasses | `object\|function` | {} | `RadiogroupElement::name("name")->replaceClasses()` |
| rules | `array\|string\|object` | null | `RadiogroupElement::name("name")->rules()` |
| size | `string` | undefined | `RadiogroupElement::name("name")->size()` |
| slots | `object` | {} | `RadiogroupElement::name("name")->slots()` |
| submit | `boolean` | true | `RadiogroupElement::name("name")->submit()` |
| templates | `object` | {} | `RadiogroupElement::name("name")->templates()` |
| view | `string` | undefined | `RadiogroupElement::name("name")->view()` |
| views | `object` | {} | `RadiogroupElement::name("name")->views()` |

---

## ⚡ Events

The following events <a href="https://vueform.com/reference/radiogroup-element#events" target="_blank">Documentation</a> are available for this element:

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
RadiogroupElement::name('example')
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
