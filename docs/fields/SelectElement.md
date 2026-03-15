# Select Element

A form example demonstrating how to use the SelectElement field in VueForm Laravel to allow users to choose a single option from a dropdown list in a Laravel form. <a href="https://vueform.com/reference/select-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\SelectElement;
use VueFormLaravel\Elements\Static\ButtonElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class SelectElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                SelectElement::name('options')
                    ->label('Select Options')
                    ->items([
                        'option1' => 'Option 1',
                        'option2' => 'Option 2',
                        'option3' => 'Option 3',
                    ])
                    ->placeholder('Please select an option'),
                ButtonElement::submitButton()
                    // add css class
                    ->addClass([
                        ["button" => "hover:bg-sky-600"]
                    ]),
            ]);
    }
}
```
---

## ⚙️ Allowed Attributes

| Name | Data Type | Default | Example |
| ---- | ---- | ---- | ---- |
| addClass | `array\|object\|string\|function` | null | `SelectElement::name("name")->addClass()` |
| addClasses | `object\|function` | {} | `SelectElement::name("name")->addClasses()` |
| addOptionOn | `array` | ["enter"] | `SelectElement::name("name")->addOptionOn()` |
| after | `object\|string\|number` | null | `SelectElement::name("name")->after()` |
| allowAbsent | `boolean` | false | `SelectElement::name("name")->allowAbsent()` |
| appendNewOption | `boolean` | true | `SelectElement::name("name")->appendNewOption()` |
| appendTo | `string` | undefined | `SelectElement::name("name")->appendTo()` |
| appendToBody | `boolean` | false | `SelectElement::name("name")->appendToBody()` |
| attrs | `object` | {} | `SelectElement::name("name")->attrs()` |
| autocomplete | `string` | undefined | `SelectElement::name("name")->autocomplete()` |
| before | `object\|string\|number` | null | `SelectElement::name("name")->before()` |
| between | `object\|string\|number` | null | `SelectElement::name("name")->between()` |
| canClear | `boolean` | true | `SelectElement::name("name")->canClear()` |
| canDeselect | `boolean` | true | `SelectElement::name("name")->canDeselect()` |
| caret | `boolean` | true | `SelectElement::name("name")->caret()` |
| clearOnRefetch | `boolean` | false | `SelectElement::name("name")->clearOnRefetch()` |
| clearOnSearch | `boolean` | false | `SelectElement::name("name")->clearOnSearch()` |
| closeOnDeselect | `boolean` | false | `SelectElement::name("name")->closeOnDeselect()` |
| closeOnSelect | `boolean` | true | `SelectElement::name("name")->closeOnSelect()` |
| columns | `object\|string\|number` | null | `SelectElement::name("name")->columns()` |
| conditions | `array` | [] | `SelectElement::name("name")->conditions()` |
| create | `boolean` | false | `SelectElement::name("name")->create()` |
| dataKey | `string` | undefined | `SelectElement::name("name")->dataKey()` |
| default | `string\|number\|object` | null | `SelectElement::name("name")->default()` |
| delay | `number` | -1 | `SelectElement::name("name")->delay()` |
| description | `string\|object` | null | `SelectElement::name("name")->description()` |
| disabled | `boolean\|function\|array\|object` | false | `SelectElement::name("name")->disabled()` |
| displayErrors | `boolean` | true | `SelectElement::name("name")->displayErrors()` |
| extendOptions | `object` | {} | `SelectElement::name("name")->extendOptions()` |
| fieldName | `string\|object` | name|label | `SelectElement::name("name")->fieldName()` |
| filterResults | `boolean` | true | `SelectElement::name("name")->filterResults()` |
| floating | `string\|boolean\|object` | null | `SelectElement::name("name")->floating()` |
| formatData | `function` | null | `SelectElement::name("name")->formatData()` |
| formatLoad | `function` | null | `SelectElement::name("name")->formatLoad()` |
| groupHideEmpty | `boolean` | false | `SelectElement::name("name")->groupHideEmpty()` |
| groupLabel | `string` | label | `SelectElement::name("name")->groupLabel()` |
| groupOptions | `string` | items | `SelectElement::name("name")->groupOptions()` |
| groups | `boolean` | false | `SelectElement::name("name")->groups()` |
| id | `string` | null | `SelectElement::name("name")->id()` |
| info | `string\|object` | null | `SelectElement::name("name")->info()` |
| infoPosition | `string` | right | `SelectElement::name("name")->infoPosition()` |
| inline | `boolean` | false | `SelectElement::name("name")->inline()` |
| inputType | `string` | text | `SelectElement::name("name")->inputType()` |
| items | `object\|array\|function\|string` | {} | `SelectElement::name("name")->items()` |
| label | `string\|object\|function` | null | `SelectElement::name("name")->label()` |
| labelProp | `string` | label | `SelectElement::name("name")->labelProp()` |
| limit | `number` | -1 | `SelectElement::name("name")->limit()` |
| loading | `boolean` | false | `SelectElement::name("name")->loading()` |
| messages | `object` | {} | `SelectElement::name("name")->messages()` |
| minChars | `number` | 0 | `SelectElement::name("name")->minChars()` |
| name | `string\|number` | undefined | `SelectElement::name("name")->name()` |
| native | `boolean` | true | `SelectElement::name("name")->native()` |
| noOptionsText | `string\|object` | locale.multiselect.noOptions | `SelectElement::name("name")->noOptionsText()` |
| noResultsText | `string\|object` | locale.multiselect.noResults | `SelectElement::name("name")->noResultsText()` |
| object | `boolean` | false | `SelectElement::name("name")->object()` |
| openDirection | `string` | bottom | `SelectElement::name("name")->openDirection()` |
| overrideClass | `array\|object\|string\|function` | null | `SelectElement::name("name")->overrideClass()` |
| overrideClasses | `object\|function` | {} | `SelectElement::name("name")->overrideClasses()` |
| placeholder | `string\|object` | null | `SelectElement::name("name")->placeholder()` |
| presets | `array` | [] | `SelectElement::name("name")->presets()` |
| removeClass | `array\|object\|function` | null | `SelectElement::name("name")->removeClass()` |
| removeClasses | `object\|function` | {} | `SelectElement::name("name")->removeClasses()` |
| replaceClass | `object\|function` | null | `SelectElement::name("name")->replaceClass()` |
| replaceClasses | `object\|function` | {} | `SelectElement::name("name")->replaceClasses()` |
| resolveOnLoad | `boolean` | true | `SelectElement::name("name")->resolveOnLoad()` |
| rules | `array\|string\|object` | null | `SelectElement::name("name")->rules()` |
| search | `boolean` | false | `SelectElement::name("name")->search()` |
| searchParam | `string` | query | `SelectElement::name("name")->searchParam()` |
| size | `string` | undefined | `SelectElement::name("name")->size()` |
| slots | `object` | {} | `SelectElement::name("name")->slots()` |
| strict | `boolean` | true | `SelectElement::name("name")->strict()` |
| submit | `boolean` | true | `SelectElement::name("name")->submit()` |
| templates | `object` | {} | `SelectElement::name("name")->templates()` |
| trackBy | `string\|array` | undefined | `SelectElement::name("name")->trackBy()` |
| truncate | `boolean` | true | `SelectElement::name("name")->truncate()` |
| valueProp | `string` | value | `SelectElement::name("name")->valueProp()` |
| view | `string` | undefined | `SelectElement::name("name")->view()` |
| views | `object` | {} | `SelectElement::name("name")->views()` |

---

## ⚡ Events

You can define custom **select element** events <a href="https://vueform.com/reference/select-element#events" target="_blank">Documentation</a> directly in PHP using the `->events()` method.

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
| `select` | - {object} option - the selected option<br>- {component} el$ - the element's component | Triggered when an option is selected when using native: false. |
| `deselect` | - {object} option - the deselected option<br>- {component} el$ - the element's component | Triggered when an option is deselected when using native: false. |
| `search-change` | - {string|null} searchQuery - the search value<br>- {component} el$ - the element's component | Triggered when the search query changes when using search: true. |
| `open` | - {component} el$ - the element's component | Triggered when the dropdown list is opened when using native: false. |
| `close` | - {component} el$ - the element's component | Triggered when the dropdown list is closed when using native: false. |
| `paste` | - {Event} event - the paste Event<br>- {component} el$ - the element's component | Triggered when text is pasted to the search input when using search: true. |
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
SelectElement::name('example')
    ->events([
        'reset' => 'handleReset',
        'clear' => 'handleClear',
        'change' => 'handleChange',
        'select' => 'handleSelect',
        'deselect' => 'handleDeselect',
        'search-change' => 'handleSearchChange',
        'open' => 'handleOpen',
        'close' => 'handleClose',
        'paste' => 'handlePaste',
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
function handleSelect(option, el$) {
    // Your code here
}
function handleDeselect(option, el$) {
    // Your code here
}
function handleSearchChange(searchQuery, el$) {
    // Your code here
}
function handleOpen(el$) {
    // Your code here
}
function handleClose(el$) {
    // Your code here
}
function handlePaste(event, el$) {
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

The following slots <a href="https://vueform.com/reference/select-element#slots" target="_blank">Documentation</a> are available for this element:

| Name | Scope | Description |
| --- | --- | --- |
| `option` | - {component} el$ - the element's component<br>- {object} option - the option object<br>- {string|null} search - the current value of search input | Replaces the default option template. |
| `single-label` | - {component} el$ - the element's component<br>- {object} value - the selected option | Replaces the input's inner label that is displayed when an option is selected. |
| `placeholder` | - {component} el$ - the element's component | Replaces the default template for the input's placeholder. |
| `group-label` | - {component} el$ - the element's component<br>- {object} group - the group object | Replaces the default group header when groups is true. |
| `before-list` | - {component} el$ - the element's component | Prepends the content of the slot to the option list. |
| `after-list` | - {component} el$ - the element's component | Appends the content of the slot to the option list. |
| `no-results` | - {component} el$ - the element's component | Replaces the default template that is shown when the input has options, but the user search does not have any results. Can be also set without overriding the template with noResultsText option. |
| `no-options` | - {component} el$ - the element's component | Replaces the default template that is shown when the input has no options. Can be also set without overriding the template with noOptionsText option. |
| `caret` | - {component} el$ - the element's component | Replaces the small triangle displayed on the right of the input when caret is true. |
| `spinner` | - {component} el$ - the element's component | Replaces the spinner shown when async options are loading or loading is true. |
| `clear` | - {component} el$ - the element's component<br>- {function} clear - clears the input value | Replaces the clear icon shown when the input has at least one selected options and canClear is true. |
| `label` | - {component} el$ - the element's component | Renders a label for the element in ElementLabel component. |
| `info` | - {component} el$ - the element's component | Renders an info icon in ElementInfo component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this. |
| `required` | - |  |
| `description` | - {component} el$ - the element's component | Renders description for the element in ElementDescription component. |
| `before` | - {component} el$ - the element's component | Renders an ElementText component before the select. |
| `between` | - {component} el$ - the element's component | Renders an ElementText component after the select and before description. |
| `after` | - {component} el$ - the element's component | Renders an ElementText component after the description and error. |

