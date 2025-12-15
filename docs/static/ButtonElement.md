# Button Element 

A minimal example demonstrating the ButtonElement component within Laravel VueForm. 
      This form focuses on rendering a standard submit button using the built-in 
      submitButton() helper. Ideal for showcasing how simple static UI elements can be 
      integrated into a form and how button elements interact with form submission behavior. <a href="https://vueform.com/reference/button-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use LaravelVueForm\Abstracts\VueFormBuilder;
use LaravelVueForm\Elements\Static\ButtonElement;
use LaravelVueForm\Elements\Vueform;
```

---

## 🧩 Example

```php
class ButtonElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                ButtonElement::submitButton()
            ]);
    }
}
```
---

## ⚙️ Allowed Attributes

| Name | Data Type | Default | Example |
| ---- | ---- | ---- | ---- |
| addClass | `array\|object\|string\|function` | null | `ButtonElement::name("name")->addClass()` |
| addClasses | `object\|function` | null | `ButtonElement::name("name")->addClasses()` |
| after | `object\|string\|number` | null | `ButtonElement::name("name")->after()` |
| align | `string` | null | `ButtonElement::name("name")->align()` |
| before | `object\|string\|number` | null | `ButtonElement::name("name")->before()` |
| between | `object\|string\|number` | null | `ButtonElement::name("name")->between()` |
| buttonClass | `string\|array\|object` | null | `ButtonElement::name("name")->buttonClass()` |
| buttonLabel | `string\|object\|function` | null | `ButtonElement::name("name")->buttonLabel()` |
| buttonType | `string` | null | `ButtonElement::name("name")->buttonType()` |
| columns | `object\|string\|number` | null | `ButtonElement::name("name")->columns()` |
| conditions | `array` | null | `ButtonElement::name("name")->conditions()` |
| danger | `boolean` | null | `ButtonElement::name("name")->danger()` |
| description | `string\|object` | null | `ButtonElement::name("name")->description()` |
| disabled | `boolean\|function\|array\|object` | null | `ButtonElement::name("name")->disabled()` |
| full | `boolean` | null | `ButtonElement::name("name")->full()` |
| href | `string` | null | `ButtonElement::name("name")->href()` |
| id | `string` | null | `ButtonElement::name("name")->id()` |
| info | `string\|object` | null | `ButtonElement::name("name")->info()` |
| infoPosition | `string` | null | `ButtonElement::name("name")->infoPosition()` |
| inline | `boolean` | null | `ButtonElement::name("name")->inline()` |
| label | `string\|object\|function` | null | `ButtonElement::name("name")->label()` |
| loading | `function\|boolean` | null | `ButtonElement::name("name")->loading()` |
| name | `string\|number` | null | `ButtonElement::name("name")->name()` |
| overrideClass | `array\|object\|string\|function` | null | `ButtonElement::name("name")->overrideClass()` |
| overrideClasses | `object\|function` | null | `ButtonElement::name("name")->overrideClasses()` |
| presets | `array` | null | `ButtonElement::name("name")->presets()` |
| removeClass | `array\|object\|function` | null | `ButtonElement::name("name")->removeClass()` |
| removeClasses | `object\|function` | null | `ButtonElement::name("name")->removeClasses()` |
| replaceClass | `object\|function` | null | `ButtonElement::name("name")->replaceClass()` |
| replaceClasses | `object\|function` | null | `ButtonElement::name("name")->replaceClasses()` |
| resets | `boolean` | null | `ButtonElement::name("name")->resets()` |
| secondary | `boolean` | null | `ButtonElement::name("name")->secondary()` |
| size | `string` | null | `ButtonElement::name("name")->size()` |
| slots | `object` | null | `ButtonElement::name("name")->slots()` |
| submits | `boolean` | null | `ButtonElement::name("name")->submits()` |
| target | `string` | null | `ButtonElement::name("name")->target()` |
| templates | `object` | null | `ButtonElement::name("name")->templates()` |
| view | `string` | null | `ButtonElement::name("name")->view()` |
| views | `object` | null | `ButtonElement::name("name")->views()` |

---

## ⚙️ Available Static Methods

| Method | Description |
| --- | --- |
| `submitButton` | Create a form submit button |

