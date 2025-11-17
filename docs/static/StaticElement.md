# StaticElement

---

## 🧱 Import Class

```php
use LaravelVueForm\Abstracts\VueFormBuilder;
use LaravelVueForm\Elements\Static\StaticElement;
```

---

## 🧩 Example

```php
class StaticElementForm extends VueFormBuilder
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
            StaticElement::text('asdf'),
            StaticElement::h1('asdf'),
            StaticElement::hr(),
            StaticElement::img(
                src: 'https://vueform.com/images/logo.svg',
                height: 40,
                width: 570
            )
                
        ];
    }
}
```
---

## ⚙️ Available Static Methods

| Method | Description |
| --- | --- |
| `text` |  |
| `h1` |  |
| `h2` |  |
| `h3` |  |
| `h4` |  |
| `p` |  |
| `blockquote` |  |
| `a` |  |
| `img` |  |
| `hr` |  |

