# ButtonElementForm

**Class:** `ButtonElementForm`

**Namespace:**  
`App\VueForm\Static\ButtonElementForm`

---

## 🧱 Imports

```php
use LaravelVueForm\Abstracts\VueFormBuilder;
use LaravelVueForm\Elements\Static\ButtonElement;
```

---

## 🧩 Class

```php
class ButtonElementForm extends VueFormBuilder
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
            ButtonElement::submitButton()
        ];
    }
}
```
