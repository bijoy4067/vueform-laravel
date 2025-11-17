# Button Element 

A minimal example demonstrating the ButtonElement component within Laravel VueForm. 
      This form focuses on rendering a standard submit button using the built-in 
      submitButton() helper. Ideal for showcasing how simple static UI elements can be 
      integrated into a form and how button elements interact with form submission behavior. [Documentation](https://vueform.com/reference/button-element)

---

## 🧱 Import Class

```php
use LaravelVueForm\Abstracts\VueFormBuilder;
use LaravelVueForm\Elements\Static\ButtonElement;
```

---

## 🧩 Example

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
---

## ⚙️ Available Static Methods

| Method | Description |
| --- | --- |
| `submitButton` | Create a form submit button |

