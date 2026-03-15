# SliderElement

A form demonstrating usage of the SliderElement field within Laravel VueForm. <a href="https://vueform.com/reference/slider-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\SliderElement;
use VueFormLaravel\Elements\Static\StaticElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class SliderElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                SliderElement::name('price'),
                StaticElement::text('Use the slider to select a price range with prefix and suffix.'),
                SliderElement::name('quantity')
                    ->default([20, 30])
                    ->min(0)
                    ->max(100)
                    ->format([
                        'prefix' => '$',
                        'suffix' => ' USD',
                    ]),
            ]);
    }
}
```
---

## ⚙️ Allowed Attributes

| Name | Data Type | Default | Example |
| ---- | ---- | ---- | ---- |
| addClass | `array\|object\|string\|function` | null | `SliderElement::name("name")->addClass()` |
| addClasses | `object\|function` | {} | `SliderElement::name("name")->addClasses()` |
| after | `object\|string\|number` | null | `SliderElement::name("name")->after()` |
| before | `object\|string\|number` | null | `SliderElement::name("name")->before()` |
| between | `object\|string\|number` | null | `SliderElement::name("name")->between()` |
| columns | `object\|string\|number` | null | `SliderElement::name("name")->columns()` |
| conditions | `array` | [] | `SliderElement::name("name")->conditions()` |
| default | `number\|array` | 0 | `SliderElement::name("name")->default()` |
| description | `string\|object` | null | `SliderElement::name("name")->description()` |
| direction | `string` | ltr | `SliderElement::name("name")->direction()` |
| disabled | `boolean\|function\|array\|object` | false | `SliderElement::name("name")->disabled()` |
| displayErrors | `boolean` | true | `SliderElement::name("name")->displayErrors()` |
| extendOptions | `object` | {} | `SliderElement::name("name")->extendOptions()` |
| fieldName | `string\|object` | name|label | `SliderElement::name("name")->fieldName()` |
| format | `object\|function` | null | `SliderElement::name("name")->format()` |
| formatData | `function` | null | `SliderElement::name("name")->formatData()` |
| formatLoad | `function` | null | `SliderElement::name("name")->formatLoad()` |
| id | `string` | null | `SliderElement::name("name")->id()` |
| info | `string\|object` | null | `SliderElement::name("name")->info()` |
| infoPosition | `string` | right | `SliderElement::name("name")->infoPosition()` |
| inline | `boolean` | false | `SliderElement::name("name")->inline()` |
| label | `string\|object\|function` | null | `SliderElement::name("name")->label()` |
| max | `number` | 100 | `SliderElement::name("name")->max()` |
| merge | `number` | -1 | `SliderElement::name("name")->merge()` |
| messages | `object` | {} | `SliderElement::name("name")->messages()` |
| min | `number` | 0 | `SliderElement::name("name")->min()` |
| name | `string\|number` | undefined | `SliderElement::name("name")->name()` |
| orientation | `string` | horizontal | `SliderElement::name("name")->orientation()` |
| overrideClass | `array\|object\|string\|function` | null | `SliderElement::name("name")->overrideClass()` |
| overrideClasses | `object\|function` | {} | `SliderElement::name("name")->overrideClasses()` |
| presets | `array` | [] | `SliderElement::name("name")->presets()` |
| removeClass | `array\|object\|function` | null | `SliderElement::name("name")->removeClass()` |
| removeClasses | `object\|function` | {} | `SliderElement::name("name")->removeClasses()` |
| replaceClass | `object\|function` | null | `SliderElement::name("name")->replaceClass()` |
| replaceClasses | `object\|function` | {} | `SliderElement::name("name")->replaceClasses()` |
| rules | `array\|string\|object` | null | `SliderElement::name("name")->rules()` |
| showTooltip | `string` | always | `SliderElement::name("name")->showTooltip()` |
| size | `string` | undefined | `SliderElement::name("name")->size()` |
| slots | `object` | {} | `SliderElement::name("name")->slots()` |
| step | `number` | 1 | `SliderElement::name("name")->step()` |
| submit | `boolean` | true | `SliderElement::name("name")->submit()` |
| templates | `object` | {} | `SliderElement::name("name")->templates()` |
| tooltipPosition | `string` | null | `SliderElement::name("name")->tooltipPosition()` |
| tooltips | `boolean` | true | `SliderElement::name("name")->tooltips()` |
| view | `string` | undefined | `SliderElement::name("name")->view()` |
| views | `object` | {} | `SliderElement::name("name")->views()` |

---

## ⚡ Events

You can define custom **sliderelement** events <a href="https://vueform.com/reference/slider-element#events" target="_blank">Documentation</a> directly in PHP using the `->events()` method.

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
SliderElement::name('example')
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

---

## ⚡ Slots

The following slots <a href="https://vueform.com/reference/slider-element#slots" target="_blank">Documentation</a> are available for this element:

| Name | Scope | Description |
| --- | --- | --- |
| `label` | - {component} el$ - the element's component | Renders a label for the element in ElementLabel component. |
| `info` | - {component} el$ - the element's component | Renders an info icon in ElementInfo component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this. |
| `required` | - |  |
| `description` | - {component} el$ - the element's component | Renders description for the element in ElementDescription component. |
| `before` | - {component} el$ - the element's component | Renders an ElementText component before the slider. |
| `between` | - {component} el$ - the element's component | Renders an ElementText component after the slider and before description. |
| `after` | - {component} el$ - the element's component | Renders an ElementText component after the description and error. |

