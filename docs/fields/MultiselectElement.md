# MultiselectElement

A form demonstrating usage of the MultiselectElement field within Laravel VueForm. <a href="https://vueform.com/reference/multiselect-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\MultiselectElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class MultiselectElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                MultiselectElement::name('foo')
            ]);
    }
}
```
---

## ⚙️ Allowed Attributes

| Name | Data Type | Default | Example |
| ---- | ---- | ---- | ---- |
| addClass | `array\|object\|string\|function` | null | `MultiselectElement::name("name")->addClass()` |
| addClasses | `object\|function` | {} | `MultiselectElement::name("name")->addClasses()` |
| addOptionOn | `array` | ["enter"] | `MultiselectElement::name("name")->addOptionOn()` |
| after | `object\|string\|number` | null | `MultiselectElement::name("name")->after()` |
| allowAbsent | `boolean` | false | `MultiselectElement::name("name")->allowAbsent()` |
| appendNewOption | `boolean` | true | `MultiselectElement::name("name")->appendNewOption()` |
| appendTo | `string` | undefined | `MultiselectElement::name("name")->appendTo()` |
| appendToBody | `boolean` | false | `MultiselectElement::name("name")->appendToBody()` |
| attrs | `object` | {} | `MultiselectElement::name("name")->attrs()` |
| autocomplete | `string` | undefined | `MultiselectElement::name("name")->autocomplete()` |
| before | `object\|string\|number` | null | `MultiselectElement::name("name")->before()` |
| between | `object\|string\|number` | null | `MultiselectElement::name("name")->between()` |
| canClear | `boolean` | true | `MultiselectElement::name("name")->canClear()` |
| caret | `boolean` | true | `MultiselectElement::name("name")->caret()` |
| clearOnRefetch | `boolean` | true | `MultiselectElement::name("name")->clearOnRefetch()` |
| clearOnSearch | `boolean` | false | `MultiselectElement::name("name")->clearOnSearch()` |
| clearOnSelect | `boolean` | false | `MultiselectElement::name("name")->clearOnSelect()` |
| closeOnDeselect | `boolean` | false | `MultiselectElement::name("name")->closeOnDeselect()` |
| closeOnSelect | `boolean` | true | `MultiselectElement::name("name")->closeOnSelect()` |
| columns | `object\|string\|number` | null | `MultiselectElement::name("name")->columns()` |
| conditions | `array` | [] | `MultiselectElement::name("name")->conditions()` |
| create | `boolean` | false | `MultiselectElement::name("name")->create()` |
| dataKey | `string` | undefined | `MultiselectElement::name("name")->dataKey()` |
| default | `array` | [] | `MultiselectElement::name("name")->default()` |
| delay | `number` | -1 | `MultiselectElement::name("name")->delay()` |
| description | `string\|object` | null | `MultiselectElement::name("name")->description()` |
| disabled | `boolean\|function\|array\|object` | false | `MultiselectElement::name("name")->disabled()` |
| displayErrors | `boolean` | true | `MultiselectElement::name("name")->displayErrors()` |
| extendOptions | `object` | {} | `MultiselectElement::name("name")->extendOptions()` |
| fieldName | `string\|object` | name|label | `MultiselectElement::name("name")->fieldName()` |
| filterResults | `boolean` | true | `MultiselectElement::name("name")->filterResults()` |
| floating | `string\|boolean\|object` | null | `MultiselectElement::name("name")->floating()` |
| formatData | `function` | null | `MultiselectElement::name("name")->formatData()` |
| formatLoad | `function` | null | `MultiselectElement::name("name")->formatLoad()` |
| groupHideEmpty | `boolean` | false | `MultiselectElement::name("name")->groupHideEmpty()` |
| groupLabel | `string` | label | `MultiselectElement::name("name")->groupLabel()` |
| groupOptions | `string` | items | `MultiselectElement::name("name")->groupOptions()` |
| groupSelect | `boolean` | true | `MultiselectElement::name("name")->groupSelect()` |
| groups | `boolean` | false | `MultiselectElement::name("name")->groups()` |
| hideSelected | `boolean` | true | `MultiselectElement::name("name")->hideSelected()` |
| id | `string` | null | `MultiselectElement::name("name")->id()` |
| info | `string\|object` | null | `MultiselectElement::name("name")->info()` |
| infoPosition | `string` | right | `MultiselectElement::name("name")->infoPosition()` |
| inline | `boolean` | false | `MultiselectElement::name("name")->inline()` |
| inputType | `string` | text | `MultiselectElement::name("name")->inputType()` |
| items | `object\|array\|function\|string` | {} | `MultiselectElement::name("name")->items()` |
| label | `string\|object\|function` | null | `MultiselectElement::name("name")->label()` |
| labelProp | `string` | label | `MultiselectElement::name("name")->labelProp()` |
| limit | `number` | -1 | `MultiselectElement::name("name")->limit()` |
| loading | `boolean` | false | `MultiselectElement::name("name")->loading()` |
| max | `number` | -1 | `MultiselectElement::name("name")->max()` |
| messages | `object` | {} | `MultiselectElement::name("name")->messages()` |
| minChars | `number` | 0 | `MultiselectElement::name("name")->minChars()` |
| multipleLabel | `function` | undefined | `MultiselectElement::name("name")->multipleLabel()` |
| multipleLabelMultiple | `string` | locale.vueform.multiselect.multipleLabelMore | `MultiselectElement::name("name")->multipleLabelMultiple()` |
| multipleLabelSingle | `string` | locale.vueform.multiselect.multipleLabelOne | `MultiselectElement::name("name")->multipleLabelSingle()` |
| name | `string\|number` | undefined | `MultiselectElement::name("name")->name()` |
| native | `boolean` | true | `MultiselectElement::name("name")->native()` |
| noOptionsText | `string\|object` | locale.multiselect.noOptions | `MultiselectElement::name("name")->noOptionsText()` |
| noResultsText | `string\|object` | locale.multiselect.noResults | `MultiselectElement::name("name")->noResultsText()` |
| object | `boolean` | false | `MultiselectElement::name("name")->object()` |
| openDirection | `string` | bottom | `MultiselectElement::name("name")->openDirection()` |
| overrideClass | `array\|object\|string\|function` | null | `MultiselectElement::name("name")->overrideClass()` |
| overrideClasses | `object\|function` | {} | `MultiselectElement::name("name")->overrideClasses()` |
| placeholder | `string\|object` | null | `MultiselectElement::name("name")->placeholder()` |
| presets | `array` | [] | `MultiselectElement::name("name")->presets()` |
| removeClass | `array\|object\|function` | null | `MultiselectElement::name("name")->removeClass()` |
| removeClasses | `object\|function` | {} | `MultiselectElement::name("name")->removeClasses()` |
| replaceClass | `object\|function` | null | `MultiselectElement::name("name")->replaceClass()` |
| replaceClasses | `object\|function` | {} | `MultiselectElement::name("name")->replaceClasses()` |
| resolveOnLoad | `boolean` | true | `MultiselectElement::name("name")->resolveOnLoad()` |
| rules | `array\|string\|object` | null | `MultiselectElement::name("name")->rules()` |
| search | `boolean` | false | `MultiselectElement::name("name")->search()` |
| searchParam | `string` | query | `MultiselectElement::name("name")->searchParam()` |
| size | `string` | undefined | `MultiselectElement::name("name")->size()` |
| slots | `object` | {} | `MultiselectElement::name("name")->slots()` |
| strict | `boolean` | true | `MultiselectElement::name("name")->strict()` |
| submit | `boolean` | true | `MultiselectElement::name("name")->submit()` |
| templates | `object` | {} | `MultiselectElement::name("name")->templates()` |
| trackBy | `string\|array` | label | `MultiselectElement::name("name")->trackBy()` |
| valueProp | `string` | value | `MultiselectElement::name("name")->valueProp()` |
| view | `string` | undefined | `MultiselectElement::name("name")->view()` |
| views | `object` | {} | `MultiselectElement::name("name")->views()` |

---

## ⚡ Events

The following events <a href="https://vueform.com/reference/multiselect-element#events" target="_blank">Documentation</a> are available for this element:

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

### 🔔 Example Usage of PHP

```php
MultiselectElement::name('example')
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
