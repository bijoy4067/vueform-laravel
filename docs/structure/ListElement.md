# List Element

Demonstrates the use of ListElement in Laravel VueForm for creating repeatable and
structured item entries. This form showcases nested layouts with GroupElement,
allowing multiple columns and rows inside each list item. Each list entry can
include various field types, such as text inputs, and supports validation rules
to ensure consistent data entry. Ideal for forms requiring dynamic, repeatable,
and organized input sections . <a href="https://vueform.com/reference/list-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\TextElement;
use VueFormLaravel\Elements\Structure\GroupElement;
use VueFormLaravel\Elements\Structure\ListElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class ListElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                ListElement::schema([
                    TextElement::name('item_name')
                        ->label('Item Name')
                        ->rules('required'),
                    GroupElement::rowWith4Columns([
                        GroupElement::rowWith4Columns([
                            TextElement::name('first_name'),
                            TextElement::name('first_name_old')
                        ]),
                    ]),
                ])
            ]);
    }
}
```

---

## ⚙️ Allowed Attributes

| Name            | Data Type                          | Default | Example                                        |
| --------------- | ---------------------------------- | ------- | ---------------------------------------------- |
| addClass        | `array\|object\|string\|function`  | null    | `ListElement::name("name")->addClass()`        |
| addClasses      | `object\|function`                 | null    | `ListElement::name("name")->addClasses()`      |
| addText         | `string`                           | null    | `ListElement::name("name")->addText()`         |
| after           | `object\|string\|number`           | null    | `ListElement::name("name")->after()`           |
| before          | `object\|string\|number`           | null    | `ListElement::name("name")->before()`          |
| between         | `object\|string\|number`           | null    | `ListElement::name("name")->between()`         |
| columns         | `object\|string\|number`           | null    | `ListElement::name("name")->columns()`         |
| conditions      | `array`                            | null    | `ListElement::name("name")->conditions()`      |
| controls        | `object`                           | null    | `ListElement::name("name")->controls()`        |
| default         | `array`                            | null    | `ListElement::name("name")->default()`         |
| description     | `string\|object`                   | null    | `ListElement::name("name")->description()`     |
| disabled        | `boolean\|function\|array\|object` | null    | `ListElement::name("name")->disabled()`        |
| displayErrors   | `boolean`                          | null    | `ListElement::name("name")->displayErrors()`   |
| element         | `object`                           | null    | `ListElement::name("name")->element()`         |
| fieldName       | `string\|object`                   | null    | `ListElement::name("name")->fieldName()`       |
| formatData      | `function`                         | null    | `ListElement::name("name")->formatData()`      |
| formatLoad      | `function`                         | null    | `ListElement::name("name")->formatLoad()`      |
| id              | `string`                           | null    | `ListElement::name("name")->id()`              |
| info            | `string\|object`                   | null    | `ListElement::name("name")->info()`            |
| infoPosition    | `string`                           | null    | `ListElement::name("name")->infoPosition()`    |
| initial         | `number`                           | null    | `ListElement::name("name")->initial()`         |
| inline          | `boolean`                          | null    | `ListElement::name("name")->inline()`          |
| label           | `string\|object\|function`         | null    | `ListElement::name("name")->label()`           |
| max             | `number`                           | null    | `ListElement::name("name")->max()`             |
| messages        | `object`                           | null    | `ListElement::name("name")->messages()`        |
| min             | `number`                           | null    | `ListElement::name("name")->min()`             |
| name            | `string\|number`                   | null    | `ListElement::name("name")->name()`            |
| object          | `object`                           | null    | `ListElement::name("name")->object()`          |
| order           | `string`                           | null    | `ListElement::name("name")->order()`           |
| orderBy         | `string`                           | null    | `ListElement::name("name")->orderBy()`         |
| overrideClass   | `array\|object\|string\|function`  | null    | `ListElement::name("name")->overrideClass()`   |
| overrideClasses | `object\|function`                 | null    | `ListElement::name("name")->overrideClasses()` |
| presets         | `array`                            | null    | `ListElement::name("name")->presets()`         |
| removeClass     | `array\|object\|function`          | null    | `ListElement::name("name")->removeClass()`     |
| removeClasses   | `object\|function`                 | null    | `ListElement::name("name")->removeClasses()`   |
| replaceClass    | `object\|function`                 | null    | `ListElement::name("name")->replaceClass()`    |
| replaceClasses  | `object\|function`                 | null    | `ListElement::name("name")->replaceClasses()`  |
| rules           | `array\|string\|object`            | null    | `ListElement::name("name")->rules()`           |
| size            | `string`                           | null    | `ListElement::name("name")->size()`            |
| slots           | `object`                           | null    | `ListElement::name("name")->slots()`           |
| sort            | `boolean`                          | null    | `ListElement::name("name")->sort()`            |
| storeOrder      | `string`                           | null    | `ListElement::name("name")->storeOrder()`      |
| submit          | `boolean`                          | null    | `ListElement::name("name")->submit()`          |
| templates       | `object`                           | null    | `ListElement::name("name")->templates()`       |
| view            | `string`                           | null    | `ListElement::name("name")->view()`            |
| views           | `object`                           | null    | `ListElement::name("name")->views()`           |

---

## ⚙️ Available Static Methods

| Method   | Description                                                                      |
| -------- | -------------------------------------------------------------------------------- |
| `schema` | This method generates a List Element in VueForm, where each item in the provided |
