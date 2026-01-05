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
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Static\ButtonElement;
use VueFormLaravel\Elements\Structure\GridElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class GridElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
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
            ]);
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

| Name            | Data Type                         | Default | Example                                        |
| --------------- | --------------------------------- | ------- | ---------------------------------------------- |
| addClass        | `array\|object\|string\|function` | null    | `GridElement::name("name")->addClass()`        |
| addClasses      | `object\|function`                | null    | `GridElement::name("name")->addClasses()`      |
| after           | `object\|string\|number`          | null    | `GridElement::name("name")->after()`           |
| align           | `string`                          | null    | `GridElement::name("name")->align()`           |
| before          | `object\|string\|number`          | null    | `GridElement::name("name")->before()`          |
| between         | `object\|string\|number`          | null    | `GridElement::name("name")->between()`         |
| colHeader       | `boolean`                         | null    | `GridElement::name("name")->colHeader()`       |
| cols            | `number`                          | null    | `GridElement::name("name")->cols()`            |
| columns         | `object\|string\|number`          | null    | `GridElement::name("name")->columns()`         |
| conditions      | `array`                           | null    | `GridElement::name("name")->conditions()`      |
| default         | `object`                          | null    | `GridElement::name("name")->default()`         |
| description     | `string\|object`                  | null    | `GridElement::name("name")->description()`     |
| displayErrors   | `boolean`                         | null    | `GridElement::name("name")->displayErrors()`   |
| fieldName       | `string\|object`                  | null    | `GridElement::name("name")->fieldName()`       |
| formatData      | `function`                        | null    | `GridElement::name("name")->formatData()`      |
| formatLoad      | `function`                        | null    | `GridElement::name("name")->formatLoad()`      |
| grid            | `array`                           | null    | `GridElement::name("name")->grid()`            |
| id              | `string`                          | null    | `GridElement::name("name")->id()`              |
| info            | `string\|object`                  | null    | `GridElement::name("name")->info()`            |
| infoPosition    | `string`                          | null    | `GridElement::name("name")->infoPosition()`    |
| inline          | `boolean`                         | null    | `GridElement::name("name")->inline()`          |
| label           | `string\|object\|function`        | null    | `GridElement::name("name")->label()`           |
| maxWidth        | `string\|number`                  | null    | `GridElement::name("name")->maxWidth()`        |
| messages        | `object`                          | null    | `GridElement::name("name")->messages()`        |
| minWidth        | `string\|number`                  | null    | `GridElement::name("name")->minWidth()`        |
| name            | `string\|number`                  | null    | `GridElement::name("name")->name()`            |
| overrideClass   | `array\|object\|string\|function` | null    | `GridElement::name("name")->overrideClass()`   |
| overrideClasses | `object\|function`                | null    | `GridElement::name("name")->overrideClasses()` |
| presets         | `array`                           | null    | `GridElement::name("name")->presets()`         |
| removeClass     | `array\|object\|function`         | null    | `GridElement::name("name")->removeClass()`     |
| removeClasses   | `object\|function`                | null    | `GridElement::name("name")->removeClasses()`   |
| replaceClass    | `object\|function`                | null    | `GridElement::name("name")->replaceClass()`    |
| replaceClasses  | `object\|function`                | null    | `GridElement::name("name")->replaceClasses()`  |
| rowHeader       | `boolean`                         | null    | `GridElement::name("name")->rowHeader()`       |
| rows            | `number`                          | null    | `GridElement::name("name")->rows()`            |
| rules           | `array\|string\|object`           | null    | `GridElement::name("name")->rules()`           |
| scrollable      | `boolean`                         | null    | `GridElement::name("name")->scrollable()`      |
| size            | `string`                          | null    | `GridElement::name("name")->size()`            |
| slots           | `object`                          | null    | `GridElement::name("name")->slots()`           |
| submit          | `boolean`                         | null    | `GridElement::name("name")->submit()`          |
| templates       | `object`                          | null    | `GridElement::name("name")->templates()`       |
| valign          | `string`                          | null    | `GridElement::name("name")->valign()`          |
| view            | `string`                          | null    | `GridElement::name("name")->view()`            |
| views           | `object`                          | null    | `GridElement::name("name")->views()`           |
| widths          | `array`                           | null    | `GridElement::name("name")->widths()`          |

---

## ⚙️ Available Static Methods

| Method            | Description                                      |
| ----------------- | ------------------------------------------------ |
| `rowWith1Columns` | Arrange the given data into a single column row. |
| `rowWith2Columns` | Arrange the given data into a two-column row.    |
| `rowWith3Columns` | Arrange the given data into a three-column row.  |
| `rowWith4Columns` | Arrange the given data into a four-column row.   |
| `rowWith6Columns` | Arrange the given data into a six-column row.    |
