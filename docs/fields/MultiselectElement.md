# MultiselectElement

A form demonstrating usage of the MultiselectElement field within Laravel VueForm. <a href="https://vueform.com/reference/multiselect-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\MultiselectElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class MultiselectElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                MultiselectElement::name('foo')
            ]);
    }
}
```
---

## ⚙️ Allowed Attributes

| Name | Data Type | Default | Example |
| ---- | ---- | ---- | ---- |
| addClass | `array\|object\|string\|function` | null | `MultiselectElement::name("name")->addClass()` |
| addClasses | `object\|function` | {} | `MultiselectElement::name("name")->addClasses()` |
| addOptionOn | `array` | ["enter"] | `MultiselectElement::name("name")->addOptionOn()` |
| after | `object\|string\|number` | null | `MultiselectElement::name("name")->after()` |
| allowAbsent | `boolean` | false | `MultiselectElement::name("name")->allowAbsent()` |
| appendNewOption | `boolean` | true | `MultiselectElement::name("name")->appendNewOption()` |
| appendTo | `string` | undefined | `MultiselectElement::name("name")->appendTo()` |
| appendToBody | `boolean` | false | `MultiselectElement::name("name")->appendToBody()` |
| attrs | `object` | {} | `MultiselectElement::name("name")->attrs()` |
| autocomplete | `string` | undefined | `MultiselectElement::name("name")->autocomplete()` |
| before | `object\|string\|number` | null | `MultiselectElement::name("name")->before()` |
| between | `object\|string\|number` | null | `MultiselectElement::name("name")->between()` |
| canClear | `boolean` | true | `MultiselectElement::name("name")->canClear()` |
| caret | `boolean` | true | `MultiselectElement::name("name")->caret()` |
| clearOnRefetch | `boolean` | true | `MultiselectElement::name("name")->clearOnRefetch()` |
| clearOnSearch | `boolean` | false | `MultiselectElement::name("name")->clearOnSearch()` |
| clearOnSelect | `boolean` | false | `MultiselectElement::name("name")->clearOnSelect()` |
| closeOnDeselect | `boolean` | false | `MultiselectElement::name("name")->closeOnDeselect()` |
| closeOnSelect | `boolean` | true | `MultiselectElement::name("name")->closeOnSelect()` |
| columns | `object\|string\|number` | null | `MultiselectElement::name("name")->columns()` |
| conditions | `array` | [] | `MultiselectElement::name("name")->conditions()` |
| create | `boolean` | false | `MultiselectElement::name("name")->create()` |
| dataKey | `string` | undefined | `MultiselectElement::name("name")->dataKey()` |
| default | `array` | [] | `MultiselectElement::name("name")->default()` |
| delay | `number` | -1 | `MultiselectElement::name("name")->delay()` |
| description | `string\|object` | null | `MultiselectElement::name("name")->description()` |
| disabled | `boolean\|function\|array\|object` | false | `MultiselectElement::name("name")->disabled()` |
| displayErrors | `boolean` | true | `MultiselectElement::name("name")->displayErrors()` |
| extendOptions | `object` | {} | `MultiselectElement::name("name")->extendOptions()` |
| fieldName | `string\|object` | name|label | `MultiselectElement::name("name")->fieldName()` |
| filterResults | `boolean` | true | `MultiselectElement::name("name")->filterResults()` |
| floating | `string\|boolean\|object` | null | `MultiselectElement::name("name")->floating()` |
| formatData | `function` | null | `MultiselectElement::name("name")->formatData()` |
| formatLoad | `function` | null | `MultiselectElement::name("name")->formatLoad()` |
| groupHideEmpty | `boolean` | false | `MultiselectElement::name("name")->groupHideEmpty()` |
| groupLabel | `string` | label | `MultiselectElement::name("name")->groupLabel()` |
| groupOptions | `string` | items | `MultiselectElement::name("name")->groupOptions()` |
| groupSelect | `boolean` | true | `MultiselectElement::name("name")->groupSelect()` |
| groups | `boolean` | false | `MultiselectElement::name("name")->groups()` |
| hideSelected | `boolean` | true | `MultiselectElement::name("name")->hideSelected()` |
| id | `string` | null | `MultiselectElement::name("name")->id()` |
| info | `string\|object` | null | `MultiselectElement::name("name")->info()` |
| infoPosition | `string` | right | `MultiselectElement::name("name")->infoPosition()` |
| inline | `boolean` | false | `MultiselectElement::name("name")->inline()` |
| inputType | `string` | text | `MultiselectElement::name("name")->inputType()` |
| items | `object\|array\|function\|string` | {} | `MultiselectElement::name("name")->items()` |
| label | `string\|object\|function` | null | `MultiselectElement::name("name")->label()` |
| labelProp | `string` | label | `MultiselectElement::name("name")->labelProp()` |
| limit | `number` | -1 | `MultiselectElement::name("name")->limit()` |
| loading | `boolean` | false | `MultiselectElement::name("name")->loading()` |
| max | `number` | -1 | `MultiselectElement::name("name")->max()` |
| messages | `object` | {} | `MultiselectElement::name("name")->messages()` |
| minChars | `number` | 0 | `MultiselectElement::name("name")->minChars()` |
| multipleLabel | `function` | undefined | `MultiselectElement::name("name")->multipleLabel()` |
| multipleLabelMultiple | `string` | locale.vueform.multiselect.multipleLabelMore | `MultiselectElement::name("name")->multipleLabelMultiple()` |
| multipleLabelSingle | `string` | locale.vueform.multiselect.multipleLabelOne | `MultiselectElement::name("name")->multipleLabelSingle()` |
| name | `string\|number` | undefined | `MultiselectElement::name("name")->name()` |
| native | `boolean` | true | `MultiselectElement::name("name")->native()` |
| noOptionsText | `string\|object` | locale.multiselect.noOptions | `MultiselectElement::name("name")->noOptionsText()` |
| noResultsText | `string\|object` | locale.multiselect.noResults | `MultiselectElement::name("name")->noResultsText()` |
| object | `boolean` | false | `MultiselectElement::name("name")->object()` |
| openDirection | `string` | bottom | `MultiselectElement::name("name")->openDirection()` |
| overrideClass | `array\|object\|string\|function` | null | `MultiselectElement::name("name")->overrideClass()` |
| overrideClasses | `object\|function` | {} | `MultiselectElement::name("name")->overrideClasses()` |
| placeholder | `string\|object` | null | `MultiselectElement::name("name")->placeholder()` |
| presets | `array` | [] | `MultiselectElement::name("name")->presets()` |
| removeClass | `array\|object\|function` | null | `MultiselectElement::name("name")->removeClass()` |
| removeClasses | `object\|function` | {} | `MultiselectElement::name("name")->removeClasses()` |
| replaceClass | `object\|function` | null | `MultiselectElement::name("name")->replaceClass()` |
| replaceClasses | `object\|function` | {} | `MultiselectElement::name("name")->replaceClasses()` |
| resolveOnLoad | `boolean` | true | `MultiselectElement::name("name")->resolveOnLoad()` |
| rules | `array\|string\|object` | null | `MultiselectElement::name("name")->rules()` |
| search | `boolean` | false | `MultiselectElement::name("name")->search()` |
| searchParam | `string` | query | `MultiselectElement::name("name")->searchParam()` |
| size | `string` | undefined | `MultiselectElement::name("name")->size()` |
| slots | `object` | {} | `MultiselectElement::name("name")->slots()` |
| strict | `boolean` | true | `MultiselectElement::name("name")->strict()` |
| submit | `boolean` | true | `MultiselectElement::name("name")->submit()` |
| templates | `object` | {} | `MultiselectElement::name("name")->templates()` |
| trackBy | `string\|array` | label | `MultiselectElement::name("name")->trackBy()` |
| valueProp | `string` | value | `MultiselectElement::name("name")->valueProp()` |
| view | `string` | undefined | `MultiselectElement::name("name")->view()` |
| views | `object` | {} | `MultiselectElement::name("name")->views()` |

