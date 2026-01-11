# Button Element 

A minimal example demonstrating the ButtonElement component within Laravel VueForm. 
      This form focuses on rendering a standard submit button using the built-in 
      submitButton() helper. Ideal for showcasing how simple static UI elements can be 
      integrated into a form and how button elements interact with form submission behavior. <a href="https://vueform.com/reference/button-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\TagsElement;
use VueFormLaravel\Elements\Static\ButtonElement;
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
                // ButtonElement::submitButton()
                //     ->events([
                //         'click' => 'handleSubmit'
                //     ]),
                TagsElement::name('rating')
                    ->type('tags')
                    ->items([
                        ['value' => 'user1', 'label' => 'Bijoy karmokar', 'image' => 'http://127.0.0.1:8000/assets/images/user-1.jpg'],
                        ['value' => 'user2', 'label' => 'User Two', 'image' => 'http://127.0.0.1:8000/assets/images/user-2.jpg'],
                        ['value' => 'user3', 'label' => 'User Three', 'image' => 'http://127.0.0.1:8000/assets/images/user-2.jpg']
                    ])
                    ->slots([
                        'tag' => '<span
                        >
                         <img class="multiselect-tag-image" src="{{ option.image }}" alt="{{ option.label }}" style="width:20px; border-radius:50%; margin-right:5px; vertical-align:middle;">
                            {{ option.label }}
                            <span v-if="!{{ disabled }}" class="multiselect-tag-remove" id="{{ handleTagRemove(option, $event) }}">
                                <span class="multiselect-tag-remove-icon fa fa-times">
                                    <!-- <i class="fa fa-times text-light"></i> -->
                                </span>
                            </span>
                        </span>',
                        'info' => '<span>Select Category</span>',
                        'before' => '<h1 style="color: blue;"> Please select categories</h1>',
                    ]),
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

The following events <a href="https://vueform.com/reference/button-element#events" target="_blank">Documentation</a> are available for this element:

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

### 🔔 Example Usage of PHP

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

### 🔔 Example Usage of JavaScript

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
---

## ⚙️ Available Static Methods

| Method | Description |
| --- | --- |
| `submitButton` | Create a form submit button |

