# Phone Input Element 

A complete example form demonstrating how to use the PhoneElement field within Laravel VueForm. 

---

## 🧱 Import Class

```php
use LaravelVueForm\Abstracts\VueFormBuilder;
use LaravelVueForm\Elements\Fields\PhoneElement;
```

---

## 🧩 Example

```php
class PhoneElementForm extends VueFormBuilder
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
            PhoneElement::name('phone')
                ->include(['bd'])
                ->unmask(true)
        ];
    }   
}
```
