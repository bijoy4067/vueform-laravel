# PhoneElement

A complete example form demonstrating how to use the PhoneElement field within Laravel VueForm. 
      This form showcases international phone number handling with country filtering, automatic 
      formatting, and optional unmasking for raw value submission — ideal for forms that require 
      validated and standardized phone input. <a href="https://vueform.com/reference/phone-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\PhoneElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class PhoneElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                PhoneElement::name('phone2')
                    ->unmask(true),

                PhoneElement::name('phone')
                    ->include(['bd']) // only show bd in select country list 
                    ->unmask(true)
            ]);
    }
}
```
---

## ⚙️ Allowed Attributes

| Name | Data Type | Default | Example |
| ---- | ---- | ---- | ---- |
| addClass | `array\|object\|string\|function` | null | `PhoneElement::name("name")->addClass()` |
| addClasses | `object\|function` | {} | `PhoneElement::name("name")->addClasses()` |
| after | `object\|string\|number` | null | `PhoneElement::name("name")->after()` |
| allowIncomplete | `boolean` | false | `PhoneElement::name("name")->allowIncomplete()` |
| attrs | `object` | {} | `PhoneElement::name("name")->attrs()` |
| autocomplete | `string\|number` | null | `PhoneElement::name("name")->autocomplete()` |
| before | `object\|string\|number` | null | `PhoneElement::name("name")->before()` |
| between | `object\|string\|number` | null | `PhoneElement::name("name")->between()` |
| columns | `object\|string\|number` | null | `PhoneElement::name("name")->columns()` |
| conditions | `array` | [] | `PhoneElement::name("name")->conditions()` |
| debounce | `number` | null | `PhoneElement::name("name")->debounce()` |
| default | `string\|number\|object` | null | `PhoneElement::name("name")->default()` |
| description | `string\|object` | null | `PhoneElement::name("name")->description()` |
| disabled | `boolean\|function\|array\|object` | false | `PhoneElement::name("name")->disabled()` |
| displayErrors | `boolean` | true | `PhoneElement::name("name")->displayErrors()` |
| exclude | `array` | [] | `PhoneElement::name("name")->exclude()` |
| fieldName | `string\|object` | name|label | `PhoneElement::name("name")->fieldName()` |
| floating | `string\|boolean\|object` | null | `PhoneElement::name("name")->floating()` |
| formatData | `function` | null | `PhoneElement::name("name")->formatData()` |
| formatLoad | `function` | null | `PhoneElement::name("name")->formatLoad()` |
| id | `string` | null | `PhoneElement::name("name")->id()` |
| include | `array` | [] | `PhoneElement::name("name")->include()` |
| info | `string\|object` | null | `PhoneElement::name("name")->info()` |
| infoPosition | `string` | right | `PhoneElement::name("name")->infoPosition()` |
| inline | `boolean` | false | `PhoneElement::name("name")->inline()` |
| label | `string\|object\|function` | null | `PhoneElement::name("name")->label()` |
| loading | `boolean` | false | `PhoneElement::name("name")->loading()` |
| messages | `object` | {} | `PhoneElement::name("name")->messages()` |
| name | `string\|number` | undefined | `PhoneElement::name("name")->name()` |
| overrideClass | `array\|object\|string\|function` | null | `PhoneElement::name("name")->overrideClass()` |
| overrideClasses | `object\|function` | {} | `PhoneElement::name("name")->overrideClasses()` |
| placeholder | `string\|object` | null | `PhoneElement::name("name")->placeholder()` |
| presets | `array` | [] | `PhoneElement::name("name")->presets()` |
| readonly | `boolean\|function\|array\|object` | false | `PhoneElement::name("name")->readonly()` |
| removeClass | `array\|object\|function` | null | `PhoneElement::name("name")->removeClass()` |
| removeClasses | `object\|function` | {} | `PhoneElement::name("name")->removeClasses()` |
| replaceClass | `object\|function` | null | `PhoneElement::name("name")->replaceClass()` |
| replaceClasses | `object\|function` | {} | `PhoneElement::name("name")->replaceClasses()` |
| rules | `array\|string\|object` | null | `PhoneElement::name("name")->rules()` |
| size | `string` | undefined | `PhoneElement::name("name")->size()` |
| slots | `object` | {} | `PhoneElement::name("name")->slots()` |
| submit | `boolean` | true | `PhoneElement::name("name")->submit()` |
| templates | `object` | {} | `PhoneElement::name("name")->templates()` |
| unmask | `boolean` | false | `PhoneElement::name("name")->unmask()` |
| view | `string` | undefined | `PhoneElement::name("name")->view()` |
| views | `object` | {} | `PhoneElement::name("name")->views()` |

---

## ⚡ Events

The following events <a href="https://vueform.com/reference/phone-element#events" target="_blank">Documentation</a> are available for this element:

| Name | Parameters | Description |
| --- | --- | --- |
| `reset` | - {component} el$ - the element's component | Triggered when the input is resetted. |
| `clear` | - {component} el$ - the element's component | Triggered when the input is cleared. |
| `change` | - {string} newValue - the new value<br>- {string} oldValue - the old value<br>- {component} el$ - the element's component | Triggered when the element's value is changed. |
| `select` | - {object} option - the selected option<br>- {component} el$ - the element's component | Triggered when a country is selected (either by user or automatically as typed). |
| `open` | - {component} el$ - the element's component | Triggered when the dropdown list is opened. |
| `close` | - {component} el$ - the element's component | Triggered when the dropdown list is closed when using native: false. |
| `blur` | - {component} el$ - the element's component | Triggered when the input is blurred. |
| `focus` | - {component} el$ - the element's component | Triggered when the input is focused. |
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
PhoneElement::name('example')
    ->events([
        'reset' => 'handleReset',
        'clear' => 'handleClear',
        'change' => 'handleChange',
        'select' => 'handleSelect',
        'open' => 'handleOpen',
        'close' => 'handleClose',
        'blur' => 'handleBlur',
        'focus' => 'handleFocus',
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
function handleSelect(option, el$) {
    // Your code here
}
function handleOpen(el$) {
    // Your code here
}
function handleClose(el$) {
    // Your code here
}
function handleBlur(el$) {
    // Your code here
}
function handleFocus(el$) {
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
