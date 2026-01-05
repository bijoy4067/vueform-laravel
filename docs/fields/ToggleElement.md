# TextElement 

A comprehensive form demonstrating various text input types including text, number, email, password, and URL fields with conditional rendering support. <a href="https://vueform.com/reference/toggle-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\TextElement;
use VueFormLaravel\Elements\Fields\ToggleElement;
use VueFormLaravel\Elements\Static\ButtonElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class ToggleElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                ToggleElement::name('search')
            ]);
    }

    public static function formData($request)
    {
        $request->validate([
            'search' => 'required'
        ]);

        return response()->json([
            'status' => 'success'
        ]);
    }
}
```
---

## ⚙️ Allowed Attributes

| Name | Data Type | Default | Example |
| ---- | ---- | ---- | ---- |
| addClass | `array\|object\|string\|function` | null | `ToggleElement::name("name")->addClass()` |
| addClasses | `object\|function` | {} | `ToggleElement::name("name")->addClasses()` |
| after | `object\|string\|number` | null | `ToggleElement::name("name")->after()` |
| align | `string` | undefined | `ToggleElement::name("name")->align()` |
| before | `object\|string\|number` | null | `ToggleElement::name("name")->before()` |
| between | `object\|string\|number` | null | `ToggleElement::name("name")->between()` |
| columns | `object\|string\|number` | null | `ToggleElement::name("name")->columns()` |
| conditions | `array` | [] | `ToggleElement::name("name")->conditions()` |
| default | `string\|number\|boolean` | undefined | `ToggleElement::name("name")->default()` |
| description | `string\|object` | null | `ToggleElement::name("name")->description()` |
| disabled | `boolean\|function\|array\|object` | false | `ToggleElement::name("name")->disabled()` |
| displayErrors | `boolean` | true | `ToggleElement::name("name")->displayErrors()` |
| extendOptions | `object` | {} | `ToggleElement::name("name")->extendOptions()` |
| falseValue | `boolean\|string\|number` | false | `ToggleElement::name("name")->falseValue()` |
| fieldName | `string\|object` | name|label | `ToggleElement::name("name")->fieldName()` |
| formatData | `function` | null | `ToggleElement::name("name")->formatData()` |
| formatLoad | `function` | null | `ToggleElement::name("name")->formatLoad()` |
| id | `string` | null | `ToggleElement::name("name")->id()` |
| info | `string\|object` | null | `ToggleElement::name("name")->info()` |
| infoPosition | `string` | right | `ToggleElement::name("name")->infoPosition()` |
| inline | `boolean` | false | `ToggleElement::name("name")->inline()` |
| label | `string\|object\|function` | null | `ToggleElement::name("name")->label()` |
| labels | `object` | {} | `ToggleElement::name("name")->labels()` |
| messages | `object` | {} | `ToggleElement::name("name")->messages()` |
| name | `string\|number` | undefined | `ToggleElement::name("name")->name()` |
| overrideClass | `array\|object\|string\|function` | null | `ToggleElement::name("name")->overrideClass()` |
| overrideClasses | `object\|function` | {} | `ToggleElement::name("name")->overrideClasses()` |
| presets | `array` | [] | `ToggleElement::name("name")->presets()` |
| removeClass | `array\|object\|function` | null | `ToggleElement::name("name")->removeClass()` |
| removeClasses | `object\|function` | {} | `ToggleElement::name("name")->removeClasses()` |
| replaceClass | `object\|function` | null | `ToggleElement::name("name")->replaceClass()` |
| replaceClasses | `object\|function` | {} | `ToggleElement::name("name")->replaceClasses()` |
| rules | `array\|string\|object` | null | `ToggleElement::name("name")->rules()` |
| size | `string` | undefined | `ToggleElement::name("name")->size()` |
| slots | `object` | {} | `ToggleElement::name("name")->slots()` |
| standalone | `boolean` | false | `ToggleElement::name("name")->standalone()` |
| submit | `boolean` | true | `ToggleElement::name("name")->submit()` |
| templates | `object` | {} | `ToggleElement::name("name")->templates()` |
| text | `string\|object` | null | `ToggleElement::name("name")->text()` |
| trueValue | `boolean\|string\|number` | true | `ToggleElement::name("name")->trueValue()` |
| view | `string` | undefined | `ToggleElement::name("name")->view()` |
| views | `object` | {} | `ToggleElement::name("name")->views()` |

