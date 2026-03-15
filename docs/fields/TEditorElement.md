# TEditor Element

A form example demonstrating how to use the TEditorElement field in VueForm Laravel to create a multilingual rich text editor for handling content in multiple languages. <a href="https://vueform.com/reference/t-editor-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\TEditorElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class TEditorElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                TEditorElement::name('description')
                    ->label('Description')
                    ->placeholder('Enter a description here...')
                    ->default('<p>This is a default description with <strong>rich text</strong> formatting.</p>')
            ]);
    }
}
```
---

## ⚙️ Allowed Attributes

| Name | Data Type | Default | Example |
| ---- | ---- | ---- | ---- |
| accept | `array` | null | `TEditorElement::name("name")->accept()` |
| acceptMimes | `array` | null | `TEditorElement::name("name")->acceptMimes()` |
| addClass | `array\|object\|string\|function` | null | `TEditorElement::name("name")->addClass()` |
| addClasses | `object\|function` | {} | `TEditorElement::name("name")->addClasses()` |
| after | `object\|string\|number` | null | `TEditorElement::name("name")->after()` |
| before | `object\|string\|number` | null | `TEditorElement::name("name")->before()` |
| between | `object\|string\|number` | null | `TEditorElement::name("name")->between()` |
| columns | `object\|string\|number` | null | `TEditorElement::name("name")->columns()` |
| conditions | `array` | [] | `TEditorElement::name("name")->conditions()` |
| debounce | `number` | null | `TEditorElement::name("name")->debounce()` |
| default | `object\|string\|number` | null | `TEditorElement::name("name")->default()` |
| description | `string\|object` | null | `TEditorElement::name("name")->description()` |
| disabled | `boolean\|function\|array\|object` | false | `TEditorElement::name("name")->disabled()` |
| displayErrors | `boolean` | true | `TEditorElement::name("name")->displayErrors()` |
| endpoint | `string\|function\|promise` | config.endpoints.attachment.url | `TEditorElement::name("name")->endpoint()` |
| fieldName | `string\|object` | name|label | `TEditorElement::name("name")->fieldName()` |
| formatData | `function` | null | `TEditorElement::name("name")->formatData()` |
| formatLoad | `function` | null | `TEditorElement::name("name")->formatLoad()` |
| hideTools | `array` | [] | `TEditorElement::name("name")->hideTools()` |
| id | `string` | null | `TEditorElement::name("name")->id()` |
| info | `string\|object` | null | `TEditorElement::name("name")->info()` |
| infoPosition | `string` | right | `TEditorElement::name("name")->infoPosition()` |
| inline | `boolean` | false | `TEditorElement::name("name")->inline()` |
| label | `string\|object\|function` | null | `TEditorElement::name("name")->label()` |
| messages | `object` | {} | `TEditorElement::name("name")->messages()` |
| method | `string` | config.endpoints.attachment.method | `TEditorElement::name("name")->method()` |
| name | `string\|number` | undefined | `TEditorElement::name("name")->name()` |
| overrideClass | `array\|object\|string\|function` | null | `TEditorElement::name("name")->overrideClass()` |
| overrideClasses | `object\|function` | {} | `TEditorElement::name("name")->overrideClasses()` |
| placeholder | `string\|object` | null | `TEditorElement::name("name")->placeholder()` |
| presets | `array` | [] | `TEditorElement::name("name")->presets()` |
| removeClass | `array\|object\|function` | null | `TEditorElement::name("name")->removeClass()` |
| removeClasses | `object\|function` | {} | `TEditorElement::name("name")->removeClasses()` |
| replaceClass | `object\|function` | null | `TEditorElement::name("name")->replaceClass()` |
| replaceClasses | `object\|function` | {} | `TEditorElement::name("name")->replaceClasses()` |
| rules | `array\|string\|object` | null | `TEditorElement::name("name")->rules()` |
| size | `string` | undefined | `TEditorElement::name("name")->size()` |
| slots | `object` | {} | `TEditorElement::name("name")->slots()` |
| submit | `boolean` | true | `TEditorElement::name("name")->submit()` |
| templates | `object` | {} | `TEditorElement::name("name")->templates()` |
| view | `string` | undefined | `TEditorElement::name("name")->view()` |
| views | `object` | {} | `TEditorElement::name("name")->views()` |

---

## ⚡ Events

You can define custom **teditor element** events <a href="https://vueform.com/reference/t-editor-element#events" target="_blank">Documentation</a> directly in PHP using the `->events()` method.

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
| `blur` | - {component} el$ - the element's component | Triggered when the input is blurred. |
| `alert` | - {string} message - the alert message | Triggered when the user select a file/mime type that is not allowed. If the event does not have a listener the alert message will be displayed by alert(). |
| `error` | - {Error} error - the Error object | Triggered when file upload throws an error. |
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
TEditorElement::name('example')
    ->events([
        'reset' => 'handleReset',
        'clear' => 'handleClear',
        'change' => 'handleChange',
        'blur' => 'handleBlur',
        'alert' => 'handleAlert',
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
function handleBlur(el$) {
    // Your code here
}
function handleAlert(message) {
    // Your code here
}
function handleError({Error} error) {
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

The following slots <a href="https://vueform.com/reference/t-editor-element#slots" target="_blank">Documentation</a> are available for this element:

| Name | Scope | Description |
| --- | --- | --- |
| `label` | - {component} el$ - the element's component | Renders a label for the element in ElementLabel component. |
| `info` | - {component} el$ - the element's component | Renders an info icon in ElementInfo component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this. |
| `required` | - |  |
| `description` | - {component} el$ - the element's component | Renders description for the element in ElementDescription component. |
| `before` | - {component} el$ - the element's component | Renders an ElementText component before the editor. |
| `between` | - {component} el$ - the element's component | Renders an ElementText component after the editor and before description. |
| `after` | - {component} el$ - the element's component | Renders an ElementText component after the description and error. |

