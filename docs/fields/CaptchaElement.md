# Captcha Element

A form demonstrating usage of the CaptchaElement field within Laravel VueForm. <a href="https://vueform.com/reference/captcha-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\CaptchaElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class CaptchaElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                CaptchaElement::name('foo')
            ]);
    }
}
```
---

## ⚙️ Allowed Attributes

| Name | Data Type | Default | Example |
| ---- | ---- | ---- | ---- |
| addClass | `array\|object\|string\|function` | null | `CaptchaElement::name("name")->addClass()` |
| addClasses | `object\|function` | {} | `CaptchaElement::name("name")->addClasses()` |
| after | `object\|string\|number` | null | `CaptchaElement::name("name")->after()` |
| before | `object\|string\|number` | null | `CaptchaElement::name("name")->before()` |
| between | `object\|string\|number` | null | `CaptchaElement::name("name")->between()` |
| columns | `object\|string\|number` | null | `CaptchaElement::name("name")->columns()` |
| conditions | `array` | [] | `CaptchaElement::name("name")->conditions()` |
| default | `string` | null | `CaptchaElement::name("name")->default()` |
| description | `string\|object` | null | `CaptchaElement::name("name")->description()` |
| disabled | `boolean\|function\|array\|object` | false | `CaptchaElement::name("name")->disabled()` |
| displayErrors | `boolean` | true | `CaptchaElement::name("name")->displayErrors()` |
| formatData | `function` | null | `CaptchaElement::name("name")->formatData()` |
| formatLoad | `function` | null | `CaptchaElement::name("name")->formatLoad()` |
| id | `string` | null | `CaptchaElement::name("name")->id()` |
| info | `string\|object` | null | `CaptchaElement::name("name")->info()` |
| infoPosition | `string` | right | `CaptchaElement::name("name")->infoPosition()` |
| inline | `boolean` | false | `CaptchaElement::name("name")->inline()` |
| label | `string\|object\|function` | null | `CaptchaElement::name("name")->label()` |
| messages | `object` | {} | `CaptchaElement::name("name")->messages()` |
| name | `string\|number` | undefined | `CaptchaElement::name("name")->name()` |
| options | `object` | {} | `CaptchaElement::name("name")->options()` |
| overrideClass | `array\|object\|string\|function` | null | `CaptchaElement::name("name")->overrideClass()` |
| overrideClasses | `object\|function` | {} | `CaptchaElement::name("name")->overrideClasses()` |
| presets | `array` | [] | `CaptchaElement::name("name")->presets()` |
| provider | `string` | config.useProviders.captcha | `CaptchaElement::name("name")->provider()` |
| readonly | `boolean\|function\|array\|object` | false | `CaptchaElement::name("name")->readonly()` |
| removeClass | `array\|object\|function` | null | `CaptchaElement::name("name")->removeClass()` |
| removeClasses | `object\|function` | {} | `CaptchaElement::name("name")->removeClasses()` |
| replaceClass | `object\|function` | null | `CaptchaElement::name("name")->replaceClass()` |
| replaceClasses | `object\|function` | {} | `CaptchaElement::name("name")->replaceClasses()` |
| rules | `array\|string\|object` | captcha | `CaptchaElement::name("name")->rules()` |
| slots | `object` | {} | `CaptchaElement::name("name")->slots()` |
| submit | `boolean` | true | `CaptchaElement::name("name")->submit()` |
| templates | `object` | {} | `CaptchaElement::name("name")->templates()` |
| view | `string` | undefined | `CaptchaElement::name("name")->view()` |
| views | `object` | {} | `CaptchaElement::name("name")->views()` |

---

## ⚡ Events

The following events <a href="https://vueform.com/reference/captcha-element#events" target="_blank">Documentation</a> are available for this element:

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
CaptchaElement::name('example')
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
