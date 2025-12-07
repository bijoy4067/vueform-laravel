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
use LaravelVueForm\Abstracts\VueFormBuilder;
use LaravelVueForm\Elements\Fields\TagsElement;
use LaravelVueForm\Elements\Fields\TextElement;
use LaravelVueForm\Elements\Static\ButtonElement;
use LaravelVueForm\Elements\Static\StaticElement;
use LaravelVueForm\Elements\Structure\GroupElement;
use LaravelVueForm\Elements\Structure\ListElement;
use LaravelVueForm\Elements\Vueform;
```

---

## 🧩 Example

```php
class GroupElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::name('group-element-form')
            ->ajax(false) // submit on page
            ->schema([
                GroupElement::rowWith4Columns([
                    TextElement::name('first_name'),
                        // ->rules('required'),
                    TagsElement::name('category')
                        ->type('tags')
                        ->closeOnSelect(false)
                        // ->inputType('search')
                        ->autocomplete('off')
                        ->limit(5)
                        // ->rules('required')
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
                        ->event([
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
                        ->items('http://localhost:8000/tags/json')
                        ->max(5)
                        // ->rules('required')
                        ->event([
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
                    ->event([
                        'select' => 'aaaa',
                    ]),
                ButtonElement::submitButton()
            ]) // form elements
            ->showSuccessAlert(); // show success toaster alert
    }

    public static function formData($request)
    {
        $request->validate([
            'category' => 'required',
            'first_name' => 'required',
            'rating' => 'required',
        ]);

        return response()->json([
            'status' => 'success'
        ]);
    }
}
```
---

## ⚙️ Allowed Attributes

| Name | Data Type |
| --- | --- |
| `addClass` | array|object|string|function |
| `addClasses` | object|function |
| `after` | object|string|number |
| `before` | object|string|number |
| `between` | object|string|number |
| `columns` | object|string|number |
| `conditions` | array |
| `default` | object |
| `description` | string|object |
| `displayErrors` | boolean |
| `fieldName` | string|object |
| `formatData` | function |
| `formatLoad` | function |
| `id` | string |
| `info` | string|object |
| `infoPosition` | string |
| `inline` | boolean |
| `label` | string|object|function |
| `messages` | object |
| `name` | string|number |
| `overrideClass` | array|object|string|function |
| `overrideClasses` | object|function |
| `presets` | array |
| `removeClass` | array|object|function |
| `removeClasses` | object|function |
| `replaceClass` | object|function |
| `replaceClasses` | object|function |
| `rules` | array|string|object |
| `schema` | object |
| `size` | string |
| `slots` | object |
| `submit` | boolean |
| `templates` | object |
| `view` | string |
| `views` | object |

---

## ⚙️ Available Static Methods

| Method | Description |
| --- | --- |
| `rowWith1Columns` | Generates a VueForm Group Element where each item occupies a full row (1 column per row). |
| `rowWith2Columns` | Generates a VueForm Group Element with 2 items per row. |
| `rowWith3Columns` | Generates a VueForm Group Element with 3 items per row. |
| `rowWith4Columns` | Generates a VueForm Group Element with 4 items per row and a unique random name. |
| `rowWith6Columns` | Generates a VueForm Group Element with 6 items per row. |

