# ListElement

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

## ⚙️ Available Static Methods

| Method | Description |
| --- | --- |
| `schema` | This method generates a List Element in VueForm, where each item in the provided |

