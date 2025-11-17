# PhoneElementForm

**Class:** `PhoneElementForm`

**Namespace:**  
`App\VueForm\Form\PhoneElementForm`

---

## 🧱 Imports

```php
use LaravelVueForm\Abstracts\VueFormBuilder;
use LaravelVueForm\Elements\Fields\PhoneElement;
```

---

## 🧩 Class

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
