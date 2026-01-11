# CheckboxGroupElement

A form demonstrating usage of the CheckboxgroupElement field within Laravel VueForm. <a href="https://vueform.com/reference/checkboxgroup-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\CheckboxgroupElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class CheckboxgroupElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                CheckboxgroupElement::name('foo')
            ]);
    }
}
```
---

## ⚙️ Allowed Attributes

| Name | Data Type | Default | Example |
| ---- | ---- | ---- | ---- |
| addClass | `array\|object\|string\|function` | null | `CheckboxgroupElement::name("name")->addClass()` |
| addClasses | `object\|function` | {} | `CheckboxgroupElement::name("name")->addClasses()` |
| after | `object\|string\|number` | null | `CheckboxgroupElement::name("name")->after()` |
| before | `object\|string\|number` | null | `CheckboxgroupElement::name("name")->before()` |
| between | `object\|string\|number` | null | `CheckboxgroupElement::name("name")->between()` |
| clearOnRefetch | `boolean` | true | `CheckboxgroupElement::name("name")->clearOnRefetch()` |
| columns | `object\|string\|number` | null | `CheckboxgroupElement::name("name")->columns()` |
| conditions | `array` | [] | `CheckboxgroupElement::name("name")->conditions()` |
| default | `array` | [] | `CheckboxgroupElement::name("name")->default()` |
| description | `string\|object` | null | `CheckboxgroupElement::name("name")->description()` |
| disabled | `boolean\|function\|array\|object` | false | `CheckboxgroupElement::name("name")->disabled()` |
| disables | `array` | [] | `CheckboxgroupElement::name("name")->disables()` |
| displayErrors | `boolean` | true | `CheckboxgroupElement::name("name")->displayErrors()` |
| fieldName | `string\|object` | name|label | `CheckboxgroupElement::name("name")->fieldName()` |
| formatData | `function` | null | `CheckboxgroupElement::name("name")->formatData()` |
| formatLoad | `function` | null | `CheckboxgroupElement::name("name")->formatLoad()` |
| id | `string` | null | `CheckboxgroupElement::name("name")->id()` |
| info | `string\|object` | null | `CheckboxgroupElement::name("name")->info()` |
| infoPosition | `string` | right | `CheckboxgroupElement::name("name")->infoPosition()` |
| inline | `boolean` | false | `CheckboxgroupElement::name("name")->inline()` |
| items | `object\|array\|function\|string` | {} | `CheckboxgroupElement::name("name")->items()` |
| label | `string\|object\|function` | null | `CheckboxgroupElement::name("name")->label()` |
| messages | `object` | {} | `CheckboxgroupElement::name("name")->messages()` |
| name | `string\|number` | undefined | `CheckboxgroupElement::name("name")->name()` |
| overrideClass | `array\|object\|string\|function` | null | `CheckboxgroupElement::name("name")->overrideClass()` |
| overrideClasses | `object\|function` | {} | `CheckboxgroupElement::name("name")->overrideClasses()` |
| presets | `array` | [] | `CheckboxgroupElement::name("name")->presets()` |
| removeClass | `array\|object\|function` | null | `CheckboxgroupElement::name("name")->removeClass()` |
| removeClasses | `object\|function` | {} | `CheckboxgroupElement::name("name")->removeClasses()` |
| replaceClass | `object\|function` | null | `CheckboxgroupElement::name("name")->replaceClass()` |
| replaceClasses | `object\|function` | {} | `CheckboxgroupElement::name("name")->replaceClasses()` |
| rules | `array\|string\|object` | null | `CheckboxgroupElement::name("name")->rules()` |
| size | `string` | undefined | `CheckboxgroupElement::name("name")->size()` |
| slots | `object` | {} | `CheckboxgroupElement::name("name")->slots()` |
| submit | `boolean` | true | `CheckboxgroupElement::name("name")->submit()` |
| templates | `object` | {} | `CheckboxgroupElement::name("name")->templates()` |
| view | `string` | undefined | `CheckboxgroupElement::name("name")->view()` |
| views | `object` | {} | `CheckboxgroupElement::name("name")->views()` |

---

## ⚡ Events

The following events <a href="https://vueform.com/reference/checkboxgroup-element#events" target="_blank">Documentation</a> are available for this element:

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
CheckboxgroupElement::name('example')
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
