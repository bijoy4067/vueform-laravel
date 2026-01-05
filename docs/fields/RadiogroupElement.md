# RadiogroupElement

A form demonstrating usage of the RadiogroupElement field within Laravel VueForm. <a href="https://vueform.com/reference/radiogroup-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\RadiogroupElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class RadiogroupElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                RadiogroupElement::name('foo')
            ]);
    }
}
```

---

## ⚙️ Allowed Attributes

| Name            | Data Type                          | Default   | Example                                              |
| --------------- | ---------------------------------- | --------- | ---------------------------------------------------- | ---------------------------------------------- |
| addClass        | `array\|object\|string\|function`  | null      | `RadiogroupElement::name("name")->addClass()`        |
| addClasses      | `object\|function`                 | {}        | `RadiogroupElement::name("name")->addClasses()`      |
| after           | `object\|string\|number`           | null      | `RadiogroupElement::name("name")->after()`           |
| before          | `object\|string\|number`           | null      | `RadiogroupElement::name("name")->before()`          |
| between         | `object\|string\|number`           | null      | `RadiogroupElement::name("name")->between()`         |
| clearOnRefetch  | `boolean`                          | true      | `RadiogroupElement::name("name")->clearOnRefetch()`  |
| columns         | `object\|string\|number`           | null      | `RadiogroupElement::name("name")->columns()`         |
| conditions      | `array`                            | []        | `RadiogroupElement::name("name")->conditions()`      |
| default         | `string\|number\|boolean`          | null      | `RadiogroupElement::name("name")->default()`         |
| description     | `string\|object`                   | null      | `RadiogroupElement::name("name")->description()`     |
| disabled        | `boolean\|function\|array\|object` | false     | `RadiogroupElement::name("name")->disabled()`        |
| disables        | `array`                            | []        | `RadiogroupElement::name("name")->disables()`        |
| displayErrors   | `boolean`                          | true      | `RadiogroupElement::name("name")->displayErrors()`   |
| fieldName       | `string\|object`                   | name      | label                                                | `RadiogroupElement::name("name")->fieldName()` |
| formatData      | `function`                         | null      | `RadiogroupElement::name("name")->formatData()`      |
| formatLoad      | `function`                         | null      | `RadiogroupElement::name("name")->formatLoad()`      |
| id              | `string`                           | null      | `RadiogroupElement::name("name")->id()`              |
| info            | `string\|object`                   | null      | `RadiogroupElement::name("name")->info()`            |
| infoPosition    | `string`                           | right     | `RadiogroupElement::name("name")->infoPosition()`    |
| inline          | `boolean`                          | false     | `RadiogroupElement::name("name")->inline()`          |
| items           | `object\|array\|function\|string`  | {}        | `RadiogroupElement::name("name")->items()`           |
| label           | `string\|object\|function`         | null      | `RadiogroupElement::name("name")->label()`           |
| messages        | `object`                           | {}        | `RadiogroupElement::name("name")->messages()`        |
| name            | `string\|number`                   | undefined | `RadiogroupElement::name("name")->name()`            |
| overrideClass   | `array\|object\|string\|function`  | null      | `RadiogroupElement::name("name")->overrideClass()`   |
| overrideClasses | `object\|function`                 | {}        | `RadiogroupElement::name("name")->overrideClasses()` |
| presets         | `array`                            | []        | `RadiogroupElement::name("name")->presets()`         |
| removeClass     | `array\|object\|function`          | null      | `RadiogroupElement::name("name")->removeClass()`     |
| removeClasses   | `object\|function`                 | {}        | `RadiogroupElement::name("name")->removeClasses()`   |
| replaceClass    | `object\|function`                 | null      | `RadiogroupElement::name("name")->replaceClass()`    |
| replaceClasses  | `object\|function`                 | {}        | `RadiogroupElement::name("name")->replaceClasses()`  |
| rules           | `array\|string\|object`            | null      | `RadiogroupElement::name("name")->rules()`           |
| size            | `string`                           | undefined | `RadiogroupElement::name("name")->size()`            |
| slots           | `object`                           | {}        | `RadiogroupElement::name("name")->slots()`           |
| submit          | `boolean`                          | true      | `RadiogroupElement::name("name")->submit()`          |
| templates       | `object`                           | {}        | `RadiogroupElement::name("name")->templates()`       |
| view            | `string`                           | undefined | `RadiogroupElement::name("name")->view()`            |
| views           | `object`                           | {}        | `RadiogroupElement::name("name")->views()`           |
