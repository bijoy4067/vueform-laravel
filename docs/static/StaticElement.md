# Static Element 

A demonstration of static UI components available in Laravel VueForm, including 
      plain text, headings, horizontal rules, and images. This example showcases how 
      StaticElement can be used to insert non-interactive content into forms, making it 
      ideal for creating informational sections, visual dividers, instructional text, 
      and branding elements within complex form layouts. <a href="https://vueform.com/reference/static-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use LaravelVueForm\Abstracts\VueFormBuilder;
use LaravelVueForm\Elements\Static\StaticElement;
use LaravelVueForm\Elements\Vueform;
```

---

## 🧩 Example

```php
class StaticElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::name('static-element-form')
            ->schema([
                StaticElement::text('asdf'),
                StaticElement::h1('asdf'),
                StaticElement::hr(),
                StaticElement::img(
                    src: 'https://vueform.com/images/logo.svg',
                    height: 40,
                    width: 570
                )

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
| `allowHtml` | boolean |
| `alt` | string |
| `attrs` | object |
| `before` | object|string|number |
| `between` | object|string|number |
| `bottom` | string|number |
| `columns` | object|string|number |
| `conditions` | array |
| `content` | string|object|function |
| `description` | string|object |
| `expressions` | boolean |
| `height` | string |
| `href` | string |
| `id` | string |
| `info` | string|object |
| `infoPosition` | string |
| `inline` | boolean |
| `label` | string|object|function |
| `name` | string|number |
| `overrideClass` | array|object|string|function |
| `overrideClasses` | object|function |
| `presets` | array |
| `removeClass` | array|object|function |
| `removeClasses` | object|function |
| `replaceClass` | object|function |
| `replaceClasses` | object|function |
| `size` | string |
| `slots` | object |
| `src` | string |
| `tag` | string |
| `target` | string |
| `templates` | object |
| `title` | string |
| `top` | string|number |
| `view` | string |
| `views` | object |
| `width` | string |
| `wrap` | boolean |

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

