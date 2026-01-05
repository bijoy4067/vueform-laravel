# Captcha Element

A form demonstrating usage of the CaptchaElement field within Laravel VueForm. <a href="https://vueform.com/reference/captcha-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\CaptchaElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class CaptchaElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                CaptchaElement::name('foo')
            ]);
    }
}
```

---

## ⚙️ Allowed Attributes

| Name            | Data Type                          | Default                     | Example                                           |
| --------------- | ---------------------------------- | --------------------------- | ------------------------------------------------- |
| addClass        | `array\|object\|string\|function`  | null                        | `CaptchaElement::name("name")->addClass()`        |
| addClasses      | `object\|function`                 | {}                          | `CaptchaElement::name("name")->addClasses()`      |
| after           | `object\|string\|number`           | null                        | `CaptchaElement::name("name")->after()`           |
| before          | `object\|string\|number`           | null                        | `CaptchaElement::name("name")->before()`          |
| between         | `object\|string\|number`           | null                        | `CaptchaElement::name("name")->between()`         |
| columns         | `object\|string\|number`           | null                        | `CaptchaElement::name("name")->columns()`         |
| conditions      | `array`                            | []                          | `CaptchaElement::name("name")->conditions()`      |
| default         | `string`                           | null                        | `CaptchaElement::name("name")->default()`         |
| description     | `string\|object`                   | null                        | `CaptchaElement::name("name")->description()`     |
| disabled        | `boolean\|function\|array\|object` | false                       | `CaptchaElement::name("name")->disabled()`        |
| displayErrors   | `boolean`                          | true                        | `CaptchaElement::name("name")->displayErrors()`   |
| formatData      | `function`                         | null                        | `CaptchaElement::name("name")->formatData()`      |
| formatLoad      | `function`                         | null                        | `CaptchaElement::name("name")->formatLoad()`      |
| id              | `string`                           | null                        | `CaptchaElement::name("name")->id()`              |
| info            | `string\|object`                   | null                        | `CaptchaElement::name("name")->info()`            |
| infoPosition    | `string`                           | right                       | `CaptchaElement::name("name")->infoPosition()`    |
| inline          | `boolean`                          | false                       | `CaptchaElement::name("name")->inline()`          |
| label           | `string\|object\|function`         | null                        | `CaptchaElement::name("name")->label()`           |
| messages        | `object`                           | {}                          | `CaptchaElement::name("name")->messages()`        |
| name            | `string\|number`                   | undefined                   | `CaptchaElement::name("name")->name()`            |
| options         | `object`                           | {}                          | `CaptchaElement::name("name")->options()`         |
| overrideClass   | `array\|object\|string\|function`  | null                        | `CaptchaElement::name("name")->overrideClass()`   |
| overrideClasses | `object\|function`                 | {}                          | `CaptchaElement::name("name")->overrideClasses()` |
| presets         | `array`                            | []                          | `CaptchaElement::name("name")->presets()`         |
| provider        | `string`                           | config.useProviders.captcha | `CaptchaElement::name("name")->provider()`        |
| readonly        | `boolean\|function\|array\|object` | false                       | `CaptchaElement::name("name")->readonly()`        |
| removeClass     | `array\|object\|function`          | null                        | `CaptchaElement::name("name")->removeClass()`     |
| removeClasses   | `object\|function`                 | {}                          | `CaptchaElement::name("name")->removeClasses()`   |
| replaceClass    | `object\|function`                 | null                        | `CaptchaElement::name("name")->replaceClass()`    |
| replaceClasses  | `object\|function`                 | {}                          | `CaptchaElement::name("name")->replaceClasses()`  |
| rules           | `array\|string\|object`            | captcha                     | `CaptchaElement::name("name")->rules()`           |
| slots           | `object`                           | {}                          | `CaptchaElement::name("name")->slots()`           |
| submit          | `boolean`                          | true                        | `CaptchaElement::name("name")->submit()`          |
| templates       | `object`                           | {}                          | `CaptchaElement::name("name")->templates()`       |
| view            | `string`                           | undefined                   | `CaptchaElement::name("name")->view()`            |
| views           | `object`                           | {}                          | `CaptchaElement::name("name")->views()`           |
