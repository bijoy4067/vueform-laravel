# Toggle Element

A form example demonstrating how to use the ToggleElement field in VueForm Laravel to allow users to switch between on and off states in a Laravel form. <a href="https://vueform.com/reference/toggle-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\TextElement;
use VueFormLaravel\Elements\Fields\ToggleElement;
use VueFormLaravel\Elements\Static\ButtonElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class ToggleElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                ToggleElement::name('search')
            ]);
    }

    public static function formData($request)
    {
        $request->validate([
            'search' => 'required'
        ]);

        return response()->json([
            'status' => 'success'
        ]);
    }
}
```
---

## ⚙️ Allowed Attributes

| Name | Data Type | Default | Example |
| ---- | ---- | ---- | ---- |
| addClass | `array\|object\|string\|function` | null | `ToggleElement::name("name")->addClass()` |
| addClasses | `object\|function` | {} | `ToggleElement::name("name")->addClasses()` |
| after | `object\|string\|number` | null | `ToggleElement::name("name")->after()` |
| align | `string` | undefined | `ToggleElement::name("name")->align()` |
| before | `object\|string\|number` | null | `ToggleElement::name("name")->before()` |
| between | `object\|string\|number` | null | `ToggleElement::name("name")->between()` |
| columns | `object\|string\|number` | null | `ToggleElement::name("name")->columns()` |
| conditions | `array` | [] | `ToggleElement::name("name")->conditions()` |
| default | `string\|number\|boolean` | undefined | `ToggleElement::name("name")->default()` |
| description | `string\|object` | null | `ToggleElement::name("name")->description()` |
| disabled | `boolean\|function\|array\|object` | false | `ToggleElement::name("name")->disabled()` |
| displayErrors | `boolean` | true | `ToggleElement::name("name")->displayErrors()` |
| extendOptions | `object` | {} | `ToggleElement::name("name")->extendOptions()` |
| falseValue | `boolean\|string\|number` | false | `ToggleElement::name("name")->falseValue()` |
| fieldName | `string\|object` | name|label | `ToggleElement::name("name")->fieldName()` |
| formatData | `function` | null | `ToggleElement::name("name")->formatData()` |
| formatLoad | `function` | null | `ToggleElement::name("name")->formatLoad()` |
| id | `string` | null | `ToggleElement::name("name")->id()` |
| info | `string\|object` | null | `ToggleElement::name("name")->info()` |
| infoPosition | `string` | right | `ToggleElement::name("name")->infoPosition()` |
| inline | `boolean` | false | `ToggleElement::name("name")->inline()` |
| label | `string\|object\|function` | null | `ToggleElement::name("name")->label()` |
| labels | `object` | {} | `ToggleElement::name("name")->labels()` |
| messages | `object` | {} | `ToggleElement::name("name")->messages()` |
| name | `string\|number` | undefined | `ToggleElement::name("name")->name()` |
| overrideClass | `array\|object\|string\|function` | null | `ToggleElement::name("name")->overrideClass()` |
| overrideClasses | `object\|function` | {} | `ToggleElement::name("name")->overrideClasses()` |
| presets | `array` | [] | `ToggleElement::name("name")->presets()` |
| removeClass | `array\|object\|function` | null | `ToggleElement::name("name")->removeClass()` |
| removeClasses | `object\|function` | {} | `ToggleElement::name("name")->removeClasses()` |
| replaceClass | `object\|function` | null | `ToggleElement::name("name")->replaceClass()` |
| replaceClasses | `object\|function` | {} | `ToggleElement::name("name")->replaceClasses()` |
| rules | `array\|string\|object` | null | `ToggleElement::name("name")->rules()` |
| size | `string` | undefined | `ToggleElement::name("name")->size()` |
| slots | `object` | {} | `ToggleElement::name("name")->slots()` |
| standalone | `boolean` | false | `ToggleElement::name("name")->standalone()` |
| submit | `boolean` | true | `ToggleElement::name("name")->submit()` |
| templates | `object` | {} | `ToggleElement::name("name")->templates()` |
| text | `string\|object` | null | `ToggleElement::name("name")->text()` |
| trueValue | `boolean\|string\|number` | true | `ToggleElement::name("name")->trueValue()` |
| view | `string` | undefined | `ToggleElement::name("name")->view()` |
| views | `object` | {} | `ToggleElement::name("name")->views()` |

---

## ⚡ Events

You can define custom **toggle element** events <a href="https://vueform.com/reference/toggle-element#events" target="_blank">Documentation</a> directly in PHP using the `->events()` method.

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
ToggleElement::name('example')
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

The following slots <a href="https://vueform.com/reference/toggle-element#slots" target="_blank">Documentation</a> are available for this element:

| Name | Scope | Description |
| --- | --- | --- |
| `default` | - {component} el$ - the element's component | Renders a label for the toggle. |
| `label` | - {component} el$ - the element's component | Renders a label for the element in ElementLabel component. |
| `info` | - {component} el$ - the element's component | Renders an info icon in ElementInfo component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this. |
| `required` | - |  |
| `description` | - {component} el$ - the element's component | Renders description for the element in ElementDescription component. |
| `before` | - {component} el$ - the element's component | Renders an ElementText component before the toggle. |
| `between` | - {component} el$ - the element's component | Renders an ElementText component after the toggle and before description. |
| `after` | - {component} el$ - the element's component | Renders an ElementText component after the description and error. |

