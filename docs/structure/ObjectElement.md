# Group Element 

A comprehensive demonstration of using ObjectElement and ListElement in Laravel VueForm. 
      This form showcases nested column layouts, conditional field rendering, tag selection 
      with custom templates, dynamic remote items, and mixed input types. It includes validation, 
      slot customization, static elements like horizontal dividers, and submit button integration. 
      Ideal for developers looking to implement advanced, structured forms with flexible layouts 
      and complex user interactions. <a href="https://vueform.com/reference/object-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\TagsElement;
use VueFormLaravel\Elements\Fields\TextElement;
use VueFormLaravel\Elements\Static\ButtonElement;
use VueFormLaravel\Elements\Static\StaticElement;
use VueFormLaravel\Elements\Structure\ObjectElement;
use VueFormLaravel\Elements\Structure\ListElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class ObjectElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                ObjectElement::rowWith4Columns([
                    ObjectElement::rowWith4Columns([
                        TextElement::name('first_name'),
                        TextElement::name('first_namex')
                    ]),
                ]),
                ObjectElement::rowWith4Columns([
                    TagsElement::name('category')
                        ->type('tags')
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
                        ->items('http://localhost:8000/tags/json')
                        ->max(5)
                        ->rules('required')
                        ->events([
                            'select' => 'aaaa',
                        ]),
                    TextElement::name('search'),
                    TextElement::name('number')->inputType('number'),
                ]),
                ListElement::schema([
                    TextElement::name('item_name')
                        ->label('Item Name')
                        ->rules('required'),
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
                    ->events([
                        'select' => 'aaaa',
                    ]),
                ButtonElement::submitButton()
            ]);
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

| Name | Data Type | Default | Example |
| ---- | ---- | ---- | ---- |
| addClass | `array\|object\|string\|function` | null | `ObjectElement::name("name")->addClass()` |
| addClasses | `object\|function` | null | `ObjectElement::name("name")->addClasses()` |
| after | `object\|string\|number` | null | `ObjectElement::name("name")->after()` |
| before | `object\|string\|number` | null | `ObjectElement::name("name")->before()` |
| between | `object\|string\|number` | null | `ObjectElement::name("name")->between()` |
| columns | `object\|string\|number` | null | `ObjectElement::name("name")->columns()` |
| conditions | `array` | null | `ObjectElement::name("name")->conditions()` |
| default | `object` | null | `ObjectElement::name("name")->default()` |
| description | `string\|object` | null | `ObjectElement::name("name")->description()` |
| displayErrors | `boolean` | null | `ObjectElement::name("name")->displayErrors()` |
| embed | `boolean` | null | `ObjectElement::name("name")->embed()` |
| fieldName | `string\|object` | null | `ObjectElement::name("name")->fieldName()` |
| formatData | `function` | null | `ObjectElement::name("name")->formatData()` |
| formatLoad | `function` | null | `ObjectElement::name("name")->formatLoad()` |
| id | `string` | null | `ObjectElement::name("name")->id()` |
| info | `string\|object` | null | `ObjectElement::name("name")->info()` |
| infoPosition | `string` | null | `ObjectElement::name("name")->infoPosition()` |
| inline | `boolean` | null | `ObjectElement::name("name")->inline()` |
| label | `string\|object\|function` | null | `ObjectElement::name("name")->label()` |
| messages | `object` | null | `ObjectElement::name("name")->messages()` |
| name | `string\|number` | null | `ObjectElement::name("name")->name()` |
| overrideClass | `array\|object\|string\|function` | null | `ObjectElement::name("name")->overrideClass()` |
| overrideClasses | `object\|function` | null | `ObjectElement::name("name")->overrideClasses()` |
| presets | `array` | null | `ObjectElement::name("name")->presets()` |
| removeClass | `array\|object\|function` | null | `ObjectElement::name("name")->removeClass()` |
| removeClasses | `object\|function` | null | `ObjectElement::name("name")->removeClasses()` |
| replaceClass | `object\|function` | null | `ObjectElement::name("name")->replaceClass()` |
| replaceClasses | `object\|function` | null | `ObjectElement::name("name")->replaceClasses()` |
| rules | `array\|string\|object` | null | `ObjectElement::name("name")->rules()` |
| schema | `object` | null | `ObjectElement::name("name")->schema()` |
| size | `string` | null | `ObjectElement::name("name")->size()` |
| slots | `object` | null | `ObjectElement::name("name")->slots()` |
| submit | `boolean` | null | `ObjectElement::name("name")->submit()` |
| templates | `object` | null | `ObjectElement::name("name")->templates()` |
| view | `string` | null | `ObjectElement::name("name")->view()` |
| views | `object` | null | `ObjectElement::name("name")->views()` |

---

## ⚙️ Available Static Methods

| Method | Description |
| --- | --- |
| `rowWith1Columns` | This method generates a group element in VueForm with each item occupying a full row (1 column). |
| `rowWith2Columns` | This method generates a group element in VueForm with 2 items per row. |
| `rowWith3Columns` | This method generates a group element in VueForm with 3 items per row. |
| `rowWith4Columns` | This method generates a group element in VueForm with 4 items per row. |
| `rowWith6Columns` | This method generates a group element in VueForm with 6 items per row. |

