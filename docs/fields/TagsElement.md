# Tags Input Element 

A fully-featured demonstration of the TagsElement field in Laravel VueForm. 

---

## 🧱 Import Class

```php
use LaravelVueForm\Abstracts\VueFormBuilder;
use LaravelVueForm\Elements\Fields\TagsElement;
use LaravelVueForm\Elements\Fields\TextElement;
use LaravelVueForm\Elements\Static\ButtonElement;
use LaravelVueForm\Elements\Static\StaticElement;
use LaravelVueForm\Elements\Structure\GroupElement;
```

---

## 🧩 Example

```php
class TagsElementForm extends VueFormBuilder
{
    protected static $method = 'post';
    /**
     * Build the form structure.s
     *
     * @return array
     */
    protected function buildForm(): array
    {
        return [
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
                        'select' => 'aaaa',]),
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

        ];
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
