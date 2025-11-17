# Phone Input Element 

A complete example form demonstrating how to use the PhoneElement field within Laravel VueForm. 
      This form showcases international phone number handling with country filtering, automatic 
      formatting, and optional unmasking for raw value submission — ideal for forms that require 
      validated and standardized phone input. <a href="https://vueform.com/reference/phone-input-element" target="_blank">Documentation</a>

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
