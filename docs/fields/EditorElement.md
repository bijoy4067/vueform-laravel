# EditorElement

A form demonstrating usage of the EditorElement field within Laravel VueForm. <a href="https://vueform.com/reference/editor-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\EditorElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class EditorElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                EditorElement::name('foo')
            ]);
    }
}
```

---

## ⚙️ Allowed Attributes

| Name            | Data Type                          | Default                            | Example                                          |
| --------------- | ---------------------------------- | ---------------------------------- | ------------------------------------------------ | ------------------------------------------ |
| accept          | `array`                            | []                                 | `EditorElement::name("name")->accept()`          |
| acceptMimes     | `array`                            | []                                 | `EditorElement::name("name")->acceptMimes()`     |
| addClass        | `array\|object\|string\|function`  | null                               | `EditorElement::name("name")->addClass()`        |
| addClasses      | `object\|function`                 | {}                                 | `EditorElement::name("name")->addClasses()`      |
| after           | `object\|string\|number`           | null                               | `EditorElement::name("name")->after()`           |
| before          | `object\|string\|number`           | null                               | `EditorElement::name("name")->before()`          |
| between         | `object\|string\|number`           | null                               | `EditorElement::name("name")->between()`         |
| columns         | `object\|string\|number`           | null                               | `EditorElement::name("name")->columns()`         |
| conditions      | `array`                            | []                                 | `EditorElement::name("name")->conditions()`      |
| debounce        | `number`                           | null                               | `EditorElement::name("name")->debounce()`        |
| default         | `string\|number\|object`           | null                               | `EditorElement::name("name")->default()`         |
| description     | `string\|object`                   | null                               | `EditorElement::name("name")->description()`     |
| disabled        | `boolean\|function\|array\|object` | false                              | `EditorElement::name("name")->disabled()`        |
| displayErrors   | `boolean`                          | true                               | `EditorElement::name("name")->displayErrors()`   |
| endpoint        | `string\|function\|promise`        | config.endpoints.attachment.url    | `EditorElement::name("name")->endpoint()`        |
| fieldName       | `string\|object`                   | name                               | label                                            | `EditorElement::name("name")->fieldName()` |
| formatData      | `function`                         | null                               | `EditorElement::name("name")->formatData()`      |
| formatLoad      | `function`                         | null                               | `EditorElement::name("name")->formatLoad()`      |
| hideTools       | `array`                            | []                                 | `EditorElement::name("name")->hideTools()`       |
| id              | `string`                           | null                               | `EditorElement::name("name")->id()`              |
| info            | `string\|object`                   | null                               | `EditorElement::name("name")->info()`            |
| infoPosition    | `string`                           | right                              | `EditorElement::name("name")->infoPosition()`    |
| inline          | `boolean`                          | false                              | `EditorElement::name("name")->inline()`          |
| label           | `string\|object\|function`         | null                               | `EditorElement::name("name")->label()`           |
| messages        | `object`                           | {}                                 | `EditorElement::name("name")->messages()`        |
| method          | `string`                           | config.endpoints.attachment.method | `EditorElement::name("name")->method()`          |
| name            | `string\|number`                   | undefined                          | `EditorElement::name("name")->name()`            |
| overrideClass   | `array\|object\|string\|function`  | null                               | `EditorElement::name("name")->overrideClass()`   |
| overrideClasses | `object\|function`                 | {}                                 | `EditorElement::name("name")->overrideClasses()` |
| placeholder     | `string\|object`                   | null                               | `EditorElement::name("name")->placeholder()`     |
| presets         | `array`                            | []                                 | `EditorElement::name("name")->presets()`         |
| removeClass     | `array\|object\|function`          | null                               | `EditorElement::name("name")->removeClass()`     |
| removeClasses   | `object\|function`                 | {}                                 | `EditorElement::name("name")->removeClasses()`   |
| replaceClass    | `object\|function`                 | null                               | `EditorElement::name("name")->replaceClass()`    |
| replaceClasses  | `object\|function`                 | {}                                 | `EditorElement::name("name")->replaceClasses()`  |
| rules           | `array\|string\|object`            | null                               | `EditorElement::name("name")->rules()`           |
| size            | `string`                           | undefined                          | `EditorElement::name("name")->size()`            |
| slots           | `object`                           | {}                                 | `EditorElement::name("name")->slots()`           |
| submit          | `boolean`                          | true                               | `EditorElement::name("name")->submit()`          |
| templates       | `object`                           | {}                                 | `EditorElement::name("name")->templates()`       |
| view            | `string`                           | undefined                          | `EditorElement::name("name")->view()`            |
| views           | `object`                           | {}                                 | `EditorElement::name("name")->views()`           |
