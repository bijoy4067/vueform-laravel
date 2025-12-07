# Tags Input Element 

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
use LaravelVueForm\Abstracts\VueFormBuilder;
use LaravelVueForm\Elements\Fields\TagsElement;
use LaravelVueForm\Elements\Fields\TextElement;
use LaravelVueForm\Elements\Static\ButtonElement;
use LaravelVueForm\Elements\Static\StaticElement;
use LaravelVueForm\Elements\Structure\GroupElement;
use LaravelVueForm\Elements\Vueform;
```

---

## 🧩 Example

```php
class TagsElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::name('tags-element-form')
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
                        ->label('tagsxx')
                        ->inputType('search')
                        ->autocomplete('off')
                        ->limit(5)
                        ->items('http://localhost:8000/tags/json')
                        ->max(5)
                        ->rules('required')
                        ->event([
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
                    ->event([
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

| Name | Data Type |
| --- | --- |
| `addClass` | array|object|string|function |
| `addClasses` | object|function |
| `addOptionOn` | array |
| `after` | object|string|number |
| `allowAbsent` | boolean |
| `appendNewOption` | boolean |
| `appendTo` | string |
| `appendToBody` | boolean |
| `attrs` | object |
| `autocomplete` | string |
| `before` | object|string|number |
| `between` | object|string|number |
| `breakTags` | boolean |
| `canClear` | boolean |
| `caret` | boolean |
| `clearOnRefetch` | boolean |
| `clearOnSearch` | boolean |
| `clearOnSelect` | boolean |
| `closeOnDeselect` | boolean |
| `closeOnSelect` | boolean |
| `columns` | object|string|number |
| `conditions` | array |
| `create` | boolean |
| `dataKey` | string |
| `default` | array |
| `delay` | number |
| `description` | string|object |
| `disabled` | boolean|function|array|object |
| `displayErrors` | boolean |
| `extendOptions` | object |
| `fieldName` | string|object |
| `filterResults` | boolean |
| `floating` | string|boolean|object |
| `formatData` | function |
| `formatLoad` | function |
| `groupHideEmpty` | boolean |
| `groupLabel` | string |
| `groupOptions` | string |
| `groupSelect` | boolean |
| `groups` | boolean |
| `hideSelected` | boolean |
| `id` | string |
| `info` | string|object |
| `infoPosition` | string |
| `inline` | boolean |
| `inputType` | string |
| `items` | object|array|function|string |
| `label` | string|object|function |
| `labelProp` | string |
| `limit` | number |
| `loading` | boolean |
| `max` | number |
| `messages` | object |
| `minChars` | number |
| `name` | string|number |
| `noOptionsText` | string|object |
| `noResultsText` | string|object |
| `object` | boolean |
| `openDirection` | string |
| `overrideClass` | array|object|string|function |
| `overrideClasses` | object|function |
| `placeholder` | string|object |
| `presets` | array |
| `removeClass` | array|object|function |
| `removeClasses` | object|function |
| `replaceClass` | object|function |
| `replaceClasses` | object|function |
| `resolveOnLoad` | boolean |
| `rules` | array|string|object |
| `search` | boolean |
| `searchParam` | string |
| `showOptions` | boolean |
| `size` | string |
| `slots` | object |
| `strict` | boolean |
| `submit` | boolean |
| `templates` | object |
| `trackBy` | string|array |
| `type` | string |
| `valueProp` | string |
| `view` | string |
| `views` | object |

