# LocationElement

A form demonstrating usage of the LocationElement field within Laravel VueForm. <a href="https://vueform.com/reference/location-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\LocationElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class LocationElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                LocationElement::name('foo')
            ]);
    }
}
```
---

## ⚙️ Allowed Attributes

| Name | Data Type | Default | Example |
| ---- | ---- | ---- | ---- |
| addClass | `array\|object\|string\|function` | null | `LocationElement::name("name")->addClass()` |
| addClasses | `object\|function` | {} | `LocationElement::name("name")->addClasses()` |
| addons | `object` | {} | `LocationElement::name("name")->addons()` |
| after | `object\|string\|number` | null | `LocationElement::name("name")->after()` |
| attrs | `object` | {} | `LocationElement::name("name")->attrs()` |
| before | `object\|string\|number` | null | `LocationElement::name("name")->before()` |
| between | `object\|string\|number` | null | `LocationElement::name("name")->between()` |
| columns | `object\|string\|number` | null | `LocationElement::name("name")->columns()` |
| conditions | `array` | [] | `LocationElement::name("name")->conditions()` |
| debounce | `number` | null | `LocationElement::name("name")->debounce()` |
| default | `object` | { "country": null, "country_code": null, "state": null, "state_code": null, "city": null, "zip": null, "address": null, "formatted_address": null, "lat": null, "lng": null} | `LocationElement::name("name")->default()` |
| description | `string\|object` | null | `LocationElement::name("name")->description()` |
| disabled | `boolean\|function\|array\|object` | false | `LocationElement::name("name")->disabled()` |
| displayErrors | `boolean` | true | `LocationElement::name("name")->displayErrors()` |
| displayKey | `string` | formatted_address | `LocationElement::name("name")->displayKey()` |
| extendOptions | `object` | {} | `LocationElement::name("name")->extendOptions()` |
| fieldName | `string\|object` | name|label | `LocationElement::name("name")->fieldName()` |
| floating | `string\|boolean\|object` | null | `LocationElement::name("name")->floating()` |
| formatData | `function` | null | `LocationElement::name("name")->formatData()` |
| formatLoad | `function` | null | `LocationElement::name("name")->formatLoad()` |
| id | `string` | null | `LocationElement::name("name")->id()` |
| info | `string\|object` | null | `LocationElement::name("name")->info()` |
| infoPosition | `string` | right | `LocationElement::name("name")->infoPosition()` |
| inline | `boolean` | false | `LocationElement::name("name")->inline()` |
| label | `string\|object\|function` | null | `LocationElement::name("name")->label()` |
| messages | `object` | {} | `LocationElement::name("name")->messages()` |
| name | `string\|number` | undefined | `LocationElement::name("name")->name()` |
| overrideClass | `array\|object\|string\|function` | null | `LocationElement::name("name")->overrideClass()` |
| overrideClasses | `object\|function` | {} | `LocationElement::name("name")->overrideClasses()` |
| placeholder | `string\|object` | null | `LocationElement::name("name")->placeholder()` |
| presets | `array` | [] | `LocationElement::name("name")->presets()` |
| provider | `string` | google | `LocationElement::name("name")->provider()` |
| readonly | `boolean\|function\|array\|object` | false | `LocationElement::name("name")->readonly()` |
| removeClass | `array\|object\|function` | null | `LocationElement::name("name")->removeClass()` |
| removeClasses | `object\|function` | {} | `LocationElement::name("name")->removeClasses()` |
| replaceClass | `object\|function` | null | `LocationElement::name("name")->replaceClass()` |
| replaceClasses | `object\|function` | {} | `LocationElement::name("name")->replaceClasses()` |
| rules | `array\|string\|object` | null | `LocationElement::name("name")->rules()` |
| size | `string` | undefined | `LocationElement::name("name")->size()` |
| slots | `object` | {} | `LocationElement::name("name")->slots()` |
| submit | `boolean` | true | `LocationElement::name("name")->submit()` |
| templates | `object` | {} | `LocationElement::name("name")->templates()` |
| view | `string` | undefined | `LocationElement::name("name")->view()` |
| views | `object` | {} | `LocationElement::name("name")->views()` |

---

## ⚡ Events

The following events <a href="https://vueform.com/reference/location-element#events" target="_blank">Documentation</a> are available for this element:

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
LocationElement::name('example')
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
