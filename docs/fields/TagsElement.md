# TagsElement 

A fully-featured demonstration of the TagsElement field in Laravel VueForm. 
      This example showcases tag selection with custom templates, dynamic item sources, 
      searchability, column-based layout grouping, and event handling. It also includes 
      mixed field types, slot customization, remote data loading, validation rules, 
      and integration with static elements such as headings and horizontal dividers. 
      Ideal for developers looking to implement advanced tag-based input fields with 
      flexible UI rendering and form submission workflows. <a href="https://vueform.com/reference/tags-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\TagsElement;
use VueFormLaravel\Elements\Fields\TextElement;
use VueFormLaravel\Elements\Static\ButtonElement;
use VueFormLaravel\Elements\Static\StaticElement;
use VueFormLaravel\Elements\Structure\GroupElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class TagsElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                GroupElement::rowWith2Columns([
                    TagsElement::name('category')
                        ->type('tags')
                        ->closeOnSelect(false)
                        ->search(true)
                        ->label('Categoryxx')
                        ->inputType('search')
                        ->autocomplete('off')
                        ->limit(5)
                        ->rules('required')
                        ->columns([
                            'container' => 12,
                            'wrapper' => 6
                        ])
                        ->items([
                            ['value' => 1, 'label' => 'Category 1', 'color' => 'red', 'name' => 'foo'],
                            ['value' => 2, 'label' => 'Category 2', 'color' => 'red', 'name' => 'foo'],
                            ['value' => 3, 'label' => 'Category 3', 'color' => 'red', 'name' => 'foo']
                        ])
                        ->max(5)
                        ->events([
                            'select' => 'aaaa',
                        ])
                        ->slots([
                            'tag' => '<span
                                    class="badge w-auto"
                                    style="background-color: {{ option.color}};
                                    color:{{ option.backgroundColor }};
                                    padding: 5px 10px;
                                    border-radius: 4px;
                                    font-size: 14px;
                                    font-weight: 500;
                                    align-items: center;
                                    display: flex;
                                    margin: 4px 7px;"
                                >
                                    {{ option.label }}
                                    <span v-if="!{{ disabled }}" class="multiselect-tag-remove" id="{{ handleTagRemove(option, $event) }}">
                                        <span class="multiselect-tag-remove-icon fa fa-times">
                                            <!-- <i class="fa fa-times text-light"></i> -->
                                        </span>
                                    </span>
                                </span>',
                            'info' => '<span>gggg ddd ddd</span>',
                            'before' => '<h1 style="color: blue;"> Please select categories</h1>',
                        ]),
                    TagsElement::name('tags')
                        ->type('tags')
                        ->closeOnSelect(false)
                        ->label('tagsxx')
                        ->inputType('search')
                        ->autocomplete('off')
                        ->limit(5)
                        ->items('http://localhost:8000/tags/json')
                        ->max(5)
                        ->rules('required')
                        ->events([
                            'select' => 'aaaa',
                        ]),
                    TextElement::name('search'),
                    TextElement::name('number')->inputType('number'),
                ]),
                StaticElement::hr(),
                TagsElement::name('rating')
                    ->type('tags')
                    ->closeOnSelect(false)
                    ->search(true)
                    ->label('Category')
                    ->inputType('search')
                    ->autocomplete('off')
                    ->limit(5)
                    ->submit(true)
                    ->columns([
                        'container' => 12,
                        'wrapper' => 6
                    ])
                    ->items([
                        ['value' => 1, 'label' => 'Category 1', 'color' => 'red', 'name' => 'foo'],
                        ['value' => 2, 'label' => 'Category 2', 'color' => 'red', 'name' => 'foo'],
                        ['value' => 3, 'label' => 'Category 3', 'color' => 'red', 'name' => 'foo']
                    ])
                    ->max(5)
                    ->events([
                        'select' => 'aaaa',
                    ]),
                ButtonElement::submitButton()

            ]);
    }

    public static function formData($request)
    {
        $request->validate([
            'category' => 'required'
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
| addClass | `array\|object\|string\|function` | null | `TagsElement::name("name")->addClass()` |
| addClasses | `object\|function` | {} | `TagsElement::name("name")->addClasses()` |
| addOptionOn | `array` | ["enter"] | `TagsElement::name("name")->addOptionOn()` |
| after | `object\|string\|number` | null | `TagsElement::name("name")->after()` |
| allowAbsent | `boolean` | false | `TagsElement::name("name")->allowAbsent()` |
| appendNewOption | `boolean` | true | `TagsElement::name("name")->appendNewOption()` |
| appendTo | `string` | undefined | `TagsElement::name("name")->appendTo()` |
| appendToBody | `boolean` | false | `TagsElement::name("name")->appendToBody()` |
| attrs | `object` | {} | `TagsElement::name("name")->attrs()` |
| autocomplete | `string` | undefined | `TagsElement::name("name")->autocomplete()` |
| before | `object\|string\|number` | null | `TagsElement::name("name")->before()` |
| between | `object\|string\|number` | null | `TagsElement::name("name")->between()` |
| breakTags | `boolean` | false | `TagsElement::name("name")->breakTags()` |
| canClear | `boolean` | true | `TagsElement::name("name")->canClear()` |
| caret | `boolean` | true | `TagsElement::name("name")->caret()` |
| clearOnRefetch | `boolean` | false | `TagsElement::name("name")->clearOnRefetch()` |
| clearOnSearch | `boolean` | false | `TagsElement::name("name")->clearOnSearch()` |
| clearOnSelect | `boolean` | true | `TagsElement::name("name")->clearOnSelect()` |
| closeOnDeselect | `boolean` | false | `TagsElement::name("name")->closeOnDeselect()` |
| closeOnSelect | `boolean` | true | `TagsElement::name("name")->closeOnSelect()` |
| columns | `object\|string\|number` | null | `TagsElement::name("name")->columns()` |
| conditions | `array` | [] | `TagsElement::name("name")->conditions()` |
| create | `boolean` | false | `TagsElement::name("name")->create()` |
| dataKey | `string` | undefined | `TagsElement::name("name")->dataKey()` |
| default | `array` | [] | `TagsElement::name("name")->default()` |
| delay | `number` | -1 | `TagsElement::name("name")->delay()` |
| description | `string\|object` | null | `TagsElement::name("name")->description()` |
| disabled | `boolean\|function\|array\|object` | false | `TagsElement::name("name")->disabled()` |
| displayErrors | `boolean` | true | `TagsElement::name("name")->displayErrors()` |
| extendOptions | `object` | {} | `TagsElement::name("name")->extendOptions()` |
| fieldName | `string\|object` | name|label | `TagsElement::name("name")->fieldName()` |
| filterResults | `boolean` | true | `TagsElement::name("name")->filterResults()` |
| floating | `string\|boolean\|object` | null | `TagsElement::name("name")->floating()` |
| formatData | `function` | null | `TagsElement::name("name")->formatData()` |
| formatLoad | `function` | null | `TagsElement::name("name")->formatLoad()` |
| groupHideEmpty | `boolean` | false | `TagsElement::name("name")->groupHideEmpty()` |
| groupLabel | `string` | label | `TagsElement::name("name")->groupLabel()` |
| groupOptions | `string` | items | `TagsElement::name("name")->groupOptions()` |
| groupSelect | `boolean` | true | `TagsElement::name("name")->groupSelect()` |
| groups | `boolean` | false | `TagsElement::name("name")->groups()` |
| hideSelected | `boolean` | true | `TagsElement::name("name")->hideSelected()` |
| id | `string` | null | `TagsElement::name("name")->id()` |
| info | `string\|object` | null | `TagsElement::name("name")->info()` |
| infoPosition | `string` | right | `TagsElement::name("name")->infoPosition()` |
| inline | `boolean` | false | `TagsElement::name("name")->inline()` |
| inputType | `string` | text | `TagsElement::name("name")->inputType()` |
| items | `object\|array\|function\|string` | {} | `TagsElement::name("name")->items()` |
| label | `string\|object\|function` | null | `TagsElement::name("name")->label()` |
| labelProp | `string` | label | `TagsElement::name("name")->labelProp()` |
| limit | `number` | -1 | `TagsElement::name("name")->limit()` |
| loading | `boolean` | false | `TagsElement::name("name")->loading()` |
| max | `number` | -1 | `TagsElement::name("name")->max()` |
| messages | `object` | {} | `TagsElement::name("name")->messages()` |
| minChars | `number` | 0 | `TagsElement::name("name")->minChars()` |
| name | `string\|number` | undefined | `TagsElement::name("name")->name()` |
| noOptionsText | `string\|object` | locale.multiselect.noOptions | `TagsElement::name("name")->noOptionsText()` |
| noResultsText | `string\|object` | locale.multiselect.noResults | `TagsElement::name("name")->noResultsText()` |
| object | `boolean` | false | `TagsElement::name("name")->object()` |
| openDirection | `string` | bottom | `TagsElement::name("name")->openDirection()` |
| overrideClass | `array\|object\|string\|function` | null | `TagsElement::name("name")->overrideClass()` |
| overrideClasses | `object\|function` | {} | `TagsElement::name("name")->overrideClasses()` |
| placeholder | `string\|object` | null | `TagsElement::name("name")->placeholder()` |
| presets | `array` | [] | `TagsElement::name("name")->presets()` |
| removeClass | `array\|object\|function` | null | `TagsElement::name("name")->removeClass()` |
| removeClasses | `object\|function` | {} | `TagsElement::name("name")->removeClasses()` |
| replaceClass | `object\|function` | null | `TagsElement::name("name")->replaceClass()` |
| replaceClasses | `object\|function` | {} | `TagsElement::name("name")->replaceClasses()` |
| resolveOnLoad | `boolean` | true | `TagsElement::name("name")->resolveOnLoad()` |
| rules | `array\|string\|object` | null | `TagsElement::name("name")->rules()` |
| search | `boolean` | false | `TagsElement::name("name")->search()` |
| searchParam | `string` | query | `TagsElement::name("name")->searchParam()` |
| showOptions | `boolean` | true | `TagsElement::name("name")->showOptions()` |
| size | `string` | undefined | `TagsElement::name("name")->size()` |
| slots | `object` | {} | `TagsElement::name("name")->slots()` |
| strict | `boolean` | true | `TagsElement::name("name")->strict()` |
| submit | `boolean` | true | `TagsElement::name("name")->submit()` |
| templates | `object` | {} | `TagsElement::name("name")->templates()` |
| trackBy | `string\|array` | label | `TagsElement::name("name")->trackBy()` |
| valueProp | `string` | value | `TagsElement::name("name")->valueProp()` |
| view | `string` | undefined | `TagsElement::name("name")->view()` |
| views | `object` | {} | `TagsElement::name("name")->views()` |

---

## ⚡ Events

You can define custom **tagselement ** events <a href="https://vueform.com/reference/tags-element#events" target="_blank">Documentation</a> directly in PHP using the `->events()` method.

Each event value refers to a JavaScript function name.

These functions must be defined inside:

```javascript
public/vueform-laravel/vueform-custom.js
```

This allows you to extend or override default behaviors for your generated VueForm components

| Name | Parameters | Description |
| --- | --- | --- |
| `reset` | - {component} el$ - the element's component | Triggered when the input is resetted. |
| `clear` | - {component} el$ - the element's component | Triggered when the value is cleared. |
| `change` | - {string} newValue - the new value<br>- {string} oldValue - the old value<br>- {component} el$ - the element's component | Triggered when the element's value is changed. |
| `select` | - {object} option - the selected option<br>- {component} el$ - the element's component | Triggered when an option is selected. |
| `deselect` | - {object} option - the deselected option<br>- {component} el$ - the element's component | Triggered when an option is deselected. |
| `search-change` | - {string|null} searchQuery - the search value<br>- {component} el$ - the element's component | Triggered when the search query changes when using search: true. |
| `open` | - {component} el$ - the element's component | Triggered when the dropdown list is opened. |
| `close` | - {component} el$ - the element's component | Triggered when the dropdown list is closed. |
| `tag` | - {string} tag - the tag value<br>- {component} el$ - the element's component | Triggered when a new tag is created when using create: true. |
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
TagsElement::name('example')
    ->events([
        'reset' => 'handleReset',
        'clear' => 'handleClear',
        'change' => 'handleChange',
        'select' => 'handleSelect',
        'deselect' => 'handleDeselect',
        'search-change' => 'handleSearchChange',
        'open' => 'handleOpen',
        'close' => 'handleClose',
        'tag' => 'handleTag',
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
function handleTag(tag, el$) {
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

The following slots <a href="https://vueform.com/reference/tags-element#slots" target="_blank">Documentation</a> are available for this element:

| Name | Scope | Description |
| --- | --- | --- |
| `tag` | - {component} el$ - the element's component<br>- {object} option - the option object<br>- {boolean} disabled - whether the option is disabled<br>- {function} handleTagRemove - removes the tag from the selected options | Replaces the default tag template. |
| `option` | - {component} el$ - the element's component<br>- {object} option - the option object<br>- {string|null} search - the current value of search input | Replaces the default option template. |
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
| `before` | - {component} el$ - the element's component | Renders an ElementText component before the tags input. |
| `between` | - {component} el$ - the element's component | Renders an ElementText component after the tags input and before description. |
| `after` | - {component} el$ - the element's component | Renders an ElementText component after the description and error. |

