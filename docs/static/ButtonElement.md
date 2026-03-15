# Button Element

A form example demonstrating how to use the ButtonElement static element in VueForm Laravel to create submit buttons, clickable actions, and anchor buttons within Laravel forms. <a href="https://vueform.com/reference/button-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\TagsElement;
use VueFormLaravel\Elements\Static\ButtonElement;
use VueFormLaravel\Elements\Static\StaticElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class ButtonElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                StaticElement::text('This is a simple form with a submit button. Click the button to trigger form submission.')
                    ->addClass('mb-3'),
                ButtonElement::submitButton()
                    ->events([
                        'click' => 'handleSubmit'
                    ]),
                // anchor button example
                StaticElement::text('Below is an example of an anchor button. It will navigate to the specified URL when clicked.')
                    ->addClass('mt-4 mb-3'),
                ButtonElement::anchorButton('https://www.example.com')
                    ->buttonLabel('Visit Example.com')
            ]);
    }
}
```
---

## ⚙️ Allowed Attributes

| Name | Data Type | Default | Example |
| ---- | ---- | ---- | ---- |
| addClass | `array\|object\|string\|function` | null | `ButtonElement::name("name")->addClass()` |
| addClasses | `object\|function` | null | `ButtonElement::name("name")->addClasses()` |
| after | `object\|string\|number` | null | `ButtonElement::name("name")->after()` |
| align | `string` | null | `ButtonElement::name("name")->align()` |
| before | `object\|string\|number` | null | `ButtonElement::name("name")->before()` |
| between | `object\|string\|number` | null | `ButtonElement::name("name")->between()` |
| buttonClass | `string\|array\|object` | null | `ButtonElement::name("name")->buttonClass()` |
| buttonLabel | `string\|object\|function` | null | `ButtonElement::name("name")->buttonLabel()` |
| buttonType | `string` | null | `ButtonElement::name("name")->buttonType()` |
| columns | `object\|string\|number` | null | `ButtonElement::name("name")->columns()` |
| conditions | `array` | null | `ButtonElement::name("name")->conditions()` |
| danger | `boolean` | null | `ButtonElement::name("name")->danger()` |
| description | `string\|object` | null | `ButtonElement::name("name")->description()` |
| disabled | `boolean\|function\|array\|object` | null | `ButtonElement::name("name")->disabled()` |
| full | `boolean` | null | `ButtonElement::name("name")->full()` |
| href | `string` | null | `ButtonElement::name("name")->href()` |
| id | `string` | null | `ButtonElement::name("name")->id()` |
| info | `string\|object` | null | `ButtonElement::name("name")->info()` |
| infoPosition | `string` | null | `ButtonElement::name("name")->infoPosition()` |
| inline | `boolean` | null | `ButtonElement::name("name")->inline()` |
| label | `string\|object\|function` | null | `ButtonElement::name("name")->label()` |
| loading | `function\|boolean` | null | `ButtonElement::name("name")->loading()` |
| name | `string\|number` | null | `ButtonElement::name("name")->name()` |
| overrideClass | `array\|object\|string\|function` | null | `ButtonElement::name("name")->overrideClass()` |
| overrideClasses | `object\|function` | null | `ButtonElement::name("name")->overrideClasses()` |
| presets | `array` | null | `ButtonElement::name("name")->presets()` |
| removeClass | `array\|object\|function` | null | `ButtonElement::name("name")->removeClass()` |
| removeClasses | `object\|function` | null | `ButtonElement::name("name")->removeClasses()` |
| replaceClass | `object\|function` | null | `ButtonElement::name("name")->replaceClass()` |
| replaceClasses | `object\|function` | null | `ButtonElement::name("name")->replaceClasses()` |
| resets | `boolean` | null | `ButtonElement::name("name")->resets()` |
| secondary | `boolean` | null | `ButtonElement::name("name")->secondary()` |
| size | `string` | null | `ButtonElement::name("name")->size()` |
| slots | `object` | null | `ButtonElement::name("name")->slots()` |
| submits | `boolean` | null | `ButtonElement::name("name")->submits()` |
| target | `string` | null | `ButtonElement::name("name")->target()` |
| templates | `object` | null | `ButtonElement::name("name")->templates()` |
| view | `string` | null | `ButtonElement::name("name")->view()` |
| views | `object` | null | `ButtonElement::name("name")->views()` |

---

## ⚡ Events

You can define custom **button element** events <a href="https://vueform.com/reference/button-element#events" target="_blank">Documentation</a> directly in PHP using the `->events()` method.

Each event value refers to a JavaScript function name.

These functions must be defined inside:

```javascript
public/vueform-laravel/vueform-custom.js
```

This allows you to extend or override default behaviors for your generated VueForm components

| Name | Parameters | Description |
| --- | --- | --- |
| `click` | - {component} form$ - the form's component<br>- {component} el$ - the element's component<br>- {Event} event - the click Event | Triggered when the button is clicked. |
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
ButtonElement::name('example')
    ->events([
        'click' => 'handleClick',
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
function handleClick(form$, el$, event) {
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

The following slots <a href="https://vueform.com/reference/button-element#slots" target="_blank">Documentation</a> are available for this element:

| Name | Scope | Description |
| --- | --- | --- |
| `label` | - {component} el$ - the element's component | Renders a label for the element in ElementLabel component. |
| `info` | - {component} el$ - the element's component | Renders an info icon in ElementInfo component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this. |
| `description` | - {component} el$ - the element's component | Renders description for the element in ElementDescription component. |
| `before` | - {component} el$ - the element's component | Renders an ElementText component before the button. |
| `between` | - {component} el$ - the element's component | Renders an ElementText component after the button and before description. |
| `after` | - {component} el$ - the element's component | Renders an ElementText component after the description and error. |
| `default` | - {component} el$ - the element's component | Renders the button's label. |

---

## ⚙️ Available Static Methods

| Method | Description |
| --- | --- |
| `submitButton` | Create a form submit button |
| `anchorButton` | Create an anchor button that navigates to a specified URL |

