# TEditorElement

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\TEditorElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class TEditorElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                TEditorElement::name('search')
            ]);
    }
}
```

---

## ⚙️ Allowed Attributes

| Name            | Data Type                          | Default                            | Example                                           |
| --------------- | ---------------------------------- | ---------------------------------- | ------------------------------------------------- | ------------------------------------------- |
| accept          | `array`                            | null                               | `TEditorElement::name("name")->accept()`          |
| acceptMimes     | `array`                            | null                               | `TEditorElement::name("name")->acceptMimes()`     |
| addClass        | `array\|object\|string\|function`  | null                               | `TEditorElement::name("name")->addClass()`        |
| addClasses      | `object\|function`                 | {}                                 | `TEditorElement::name("name")->addClasses()`      |
| after           | `object\|string\|number`           | null                               | `TEditorElement::name("name")->after()`           |
| before          | `object\|string\|number`           | null                               | `TEditorElement::name("name")->before()`          |
| between         | `object\|string\|number`           | null                               | `TEditorElement::name("name")->between()`         |
| columns         | `object\|string\|number`           | null                               | `TEditorElement::name("name")->columns()`         |
| conditions      | `array`                            | []                                 | `TEditorElement::name("name")->conditions()`      |
| debounce        | `number`                           | null                               | `TEditorElement::name("name")->debounce()`        |
| default         | `object\|string\|number`           | null                               | `TEditorElement::name("name")->default()`         |
| description     | `string\|object`                   | null                               | `TEditorElement::name("name")->description()`     |
| disabled        | `boolean\|function\|array\|object` | false                              | `TEditorElement::name("name")->disabled()`        |
| displayErrors   | `boolean`                          | true                               | `TEditorElement::name("name")->displayErrors()`   |
| endpoint        | `string\|function\|promise`        | config.endpoints.attachment.url    | `TEditorElement::name("name")->endpoint()`        |
| fieldName       | `string\|object`                   | name                               | label                                             | `TEditorElement::name("name")->fieldName()` |
| formatData      | `function`                         | null                               | `TEditorElement::name("name")->formatData()`      |
| formatLoad      | `function`                         | null                               | `TEditorElement::name("name")->formatLoad()`      |
| hideTools       | `array`                            | []                                 | `TEditorElement::name("name")->hideTools()`       |
| id              | `string`                           | null                               | `TEditorElement::name("name")->id()`              |
| info            | `string\|object`                   | null                               | `TEditorElement::name("name")->info()`            |
| infoPosition    | `string`                           | right                              | `TEditorElement::name("name")->infoPosition()`    |
| inline          | `boolean`                          | false                              | `TEditorElement::name("name")->inline()`          |
| label           | `string\|object\|function`         | null                               | `TEditorElement::name("name")->label()`           |
| messages        | `object`                           | {}                                 | `TEditorElement::name("name")->messages()`        |
| method          | `string`                           | config.endpoints.attachment.method | `TEditorElement::name("name")->method()`          |
| name            | `string\|number`                   | undefined                          | `TEditorElement::name("name")->name()`            |
| overrideClass   | `array\|object\|string\|function`  | null                               | `TEditorElement::name("name")->overrideClass()`   |
| overrideClasses | `object\|function`                 | {}                                 | `TEditorElement::name("name")->overrideClasses()` |
| placeholder     | `string\|object`                   | null                               | `TEditorElement::name("name")->placeholder()`     |
| presets         | `array`                            | []                                 | `TEditorElement::name("name")->presets()`         |
| removeClass     | `array\|object\|function`          | null                               | `TEditorElement::name("name")->removeClass()`     |
| removeClasses   | `object\|function`                 | {}                                 | `TEditorElement::name("name")->removeClasses()`   |
| replaceClass    | `object\|function`                 | null                               | `TEditorElement::name("name")->replaceClass()`    |
| replaceClasses  | `object\|function`                 | {}                                 | `TEditorElement::name("name")->replaceClasses()`  |
| rules           | `array\|string\|object`            | null                               | `TEditorElement::name("name")->rules()`           |
| size            | `string`                           | undefined                          | `TEditorElement::name("name")->size()`            |
| slots           | `object`                           | {}                                 | `TEditorElement::name("name")->slots()`           |
| submit          | `boolean`                          | true                               | `TEditorElement::name("name")->submit()`          |
| templates       | `object`                           | {}                                 | `TEditorElement::name("name")->templates()`       |
| view            | `string`                           | undefined                          | `TEditorElement::name("name")->view()`            |
| views           | `object`                           | {}                                 | `TEditorElement::name("name")->views()`           |
