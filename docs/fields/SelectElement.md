# SelectElement

---

## 🧱 Import Class

```php
use LaravelVueForm\Abstracts\VueFormBuilder;
use LaravelVueForm\Elements\Fields\SelectElement;
use LaravelVueForm\Elements\Static\ButtonElement;
use LaravelVueForm\Elements\Vueform;
```

---

## 🧩 Example

```php
class SelectElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::name('select-element-form')
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
| `canClear` | boolean |
| `canDeselect` | boolean |
| `caret` | boolean |
| `clearOnRefetch` | boolean |
| `clearOnSearch` | boolean |
| `closeOnDeselect` | boolean |
| `closeOnSelect` | boolean |
| `columns` | object|string|number |
| `conditions` | array |
| `create` | boolean |
| `dataKey` | string |
| `default` | string|number|object |
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
| `groups` | boolean |
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
| `messages` | object |
| `minChars` | number |
| `name` | string|number |
| `native` | boolean |
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
| `size` | string |
| `slots` | object |
| `strict` | boolean |
| `submit` | boolean |
| `templates` | object |
| `trackBy` | string|array |
| `truncate` | boolean |
| `valueProp` | string |
| `view` | string |
| `views` | object |

