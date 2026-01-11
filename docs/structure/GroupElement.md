# Group Element 

A comprehensive demonstration of using GroupElement and ListElement in Laravel VueForm. 
      This form showcases nested column layouts, conditional field rendering, tag selection 
      with custom templates, dynamic remote items, and mixed input types. It includes validation, 
      slot customization, static elements like horizontal dividers, and submit button integration. 
      Ideal for developers looking to implement advanced, structured forms with flexible layouts 
      and complex user interactions. <a href="https://vueform.com/reference/group-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\TagsElement;
use VueFormLaravel\Elements\Fields\TextElement;
use VueFormLaravel\Elements\Static\ButtonElement;
use VueFormLaravel\Elements\Static\StaticElement;
use VueFormLaravel\Elements\Structure\GroupElement;
use VueFormLaravel\Elements\Structure\ListElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class GroupElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->ajax(false) // submit on page
            ->schema([
                GroupElement::rowWith4Columns([
                    TextElement::name('first_name'),
                    TagsElement::name('category')
                        ->type('tags')
                        ->rules('required')
                        ->closeOnSelect(false)
                        // ->inputType('search')
                        ->autocomplete('off')
                        ->limit(5)
                        ->rules('required')
                        ->conditions([
                            ['first_name', 'not_empty']
                        ])
                        // ->columns([
                        //     'container' => 12,
                        //     'wrapper' => 6
                        // ])
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
                            'before' => '<h1 style="color: blue;"> Please select categories cc</h1>',
                        ]),
                    TagsElement::name('tags')
                        ->type('tags')
                        ->closeOnSelect(false)
                        ->inputType('search')
                        ->autocomplete('off')
                        ->limit(5)
                        ->items('http://127.0.0.1:8000/tags/json')
                        ->max(5)
                        // ->rules('required')
                        ->events([
                            'select' => 'aaaa',
                        ]),
                    TextElement::name('search'),
                    TextElement::name('number')->inputType('number'),
                ]),
                ListElement::schema([
                    TextElement::name('item_name')
                        ->label('Item Name')
                    // ->rules('required'),
                ]),
                StaticElement::hr(),
                TagsElement::name('rating')
                    ->type('tags')
                    ->rules('required|min:1|max:5')
                    ->closeOnSelect(false)
                    ->inputType('search')
                    ->autocomplete('off')
                    ->limit(5)
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
            ]) // form elements
            ->showSuccessAlert(); // show success toaster alert
    }

    public static function validatedFormData($request)
    {
        return response()->json(
            [
                'status' => 'success'
            ]
        );
    }

    // public static function formData($request)
    // {
    //     $request->validate([
    //         'category' => 'required',
    //         'first_name' => 'required',
    //         'rating' => 'required',
    //     ]);

    //     return response()->json([
    //         'status' => 'success'
    //     ]);
    // }
}
```
---

## ⚙️ Allowed Attributes

| Name | Data Type | Default | Example |
| ---- | ---- | ---- | ---- |
| addClass | `array\|object\|string\|function` | null | `GroupElement::name("name")->addClass()` |
| addClasses | `object\|function` | null | `GroupElement::name("name")->addClasses()` |
| after | `object\|string\|number` | null | `GroupElement::name("name")->after()` |
| before | `object\|string\|number` | null | `GroupElement::name("name")->before()` |
| between | `object\|string\|number` | null | `GroupElement::name("name")->between()` |
| columns | `object\|string\|number` | null | `GroupElement::name("name")->columns()` |
| conditions | `array` | null | `GroupElement::name("name")->conditions()` |
| default | `object` | null | `GroupElement::name("name")->default()` |
| description | `string\|object` | null | `GroupElement::name("name")->description()` |
| displayErrors | `boolean` | null | `GroupElement::name("name")->displayErrors()` |
| fieldName | `string\|object` | null | `GroupElement::name("name")->fieldName()` |
| formatData | `function` | null | `GroupElement::name("name")->formatData()` |
| formatLoad | `function` | null | `GroupElement::name("name")->formatLoad()` |
| id | `string` | null | `GroupElement::name("name")->id()` |
| info | `string\|object` | null | `GroupElement::name("name")->info()` |
| infoPosition | `string` | null | `GroupElement::name("name")->infoPosition()` |
| inline | `boolean` | null | `GroupElement::name("name")->inline()` |
| label | `string\|object\|function` | null | `GroupElement::name("name")->label()` |
| messages | `object` | null | `GroupElement::name("name")->messages()` |
| name | `string\|number` | null | `GroupElement::name("name")->name()` |
| overrideClass | `array\|object\|string\|function` | null | `GroupElement::name("name")->overrideClass()` |
| overrideClasses | `object\|function` | null | `GroupElement::name("name")->overrideClasses()` |
| presets | `array` | null | `GroupElement::name("name")->presets()` |
| removeClass | `array\|object\|function` | null | `GroupElement::name("name")->removeClass()` |
| removeClasses | `object\|function` | null | `GroupElement::name("name")->removeClasses()` |
| replaceClass | `object\|function` | null | `GroupElement::name("name")->replaceClass()` |
| replaceClasses | `object\|function` | null | `GroupElement::name("name")->replaceClasses()` |
| rules | `array\|string\|object` | null | `GroupElement::name("name")->rules()` |
| schema | `object` | null | `GroupElement::name("name")->schema()` |
| size | `string` | null | `GroupElement::name("name")->size()` |
| slots | `object` | null | `GroupElement::name("name")->slots()` |
| submit | `boolean` | null | `GroupElement::name("name")->submit()` |
| templates | `object` | null | `GroupElement::name("name")->templates()` |
| view | `string` | null | `GroupElement::name("name")->view()` |
| views | `object` | null | `GroupElement::name("name")->views()` |

---

## ⚡ Events

The following events <a href="https://vueform.com/reference/group-element#events" target="_blank">Documentation</a> are available for this element:

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

### 🔔 Example Usage of PHP

```php
GroupElement::name('example')
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
| `rowWith1Columns` | Generates a VueForm Group Element where each item occupies a full row (1 column per row). |
| `rowWith2Columns` | Generates a VueForm Group Element with 2 items per row. |
| `rowWith3Columns` | Generates a VueForm Group Element with 3 items per row. |
| `rowWith4Columns` | Generates a VueForm Group Element with 4 items per row and a unique random name. |
| `rowWith6Columns` | Generates a VueForm Group Element with 6 items per row. |

