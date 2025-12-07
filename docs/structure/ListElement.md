# List Element 

Demonstrates the use of ListElement in Laravel VueForm for creating repeatable and 
      structured item entries. This form showcases nested layouts with GroupElement, 
      allowing multiple columns and rows inside each list item. Each list entry can 
      include various field types, such as text inputs, and supports validation rules 
      to ensure consistent data entry. Ideal for forms requiring dynamic, repeatable, 
      and organized input sections . <a href="https://vueform.com/reference/list-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use LaravelVueForm\Abstracts\VueFormBuilder;
use LaravelVueForm\Elements\Fields\TextElement;
use LaravelVueForm\Elements\Structure\GroupElement;
use LaravelVueForm\Elements\Structure\ListElement;
use LaravelVueForm\Elements\Vueform;
```

---

## 🧩 Example

```php
class ListElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::name('list-element-from')
            ->schema([
                ListElement::schema([
                    TextElement::name('item_name')
                        ->label('Item Name')
                        ->rules('required'),
                    GroupElement::rowWith4Columns([
                        GroupElement::rowWith4Columns([
                            TextElement::name('first_name'),
                            TextElement::name('first_name_old')
                        ]),
                    ]),
                ])
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
| `addText` | string |
| `after` | object|string|number |
| `before` | object|string|number |
| `between` | object|string|number |
| `columns` | object|string|number |
| `conditions` | array |
| `controls` | object |
| `default` | array |
| `description` | string|object |
| `disabled` | boolean|function|array|object |
| `displayErrors` | boolean |
| `element` | object |
| `fieldName` | string|object |
| `formatData` | function |
| `formatLoad` | function |
| `id` | string |
| `info` | string|object |
| `infoPosition` | string |
| `initial` | number |
| `inline` | boolean |
| `label` | string|object|function |
| `max` | number |
| `messages` | object |
| `min` | number |
| `name` | string|number |
| `object` | object |
| `order` | string |
| `orderBy` | string |
| `overrideClass` | array|object|string|function |
| `overrideClasses` | object|function |
| `presets` | array |
| `removeClass` | array|object|function |
| `removeClasses` | object|function |
| `replaceClass` | object|function |
| `replaceClasses` | object|function |
| `rules` | array|string|object |
| `size` | string |
| `slots` | object |
| `sort` | boolean |
| `storeOrder` | string |
| `submit` | boolean |
| `templates` | object |
| `view` | string |
| `views` | object |

---

## ⚙️ Available Static Methods

| Method | Description |
| --- | --- |
| `schema` | This method generates a List Element in VueForm, where each item in the provided |

