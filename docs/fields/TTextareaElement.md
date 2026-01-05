# TTextareaElement

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\TTextareaElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class TTextareaElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                TTextareaElement::name('search')
            ]);
    }
}
```

---

## ⚙️ Allowed Attributes

| Name            | Data Type                          | Default   | Example                                             |
| --------------- | ---------------------------------- | --------- | --------------------------------------------------- | --------------------------------------------- |
| addClass        | `array\|object\|string\|function`  | null      | `TTextareaElement::name("name")->addClass()`        |
| addClasses      | `object\|function`                 | {}        | `TTextareaElement::name("name")->addClasses()`      |
| addons          | `object`                           | {}        | `TTextareaElement::name("name")->addons()`          |
| after           | `object\|string\|number`           | null      | `TTextareaElement::name("name")->after()`           |
| attrs           | `object`                           | {}        | `TTextareaElement::name("name")->attrs()`           |
| autogrow        | `boolean`                          | true      | `TTextareaElement::name("name")->autogrow()`        |
| before          | `object\|string\|number`           | null      | `TTextareaElement::name("name")->before()`          |
| between         | `object\|string\|number`           | null      | `TTextareaElement::name("name")->between()`         |
| columns         | `object\|string\|number`           | null      | `TTextareaElement::name("name")->columns()`         |
| conditions      | `array`                            | []        | `TTextareaElement::name("name")->conditions()`      |
| debounce        | `number`                           | null      | `TTextareaElement::name("name")->debounce()`        |
| default         | `object\|string\|number`           | null      | `TTextareaElement::name("name")->default()`         |
| description     | `string\|object`                   | null      | `TTextareaElement::name("name")->description()`     |
| disabled        | `boolean\|function\|array\|object` | false     | `TTextareaElement::name("name")->disabled()`        |
| displayErrors   | `boolean`                          | true      | `TTextareaElement::name("name")->displayErrors()`   |
| fieldName       | `string\|object`                   | name      | label                                               | `TTextareaElement::name("name")->fieldName()` |
| floating        | `string\|boolean\|object`          | null      | `TTextareaElement::name("name")->floating()`        |
| formatData      | `function`                         | null      | `TTextareaElement::name("name")->formatData()`      |
| formatLoad      | `function`                         | null      | `TTextareaElement::name("name")->formatLoad()`      |
| id              | `string`                           | null      | `TTextareaElement::name("name")->id()`              |
| info            | `string\|object`                   | null      | `TTextareaElement::name("name")->info()`            |
| infoPosition    | `string`                           | right     | `TTextareaElement::name("name")->infoPosition()`    |
| inline          | `boolean`                          | false     | `TTextareaElement::name("name")->inline()`          |
| label           | `string\|object\|function`         | null      | `TTextareaElement::name("name")->label()`           |
| messages        | `object`                           | {}        | `TTextareaElement::name("name")->messages()`        |
| name            | `string\|number`                   | undefined | `TTextareaElement::name("name")->name()`            |
| overrideClass   | `array\|object\|string\|function`  | null      | `TTextareaElement::name("name")->overrideClass()`   |
| overrideClasses | `object\|function`                 | {}        | `TTextareaElement::name("name")->overrideClasses()` |
| placeholder     | `string\|object`                   | null      | `TTextareaElement::name("name")->placeholder()`     |
| presets         | `array`                            | []        | `TTextareaElement::name("name")->presets()`         |
| readonly        | `boolean\|function\|array\|object` | false     | `TTextareaElement::name("name")->readonly()`        |
| removeClass     | `array\|object\|function`          | null      | `TTextareaElement::name("name")->removeClass()`     |
| removeClasses   | `object\|function`                 | {}        | `TTextareaElement::name("name")->removeClasses()`   |
| replaceClass    | `object\|function`                 | null      | `TTextareaElement::name("name")->replaceClass()`    |
| replaceClasses  | `object\|function`                 | {}        | `TTextareaElement::name("name")->replaceClasses()`  |
| rows            | `number`                           | 3         | `TTextareaElement::name("name")->rows()`            |
| rules           | `array\|string\|object`            | null      | `TTextareaElement::name("name")->rules()`           |
| size            | `string`                           | undefined | `TTextareaElement::name("name")->size()`            |
| slots           | `object`                           | {}        | `TTextareaElement::name("name")->slots()`           |
| submit          | `boolean`                          | true      | `TTextareaElement::name("name")->submit()`          |
| templates       | `object`                           | {}        | `TTextareaElement::name("name")->templates()`       |
| view            | `string`                           | undefined | `TTextareaElement::name("name")->view()`            |
| views           | `object`                           | {}        | `TTextareaElement::name("name")->views()`           |
