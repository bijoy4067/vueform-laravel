# ListElementForm

---

## 🧱 Import Class

```php
use LaravelVueForm\Abstracts\VueFormBuilder;
use LaravelVueForm\Elements\Fields\TextElement;
use LaravelVueForm\Elements\Structure\GroupElement;
use LaravelVueForm\Elements\Structure\ListElement;
```

---

## 🧩 Example

```php
class ListElementForm extends VueFormBuilder
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
        ];
    }
}
```
