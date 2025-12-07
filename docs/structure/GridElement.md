# Grid Element 

Demonstrates the use of GridElement in Laravel VueForm to create structured 
      multi-column layouts. This form allows arranging form fields into rows with 
      configurable column counts (1, 2, 3, 4, or 6 columns). Each row can contain 
      different input types, such as text, select, date, and slider elements, enabling 
      clean and organized form designs. Ideal for forms that require responsive and 
      visually structured data entry. <a href="https://vueform.com/reference/grid-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use LaravelVueForm\Abstracts\VueFormBuilder;
use LaravelVueForm\Elements\Static\ButtonElement;
use LaravelVueForm\Elements\Static\StaticElement;
use LaravelVueForm\Elements\Structure\GridElement;
```

---

## 🧩 Example

```php
class GridElementForm extends VueFormBuilder
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
            GridElement::rowWith1Columns([
                ['type' => 'text', 'name' => 'a', 'placeholder' => 'A'],
                ['type' => 'select', 'items' => [1, 2, 3], 'name' => 'b', 'placeholder' => 'B'],
                ['type' => 'date', 'name' => 'c', 'placeholder' => 'C'],
                ['type' => 'slider', 'name' => 'd']
            ]),
            GridElement::rowWith3Columns([
                ['type' => 'text', 'name' => 'e', 'placeholder' => 'E'],
                ['type' => 'select', 'items' => [1, 2, 3], 'name' => 'f', 'placeholder' => 'F'],
                ['type' => 'date', 'name' => 'g', 'placeholder' => 'G'],
                ['type' => 'slider', 'name' => 'h']
            ]),
            ButtonElement::submitButton()
        ];
    }

    public static function formData($request)
    {
        $request->validate([
            'e' => 'required'
        ]);

        return response()->json([
            'status' => 'success'
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
| `colHeader` | boolean |
| `cols` | number |
| `columns` | object|string|number |
| `conditions` | array |
| `default` | object |
| `description` | string|object |
| `displayErrors` | boolean |
| `fieldName` | string|object |
| `formatData` | function |
| `formatLoad` | function |
| `grid` | array |
| `id` | string |
| `info` | string|object |
| `infoPosition` | string |
| `inline` | boolean |
| `label` | string|object|function |
| `maxWidth` | string|number |
| `messages` | object |
| `minWidth` | string|number |
| `name` | string|number |
| `overrideClass` | array|object|string|function |
| `overrideClasses` | object|function |
| `presets` | array |
| `removeClass` | array|object|function |
| `removeClasses` | object|function |
| `replaceClass` | object|function |
| `replaceClasses` | object|function |
| `rowHeader` | boolean |
| `rows` | number |
| `rules` | array|string|object |
| `scrollable` | boolean |
| `size` | string |
| `slots` | object |
| `submit` | boolean |
| `templates` | object |
| `valign` | string |
| `view` | string |
| `views` | object |
| `widths` | array |

---

## ⚙️ Available Static Methods

| Method | Description |
| --- | --- |
| `rowWith1Columns` | Arrange the given data into a single column row. |
| `rowWith2Columns` | Arrange the given data into a two-column row. |
| `rowWith3Columns` | Arrange the given data into a three-column row. |
| `rowWith4Columns` | Arrange the given data into a four-column row. |
| `rowWith6Columns` | Arrange the given data into a six-column row. |

