# TTextarea Element

A form example demonstrating how to use the TTextareaElement field in VueForm Laravel to capture multilingual multi-line text input in a Laravel form. <a href="https://vueform.com/reference/t-textarea-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\TTextareaElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class TTextareaElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                TTextareaElement::name('description')
                    ->label('Description')
                    ->placeholder('Enter a description here...')
                    ->default('This is a default description.')
            ]);
    }
}
```
---

## ⚙️ Allowed Attributes

| Name | Data Type | Default | Example |
| ---- | ---- | ---- | ---- |
| addClass | `array\|object\|string\|function` | null | `TTextareaElement::name("name")->addClass()` |
| addClasses | `object\|function` | {} | `TTextareaElement::name("name")->addClasses()` |
| addons | `object` | {} | `TTextareaElement::name("name")->addons()` |
| after | `object\|string\|number` | null | `TTextareaElement::name("name")->after()` |
| attrs | `object` | {} | `TTextareaElement::name("name")->attrs()` |
| autogrow | `boolean` | true | `TTextareaElement::name("name")->autogrow()` |
| before | `object\|string\|number` | null | `TTextareaElement::name("name")->before()` |
| between | `object\|string\|number` | null | `TTextareaElement::name("name")->between()` |
| columns | `object\|string\|number` | null | `TTextareaElement::name("name")->columns()` |
| conditions | `array` | [] | `TTextareaElement::name("name")->conditions()` |
| debounce | `number` | null | `TTextareaElement::name("name")->debounce()` |
| default | `object\|string\|number` | null | `TTextareaElement::name("name")->default()` |
| description | `string\|object` | null | `TTextareaElement::name("name")->description()` |
| disabled | `boolean\|function\|array\|object` | false | `TTextareaElement::name("name")->disabled()` |
| displayErrors | `boolean` | true | `TTextareaElement::name("name")->displayErrors()` |
| fieldName | `string\|object` | name|label | `TTextareaElement::name("name")->fieldName()` |
| floating | `string\|boolean\|object` | null | `TTextareaElement::name("name")->floating()` |
| formatData | `function` | null | `TTextareaElement::name("name")->formatData()` |
| formatLoad | `function` | null | `TTextareaElement::name("name")->formatLoad()` |
| id | `string` | null | `TTextareaElement::name("name")->id()` |
| info | `string\|object` | null | `TTextareaElement::name("name")->info()` |
| infoPosition | `string` | right | `TTextareaElement::name("name")->infoPosition()` |
| inline | `boolean` | false | `TTextareaElement::name("name")->inline()` |
| label | `string\|object\|function` | null | `TTextareaElement::name("name")->label()` |
| messages | `object` | {} | `TTextareaElement::name("name")->messages()` |
| name | `string\|number` | undefined | `TTextareaElement::name("name")->name()` |
| overrideClass | `array\|object\|string\|function` | null | `TTextareaElement::name("name")->overrideClass()` |
| overrideClasses | `object\|function` | {} | `TTextareaElement::name("name")->overrideClasses()` |
| placeholder | `string\|object` | null | `TTextareaElement::name("name")->placeholder()` |
| presets | `array` | [] | `TTextareaElement::name("name")->presets()` |
| readonly | `boolean\|function\|array\|object` | false | `TTextareaElement::name("name")->readonly()` |
| removeClass | `array\|object\|function` | null | `TTextareaElement::name("name")->removeClass()` |
| removeClasses | `object\|function` | {} | `TTextareaElement::name("name")->removeClasses()` |
| replaceClass | `object\|function` | null | `TTextareaElement::name("name")->replaceClass()` |
| replaceClasses | `object\|function` | {} | `TTextareaElement::name("name")->replaceClasses()` |
| rows | `number` | 3 | `TTextareaElement::name("name")->rows()` |
| rules | `array\|string\|object` | null | `TTextareaElement::name("name")->rules()` |
| size | `string` | undefined | `TTextareaElement::name("name")->size()` |
| slots | `object` | {} | `TTextareaElement::name("name")->slots()` |
| submit | `boolean` | true | `TTextareaElement::name("name")->submit()` |
| templates | `object` | {} | `TTextareaElement::name("name")->templates()` |
| view | `string` | undefined | `TTextareaElement::name("name")->view()` |
| views | `object` | {} | `TTextareaElement::name("name")->views()` |

---

## ⚡ Events

You can define custom **ttextarea element** events <a href="https://vueform.com/reference/t-textarea-element#events" target="_blank">Documentation</a> directly in PHP using the `->events()` method.

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
| `focus` | - {component} el$ - the element's component | Triggered when the input is focused. |
| `keydown` | - {Event} Event - the Event object<br>- {component} el$ - the element's component | Triggered on keydown. |
| `keyup` | - {Event} Event - the Event object<br>- {component} el$ - the element's component | Triggered on keyup. |
| `keypress` | - {Event} Event - the Event object<br>- {component} el$ - the element's component | Triggered on keypress. |
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
TTextareaElement::name('example')
    ->events([
        'reset' => 'handleReset',
        'clear' => 'handleClear',
        'change' => 'handleChange',
        'blur' => 'handleBlur',
        'focus' => 'handleFocus',
        'keydown' => 'handleKeydown',
        'keyup' => 'handleKeyup',
        'keypress' => 'handleKeypress',
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
function handleFocus(el$) {
    // Your code here
}
function handleKeydown(Event, el$) {
    // Your code here
}
function handleKeyup(Event, el$) {
    // Your code here
}
function handleKeypress(Event, el$) {
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

The following slots <a href="https://vueform.com/reference/t-textarea-element#slots" target="_blank">Documentation</a> are available for this element:

| Name | Scope | Description |
| --- | --- | --- |
| `label` | - {component} el$ - the element's component | Renders a label for the element in ElementLabel component. |
| `info` | - {component} el$ - the element's component | Renders an info icon in ElementInfo component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this. |
| `required` | - |  |
| `description` | - {component} el$ - the element's component | Renders description for the element in ElementDescription component. |
| `before` | - {component} el$ - the element's component | Renders an ElementText component before the textarea. |
| `between` | - {component} el$ - the element's component | Renders an ElementText component after the textarea and before description. |
| `after` | - {component} el$ - the element's component | Renders an ElementText component after the description and error. |
| `addon-before` | - {component} el$ - the element's component | Prepends an addon to the textarea. |
| `addon-after` | - {component} el$ - the element's component | Appends an addon to the textarea. |

