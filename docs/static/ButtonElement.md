# ButtonElement

---

## 🧱 Import Class

```php
use LaravelVueForm\Abstracts\VueFormBuilder;
use LaravelVueForm\Elements\Static\ButtonElement;
use LaravelVueForm\Elements\Vueform;
```

---

## 🧩 Example

```php
class ButtonElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::name('button-element-form')
            ->schema([
                ButtonElement::submitButton()
            ]);
    }
}
```
---

## ⚙️ Available Static Methods

| Method | Description |
| --- | --- |
| `submitButton` | Create a form submit button |

