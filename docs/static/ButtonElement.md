# Button Element 

A minimal example demonstrating the ButtonElement component within Laravel VueForm. 
      This form focuses on rendering a standard submit button using the built-in 
      submitButton() helper. Ideal for showcasing how simple static UI elements can be 
      integrated into a form and how button elements interact with form submission behavior. <a href="https://vueform.com/reference/button-element" target="_blank">Documentation</a>

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

## ⚙️ Allowed Attributes

| Name | Data Type |
| --- | --- |
| `addClass` | array|object|string|function |
| `addClasses` | object|function |
| `after` | object|string|number |
| `align` | string |
| `before` | object|string|number |
| `between` | object|string|number |
| `buttonClass` | string|array|object |
| `buttonLabel` | string|object|function |
| `buttonType` | string |
| `columns` | object|string|number |
| `conditions` | array |
| `danger` | boolean |
| `description` | string|object |
| `disabled` | boolean|function|array|object |
| `full` | boolean |
| `href` | string |
| `id` | string |
| `info` | string|object |
| `infoPosition` | string |
| `inline` | boolean |
| `label` | string|object|function |
| `loading` | function|boolean |
| `name` | string|number |
| `overrideClass` | array|object|string|function |
| `overrideClasses` | object|function |
| `presets` | array |
| `removeClass` | array|object|function |
| `removeClasses` | object|function |
| `replaceClass` | object|function |
| `replaceClasses` | object|function |
| `resets` | boolean |
| `secondary` | boolean |
| `size` | string |
| `slots` | object |
| `submits` | boolean |
| `target` | string |
| `templates` | object |
| `view` | string |
| `views` | object |

---

## ⚙️ Available Static Methods

| Method | Description |
| --- | --- |
| `submitButton` | Create a form submit button |

