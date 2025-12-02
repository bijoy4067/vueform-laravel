# PhoneElement

---

## 🧱 Import Class

```php
use LaravelVueForm\Abstracts\VueFormBuilder;
use LaravelVueForm\Elements\Fields\PhoneElement;
use LaravelVueForm\Elements\Vueform;
```

---

## 🧩 Example

```php
class PhoneElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::name('phone-element-form')
            ->schema([
                PhoneElement::name('phone')
                    ->include(['bd'])
                    ->unmask(true)
            ]);
    }
}
```
