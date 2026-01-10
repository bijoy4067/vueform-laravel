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

