# SelectElement

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\SelectElement;
use VueFormLaravel\Elements\Static\ButtonElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class SelectElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                SelectElement::name('options')
                    ->label('Select Options')
                    ->items([
                        'option1' => 'Option 1',
                        'option2' => 'Option 2',
                        'option3' => 'Option 3',
                    ])
                    ->placeholder('Please select an option'),
                ButtonElement::submitButton()
                    // add css class
                    ->addClass([
                        ["button" => "hover:bg-sky-600"]
                    ]),
            ]);
    }
}
```

---

## ⚙️ Allowed Attributes

| Name            | Data Type                          | Default                      | Example                                          |
| --------------- | ---------------------------------- | ---------------------------- | ------------------------------------------------ | ------------------------------------------ |
| addClass        | `array\|object\|string\|function`  | null                         | `SelectElement::name("name")->addClass()`        |
| addClasses      | `object\|function`                 | {}                           | `SelectElement::name("name")->addClasses()`      |
| addOptionOn     | `array`                            | ["enter"]                    | `SelectElement::name("name")->addOptionOn()`     |
| after           | `object\|string\|number`           | null                         | `SelectElement::name("name")->after()`           |
| allowAbsent     | `boolean`                          | false                        | `SelectElement::name("name")->allowAbsent()`     |
| appendNewOption | `boolean`                          | true                         | `SelectElement::name("name")->appendNewOption()` |
| appendTo        | `string`                           | undefined                    | `SelectElement::name("name")->appendTo()`        |
| appendToBody    | `boolean`                          | false                        | `SelectElement::name("name")->appendToBody()`    |
| attrs           | `object`                           | {}                           | `SelectElement::name("name")->attrs()`           |
| autocomplete    | `string`                           | undefined                    | `SelectElement::name("name")->autocomplete()`    |
| before          | `object\|string\|number`           | null                         | `SelectElement::name("name")->before()`          |
| between         | `object\|string\|number`           | null                         | `SelectElement::name("name")->between()`         |
| canClear        | `boolean`                          | true                         | `SelectElement::name("name")->canClear()`        |
| canDeselect     | `boolean`                          | true                         | `SelectElement::name("name")->canDeselect()`     |
| caret           | `boolean`                          | true                         | `SelectElement::name("name")->caret()`           |
| clearOnRefetch  | `boolean`                          | false                        | `SelectElement::name("name")->clearOnRefetch()`  |
| clearOnSearch   | `boolean`                          | false                        | `SelectElement::name("name")->clearOnSearch()`   |
| closeOnDeselect | `boolean`                          | false                        | `SelectElement::name("name")->closeOnDeselect()` |
| closeOnSelect   | `boolean`                          | true                         | `SelectElement::name("name")->closeOnSelect()`   |
| columns         | `object\|string\|number`           | null                         | `SelectElement::name("name")->columns()`         |
| conditions      | `array`                            | []                           | `SelectElement::name("name")->conditions()`      |
| create          | `boolean`                          | false                        | `SelectElement::name("name")->create()`          |
| dataKey         | `string`                           | undefined                    | `SelectElement::name("name")->dataKey()`         |
| default         | `string\|number\|object`           | null                         | `SelectElement::name("name")->default()`         |
| delay           | `number`                           | -1                           | `SelectElement::name("name")->delay()`           |
| description     | `string\|object`                   | null                         | `SelectElement::name("name")->description()`     |
| disabled        | `boolean\|function\|array\|object` | false                        | `SelectElement::name("name")->disabled()`        |
| displayErrors   | `boolean`                          | true                         | `SelectElement::name("name")->displayErrors()`   |
| extendOptions   | `object`                           | {}                           | `SelectElement::name("name")->extendOptions()`   |
| fieldName       | `string\|object`                   | name                         | label                                            | `SelectElement::name("name")->fieldName()` |
| filterResults   | `boolean`                          | true                         | `SelectElement::name("name")->filterResults()`   |
| floating        | `string\|boolean\|object`          | null                         | `SelectElement::name("name")->floating()`        |
| formatData      | `function`                         | null                         | `SelectElement::name("name")->formatData()`      |
| formatLoad      | `function`                         | null                         | `SelectElement::name("name")->formatLoad()`      |
| groupHideEmpty  | `boolean`                          | false                        | `SelectElement::name("name")->groupHideEmpty()`  |
| groupLabel      | `string`                           | label                        | `SelectElement::name("name")->groupLabel()`      |
| groupOptions    | `string`                           | items                        | `SelectElement::name("name")->groupOptions()`    |
| groups          | `boolean`                          | false                        | `SelectElement::name("name")->groups()`          |
| id              | `string`                           | null                         | `SelectElement::name("name")->id()`              |
| info            | `string\|object`                   | null                         | `SelectElement::name("name")->info()`            |
| infoPosition    | `string`                           | right                        | `SelectElement::name("name")->infoPosition()`    |
| inline          | `boolean`                          | false                        | `SelectElement::name("name")->inline()`          |
| inputType       | `string`                           | text                         | `SelectElement::name("name")->inputType()`       |
| items           | `object\|array\|function\|string`  | {}                           | `SelectElement::name("name")->items()`           |
| label           | `string\|object\|function`         | null                         | `SelectElement::name("name")->label()`           |
| labelProp       | `string`                           | label                        | `SelectElement::name("name")->labelProp()`       |
| limit           | `number`                           | -1                           | `SelectElement::name("name")->limit()`           |
| loading         | `boolean`                          | false                        | `SelectElement::name("name")->loading()`         |
| messages        | `object`                           | {}                           | `SelectElement::name("name")->messages()`        |
| minChars        | `number`                           | 0                            | `SelectElement::name("name")->minChars()`        |
| name            | `string\|number`                   | undefined                    | `SelectElement::name("name")->name()`            |
| native          | `boolean`                          | true                         | `SelectElement::name("name")->native()`          |
| noOptionsText   | `string\|object`                   | locale.multiselect.noOptions | `SelectElement::name("name")->noOptionsText()`   |
| noResultsText   | `string\|object`                   | locale.multiselect.noResults | `SelectElement::name("name")->noResultsText()`   |
| object          | `boolean`                          | false                        | `SelectElement::name("name")->object()`          |
| openDirection   | `string`                           | bottom                       | `SelectElement::name("name")->openDirection()`   |
| overrideClass   | `array\|object\|string\|function`  | null                         | `SelectElement::name("name")->overrideClass()`   |
| overrideClasses | `object\|function`                 | {}                           | `SelectElement::name("name")->overrideClasses()` |
| placeholder     | `string\|object`                   | null                         | `SelectElement::name("name")->placeholder()`     |
| presets         | `array`                            | []                           | `SelectElement::name("name")->presets()`         |
| removeClass     | `array\|object\|function`          | null                         | `SelectElement::name("name")->removeClass()`     |
| removeClasses   | `object\|function`                 | {}                           | `SelectElement::name("name")->removeClasses()`   |
| replaceClass    | `object\|function`                 | null                         | `SelectElement::name("name")->replaceClass()`    |
| replaceClasses  | `object\|function`                 | {}                           | `SelectElement::name("name")->replaceClasses()`  |
| resolveOnLoad   | `boolean`                          | true                         | `SelectElement::name("name")->resolveOnLoad()`   |
| rules           | `array\|string\|object`            | null                         | `SelectElement::name("name")->rules()`           |
| search          | `boolean`                          | false                        | `SelectElement::name("name")->search()`          |
| searchParam     | `string`                           | query                        | `SelectElement::name("name")->searchParam()`     |
| size            | `string`                           | undefined                    | `SelectElement::name("name")->size()`            |
| slots           | `object`                           | {}                           | `SelectElement::name("name")->slots()`           |
| strict          | `boolean`                          | true                         | `SelectElement::name("name")->strict()`          |
| submit          | `boolean`                          | true                         | `SelectElement::name("name")->submit()`          |
| templates       | `object`                           | {}                           | `SelectElement::name("name")->templates()`       |
| trackBy         | `string\|array`                    | undefined                    | `SelectElement::name("name")->trackBy()`         |
| truncate        | `boolean`                          | true                         | `SelectElement::name("name")->truncate()`        |
| valueProp       | `string`                           | value                        | `SelectElement::name("name")->valueProp()`       |
| view            | `string`                           | undefined                    | `SelectElement::name("name")->view()`            |
| views           | `object`                           | {}                           | `SelectElement::name("name")->views()`           |
