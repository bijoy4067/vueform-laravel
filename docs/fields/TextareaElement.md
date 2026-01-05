# TextareaElement

A form demonstrating usage of the TextareaElement field within Laravel VueForm. <a href="https://vueform.com/reference/textarea-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\TextareaElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class TextareaElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                TextareaElement::name('foo')
            ]);
    }
}
```

---

## ⚙️ Allowed Attributes

| Name            | Data Type                          | Default   | Example                                            |
| --------------- | ---------------------------------- | --------- | -------------------------------------------------- | -------------------------------------------- |
| addClass        | `array\|object\|string\|function`  | null      | `TextareaElement::name("name")->addClass()`        |
| addClasses      | `object\|function`                 | {}        | `TextareaElement::name("name")->addClasses()`      |
| addons          | `object`                           | {}        | `TextareaElement::name("name")->addons()`          |
| after           | `object\|string\|number`           | null      | `TextareaElement::name("name")->after()`           |
| attrs           | `object`                           | {}        | `TextareaElement::name("name")->attrs()`           |
| autogrow        | `boolean`                          | true      | `TextareaElement::name("name")->autogrow()`        |
| before          | `object\|string\|number`           | null      | `TextareaElement::name("name")->before()`          |
| between         | `object\|string\|number`           | null      | `TextareaElement::name("name")->between()`         |
| columns         | `object\|string\|number`           | null      | `TextareaElement::name("name")->columns()`         |
| conditions      | `array`                            | []        | `TextareaElement::name("name")->conditions()`      |
| debounce        | `number`                           | null      | `TextareaElement::name("name")->debounce()`        |
| default         | `string\|number\|object`           | null      | `TextareaElement::name("name")->default()`         |
| description     | `string\|object`                   | null      | `TextareaElement::name("name")->description()`     |
| disabled        | `boolean\|function\|array\|object` | false     | `TextareaElement::name("name")->disabled()`        |
| displayErrors   | `boolean`                          | true      | `TextareaElement::name("name")->displayErrors()`   |
| fieldName       | `string\|object`                   | name      | label                                              | `TextareaElement::name("name")->fieldName()` |
| floating        | `string\|boolean\|object`          | null      | `TextareaElement::name("name")->floating()`        |
| formatData      | `function`                         | null      | `TextareaElement::name("name")->formatData()`      |
| formatLoad      | `function`                         | null      | `TextareaElement::name("name")->formatLoad()`      |
| id              | `string`                           | null      | `TextareaElement::name("name")->id()`              |
| info            | `string\|object`                   | null      | `TextareaElement::name("name")->info()`            |
| infoPosition    | `string`                           | right     | `TextareaElement::name("name")->infoPosition()`    |
| inline          | `boolean`                          | false     | `TextareaElement::name("name")->inline()`          |
| label           | `string\|object\|function`         | null      | `TextareaElement::name("name")->label()`           |
| messages        | `object`                           | {}        | `TextareaElement::name("name")->messages()`        |
| name            | `string\|number`                   | undefined | `TextareaElement::name("name")->name()`            |
| overrideClass   | `array\|object\|string\|function`  | null      | `TextareaElement::name("name")->overrideClass()`   |
| overrideClasses | `object\|function`                 | {}        | `TextareaElement::name("name")->overrideClasses()` |
| placeholder     | `string\|object`                   | null      | `TextareaElement::name("name")->placeholder()`     |
| presets         | `array`                            | []        | `TextareaElement::name("name")->presets()`         |
| readonly        | `boolean\|function\|array\|object` | false     | `TextareaElement::name("name")->readonly()`        |
| removeClass     | `array\|object\|function`          | null      | `TextareaElement::name("name")->removeClass()`     |
| removeClasses   | `object\|function`                 | {}        | `TextareaElement::name("name")->removeClasses()`   |
| replaceClass    | `object\|function`                 | null      | `TextareaElement::name("name")->replaceClass()`    |
| replaceClasses  | `object\|function`                 | {}        | `TextareaElement::name("name")->replaceClasses()`  |
| rows            | `number`                           | 3         | `TextareaElement::name("name")->rows()`            |
| rules           | `array\|string\|object`            | null      | `TextareaElement::name("name")->rules()`           |
| size            | `string`                           | undefined | `TextareaElement::name("name")->size()`            |
| slots           | `object`                           | {}        | `TextareaElement::name("name")->slots()`           |
| submit          | `boolean`                          | true      | `TextareaElement::name("name")->submit()`          |
| templates       | `object`                           | {}        | `TextareaElement::name("name")->templates()`       |
| view            | `string`                           | undefined | `TextareaElement::name("name")->view()`            |
| views           | `object`                           | {}        | `TextareaElement::name("name")->views()`           |
