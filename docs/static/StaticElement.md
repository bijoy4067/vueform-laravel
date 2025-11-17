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
| `text` | Generates a simple static text block without any HTML tag. |
| `h1` | Renders a bold level-one heading. |
| `h2` | Renders a level-two heading. |
| `h3` | Renders a level-three heading. |
| `h4` | Renders a level-four heading. |
| `p` | Renders a paragraph containing plain text. |
| `blockquote` | Renders a blockquote for quoted content. |
| `a` | Renders a hyperlink with configurable URL and target. |
| `img` | Displays an image with optional alt text, title, and dimensions. |
| `hr` | Renders a visual horizontal divider. |

