# LocationElement

A form demonstrating usage of the LocationElement field within Laravel VueForm. <a href="https://vueform.com/reference/location-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\LocationElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class LocationElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                LocationElement::name('foo')
            ]);
    }
}
```

---

## ⚙️ Allowed Attributes

| Name            | Data Type                          | Default                                                                                                                                                                      | Example                                            |
| --------------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | -------------------------------------------- |
| addClass        | `array\|object\|string\|function`  | null                                                                                                                                                                         | `LocationElement::name("name")->addClass()`        |
| addClasses      | `object\|function`                 | {}                                                                                                                                                                           | `LocationElement::name("name")->addClasses()`      |
| addons          | `object`                           | {}                                                                                                                                                                           | `LocationElement::name("name")->addons()`          |
| after           | `object\|string\|number`           | null                                                                                                                                                                         | `LocationElement::name("name")->after()`           |
| attrs           | `object`                           | {}                                                                                                                                                                           | `LocationElement::name("name")->attrs()`           |
| before          | `object\|string\|number`           | null                                                                                                                                                                         | `LocationElement::name("name")->before()`          |
| between         | `object\|string\|number`           | null                                                                                                                                                                         | `LocationElement::name("name")->between()`         |
| columns         | `object\|string\|number`           | null                                                                                                                                                                         | `LocationElement::name("name")->columns()`         |
| conditions      | `array`                            | []                                                                                                                                                                           | `LocationElement::name("name")->conditions()`      |
| debounce        | `number`                           | null                                                                                                                                                                         | `LocationElement::name("name")->debounce()`        |
| default         | `object`                           | { "country": null, "country_code": null, "state": null, "state_code": null, "city": null, "zip": null, "address": null, "formatted_address": null, "lat": null, "lng": null} | `LocationElement::name("name")->default()`         |
| description     | `string\|object`                   | null                                                                                                                                                                         | `LocationElement::name("name")->description()`     |
| disabled        | `boolean\|function\|array\|object` | false                                                                                                                                                                        | `LocationElement::name("name")->disabled()`        |
| displayErrors   | `boolean`                          | true                                                                                                                                                                         | `LocationElement::name("name")->displayErrors()`   |
| displayKey      | `string`                           | formatted_address                                                                                                                                                            | `LocationElement::name("name")->displayKey()`      |
| extendOptions   | `object`                           | {}                                                                                                                                                                           | `LocationElement::name("name")->extendOptions()`   |
| fieldName       | `string\|object`                   | name                                                                                                                                                                         | label                                              | `LocationElement::name("name")->fieldName()` |
| floating        | `string\|boolean\|object`          | null                                                                                                                                                                         | `LocationElement::name("name")->floating()`        |
| formatData      | `function`                         | null                                                                                                                                                                         | `LocationElement::name("name")->formatData()`      |
| formatLoad      | `function`                         | null                                                                                                                                                                         | `LocationElement::name("name")->formatLoad()`      |
| id              | `string`                           | null                                                                                                                                                                         | `LocationElement::name("name")->id()`              |
| info            | `string\|object`                   | null                                                                                                                                                                         | `LocationElement::name("name")->info()`            |
| infoPosition    | `string`                           | right                                                                                                                                                                        | `LocationElement::name("name")->infoPosition()`    |
| inline          | `boolean`                          | false                                                                                                                                                                        | `LocationElement::name("name")->inline()`          |
| label           | `string\|object\|function`         | null                                                                                                                                                                         | `LocationElement::name("name")->label()`           |
| messages        | `object`                           | {}                                                                                                                                                                           | `LocationElement::name("name")->messages()`        |
| name            | `string\|number`                   | undefined                                                                                                                                                                    | `LocationElement::name("name")->name()`            |
| overrideClass   | `array\|object\|string\|function`  | null                                                                                                                                                                         | `LocationElement::name("name")->overrideClass()`   |
| overrideClasses | `object\|function`                 | {}                                                                                                                                                                           | `LocationElement::name("name")->overrideClasses()` |
| placeholder     | `string\|object`                   | null                                                                                                                                                                         | `LocationElement::name("name")->placeholder()`     |
| presets         | `array`                            | []                                                                                                                                                                           | `LocationElement::name("name")->presets()`         |
| provider        | `string`                           | google                                                                                                                                                                       | `LocationElement::name("name")->provider()`        |
| readonly        | `boolean\|function\|array\|object` | false                                                                                                                                                                        | `LocationElement::name("name")->readonly()`        |
| removeClass     | `array\|object\|function`          | null                                                                                                                                                                         | `LocationElement::name("name")->removeClass()`     |
| removeClasses   | `object\|function`                 | {}                                                                                                                                                                           | `LocationElement::name("name")->removeClasses()`   |
| replaceClass    | `object\|function`                 | null                                                                                                                                                                         | `LocationElement::name("name")->replaceClass()`    |
| replaceClasses  | `object\|function`                 | {}                                                                                                                                                                           | `LocationElement::name("name")->replaceClasses()`  |
| rules           | `array\|string\|object`            | null                                                                                                                                                                         | `LocationElement::name("name")->rules()`           |
| size            | `string`                           | undefined                                                                                                                                                                    | `LocationElement::name("name")->size()`            |
| slots           | `object`                           | {}                                                                                                                                                                           | `LocationElement::name("name")->slots()`           |
| submit          | `boolean`                          | true                                                                                                                                                                         | `LocationElement::name("name")->submit()`          |
| templates       | `object`                           | {}                                                                                                                                                                           | `LocationElement::name("name")->templates()`       |
| view            | `string`                           | undefined                                                                                                                                                                    | `LocationElement::name("name")->view()`            |
| views           | `object`                           | {}                                                                                                                                                                           | `LocationElement::name("name")->views()`           |
