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
                RadiogroupElement::name('gender')
                    ->label('Gender')
                    ->items([
                        [
                            'value' => 'male',
                            'label' => 'Male'
                        ],
                        [
                            'value' => 'female',
                            'label' => 'Female'
                        ],
                        [
                            'value' => 'other',
                            'label' => 'Other'
                        ]
                    ])
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

You can define custom **radiogroupelement** events <a href="https://vueform.com/reference/radiogroup-element#events" target="_blank">Documentation</a> directly in PHP using the `->events()` method.

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

The following slots <a href="https://vueform.com/reference/radiogroup-element#slots" target="_blank">Documentation</a> are available for this element:

| Name | Scope | Description |
| --- | --- | --- |
| `radio` | - {component} el$ - the element's component<br>- {object} item - the radio item<br>- {string|number} value - the radio value<br>- {object} items - the radio items<br>- {number} index - the index of current radio<br>- {string} id - the id attribute of the radio field used by the default template<br>- {string} name - the name attribute of the radio field used by the default template<br>- {boolean} isDisabled - whether the radio is disabled<br>- {object} classes - an object containing the classes of RadiogroupRadio component | Replaces the template for the radio input. Radio inputs are rendered by the RadiogroupRadio component which has a default radio template. If the this slot is defined, the default template in RadiogroupRadio component will be overridden with the content of this slot. |
| `label` | - {component} el$ - the element's component | Renders a label for the element in ElementLabel component. |
| `info` | - {component} el$ - the element's component | Renders an info icon in ElementInfo component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this. |
| `required` | - |  |
| `description` | - {component} el$ - the element's component | Renders description for the element in ElementDescription component. |
| `before` | - {component} el$ - the element's component | Renders an ElementText component before the radio group. |
| `between` | - {component} el$ - the element's component | Renders an ElementText component after the radio group and before description. |
| `after` | - {component} el$ - the element's component | Renders an ElementText component after the description and error. |

