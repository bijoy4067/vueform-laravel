# Static Element 

A demonstration of static UI components available in Laravel VueForm, including 
      plain text, headings, horizontal rules, and images. This example showcases how 
      StaticElement can be used to insert non-interactive content into forms, making it 
      ideal for creating informational sections, visual dividers, instructional text, 
      and branding elements within complex form layouts. <a href="https://vueform.com/reference/static-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Static\StaticElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class StaticElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
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

| Name | Data Type | Default | Example |
| ---- | ---- | ---- | ---- |
| addClass | `array\|object\|string\|function` | null | `StaticElement::name("name")->addClass()` |
| addClasses | `object\|function` | null | `StaticElement::name("name")->addClasses()` |
| after | `object\|string\|number` | null | `StaticElement::name("name")->after()` |
| align | `string` | null | `StaticElement::name("name")->align()` |
| allowHtml | `boolean` | null | `StaticElement::name("name")->allowHtml()` |
| alt | `string` | null | `StaticElement::name("name")->alt()` |
| attrs | `object` | null | `StaticElement::name("name")->attrs()` |
| before | `object\|string\|number` | null | `StaticElement::name("name")->before()` |
| between | `object\|string\|number` | null | `StaticElement::name("name")->between()` |
| bottom | `string\|number` | null | `StaticElement::name("name")->bottom()` |
| columns | `object\|string\|number` | null | `StaticElement::name("name")->columns()` |
| conditions | `array` | null | `StaticElement::name("name")->conditions()` |
| content | `string\|object\|function` | null | `StaticElement::name("name")->content()` |
| description | `string\|object` | null | `StaticElement::name("name")->description()` |
| expressions | `boolean` | null | `StaticElement::name("name")->expressions()` |
| height | `string\|number` | null | `StaticElement::name("name")->height()` |
| href | `string` | null | `StaticElement::name("name")->href()` |
| id | `string` | null | `StaticElement::name("name")->id()` |
| info | `string\|object` | null | `StaticElement::name("name")->info()` |
| infoPosition | `string` | null | `StaticElement::name("name")->infoPosition()` |
| inline | `boolean` | null | `StaticElement::name("name")->inline()` |
| label | `string\|object\|function` | null | `StaticElement::name("name")->label()` |
| name | `string\|number` | null | `StaticElement::name("name")->name()` |
| overrideClass | `array\|object\|string\|function` | null | `StaticElement::name("name")->overrideClass()` |
| overrideClasses | `object\|function` | null | `StaticElement::name("name")->overrideClasses()` |
| presets | `array` | null | `StaticElement::name("name")->presets()` |
| removeClass | `array\|object\|function` | null | `StaticElement::name("name")->removeClass()` |
| removeClasses | `object\|function` | null | `StaticElement::name("name")->removeClasses()` |
| replaceClass | `object\|function` | null | `StaticElement::name("name")->replaceClass()` |
| replaceClasses | `object\|function` | null | `StaticElement::name("name")->replaceClasses()` |
| size | `string` | null | `StaticElement::name("name")->size()` |
| slots | `object` | null | `StaticElement::name("name")->slots()` |
| src | `string` | null | `StaticElement::name("name")->src()` |
| tag | `string` | null | `StaticElement::name("name")->tag()` |
| target | `string` | null | `StaticElement::name("name")->target()` |
| templates | `object` | null | `StaticElement::name("name")->templates()` |
| title | `string` | null | `StaticElement::name("name")->title()` |
| top | `string\|number` | null | `StaticElement::name("name")->top()` |
| view | `string` | null | `StaticElement::name("name")->view()` |
| views | `object` | null | `StaticElement::name("name")->views()` |
| width | `string\|number` | null | `StaticElement::name("name")->width()` |
| wrap | `boolean` | null | `StaticElement::name("name")->wrap()` |

---

## ⚡ Events

| Name | Parameters | Description |
| --- | --- | --- |
| `beforeCreate` | - {component} el$ - the element's component | Triggered in beforeCreate hook. |
| `created` | - {component} el$ - the element's component | Triggered in created hook. |
| `beforeMount` | - {component} el$ - the element's component | Triggered in beforeMount hook. |
| `mounted` | - {component} el$ - the element's component | Triggered in mounted hook. |
| `beforeUpdate` | - {component} el$ - the element's component | Triggered in beforeUpdate hook. |
| `updated` | - {component} el$ - the element's component | Triggered in updated hook. |
| `beforeUnmount` | - {component} el$ - the element's component | Triggered in beforeUnmount (or beforeDestroy in Vue 2) hook. |
| `unmounted` | - {component} el$ - the element's component | Triggered in unmounted (or destroyed in Vue 2) hook. |

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

