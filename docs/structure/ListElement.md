# List Element 

Demonstrates the use of ListElement in Laravel VueForm for creating repeatable and 
      structured item entries. This form showcases nested layouts with GroupElement, 
      allowing multiple columns and rows inside each list item. Each list entry can 
      include various field types, such as text inputs, and supports validation rules 
      to ensure consistent data entry. Ideal for forms requiring dynamic, repeatable, 
      and organized input sections .[Documentation](https://linktodocumentation) [Documentation](https://vueform.com/reference/list-element)

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
