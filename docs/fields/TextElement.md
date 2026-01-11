# TextElement 

A comprehensive form demonstrating various text input types including text, number, email, password, and URL fields with conditional rendering support. <a href="https://vueform.com/reference/text-element" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\TextElement;
use VueFormLaravel\Elements\Static\ButtonElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class TextElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->default([
                'search' => 'Search',
                'number' => '123456',
                'email' => 'user@example.com',
                'password' => 'password123',
                'url' => 'https://example.com',
            ])
            ->schema([
                TextElement::name('search')
                    ->info('')
                    ->addClass('block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focused:outline-sky-500 focus:outline-sky-500 sm:text-sm/6'),
                TextElement::name('addon')->slots([
                    'addon-before' => '<i class="fa fa-search"></i>'
                ]),
                TextElement::name('number')
                    ->inputType('number')
                    ->conditions([
                        ['search', 'not_empty']
                    ]),
                TextElement::name('email')->inputType('email'),
                TextElement::name('password')->inputType('password'),
                TextElement::name('url')->inputType('url'),
                ButtonElement::submitButton()
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
| addClass | `array\|object\|string\|function` | null | `TextElement::name("name")->addClass()` |
| addClasses | `object\|function` | {} | `TextElement::name("name")->addClasses()` |
| addons | `object` | {} | `TextElement::name("name")->addons()` |
| after | `object\|string\|number` | null | `TextElement::name("name")->after()` |
| attrs | `object` | {} | `TextElement::name("name")->attrs()` |
| autocomplete | `string\|number` | null | `TextElement::name("name")->autocomplete()` |
| before | `object\|string\|number` | null | `TextElement::name("name")->before()` |
| between | `object\|string\|number` | null | `TextElement::name("name")->between()` |
| columns | `object\|string\|number` | null | `TextElement::name("name")->columns()` |
| conditions | `array` | [] | `TextElement::name("name")->conditions()` |
| debounce | `number` | null | `TextElement::name("name")->debounce()` |
| default | `string\|number\|object` | null | `TextElement::name("name")->default()` |
| description | `string\|object` | null | `TextElement::name("name")->description()` |
| disabled | `boolean\|function\|array\|object` | false | `TextElement::name("name")->disabled()` |
| displayErrors | `boolean` | true | `TextElement::name("name")->displayErrors()` |
| expression | `string\|object` | undefined | `TextElement::name("name")->expression()` |
| fieldName | `string\|object` | name|label | `TextElement::name("name")->fieldName()` |
| floating | `string\|boolean\|object` | null | `TextElement::name("name")->floating()` |
| forceNumbers | `boolean` | null | `TextElement::name("name")->forceNumbers()` |
| formatData | `function` | null | `TextElement::name("name")->formatData()` |
| formatLoad | `function` | null | `TextElement::name("name")->formatLoad()` |
| id | `string` | null | `TextElement::name("name")->id()` |
| info | `string\|object` | null | `TextElement::name("name")->info()` |
| infoPosition | `string` | right | `TextElement::name("name")->infoPosition()` |
| inline | `boolean` | false | `TextElement::name("name")->inline()` |
| inputType | `string` | text | `TextElement::name("name")->inputType()` |
| label | `string\|object\|function` | null | `TextElement::name("name")->label()` |
| loading | `boolean` | false | `TextElement::name("name")->loading()` |
| mask | `string\|object\|array\|function` | undefined | `TextElement::name("name")->mask()` |
| messages | `object` | {} | `TextElement::name("name")->messages()` |
| name | `string\|number` | undefined | `TextElement::name("name")->name()` |
| overrideClass | `array\|object\|string\|function` | null | `TextElement::name("name")->overrideClass()` |
| overrideClasses | `object\|function` | {} | `TextElement::name("name")->overrideClasses()` |
| placeholder | `string\|object` | null | `TextElement::name("name")->placeholder()` |
| presets | `array` | [] | `TextElement::name("name")->presets()` |
| readonly | `boolean\|function\|array\|object` | false | `TextElement::name("name")->readonly()` |
| removeClass | `array\|object\|function` | null | `TextElement::name("name")->removeClass()` |
| removeClasses | `object\|function` | {} | `TextElement::name("name")->removeClasses()` |
| replaceClass | `object\|function` | null | `TextElement::name("name")->replaceClass()` |
| replaceClasses | `object\|function` | {} | `TextElement::name("name")->replaceClasses()` |
| rules | `array\|string\|object` | null | `TextElement::name("name")->rules()` |
| size | `string` | undefined | `TextElement::name("name")->size()` |
| slots | `object` | {} | `TextElement::name("name")->slots()` |
| submit | `boolean` | true | `TextElement::name("name")->submit()` |
| templates | `object` | {} | `TextElement::name("name")->templates()` |
| view | `string` | undefined | `TextElement::name("name")->view()` |
| views | `object` | {} | `TextElement::name("name")->views()` |

---

## ⚡ Events

The following events <a href="https://vueform.com/reference/text-element#events" target="_blank">Documentation</a> are available for this element:

| Name | Parameters | Description |
| --- | --- | --- |
| `reset` | - {component} el$ - the element's component | Triggered when the input is resetted. |
| `clear` | - {component} el$ - the element's component | Triggered when the input is cleared. |
| `change` | - {string} newValue - the new value<br>- {string} oldValue - the old value<br>- {component} el$ - the element's component | Triggered when the element's value is changed. |
| `blur` | - {component} el$ - the element's component | Triggered when the input is blurred. |
| `focus` | - {component} el$ - the element's component | Triggered when the input is focused. |
| `keydown` | - {Event} Event - the Event object<br>- {component} el$ - the element's component | Triggered on keydown. |
| `keyup` | - {Event} Event - the Event object<br>- {component} el$ - the element's component | Triggered on keyup. |
| `keypress` | - {Event} Event - the Event object<br>- {component} el$ - the element's component | Triggered on keypress. |
| `beforeCreate` | - {component} el$ - the element's component | Triggered in beforeCreate hook. |
| `created` | - {component} el$ - the element's component | Triggered in created hook. |
| `beforeMount` | - {component} el$ - the element's component | Triggered in beforeMount hook. |
| `mounted` | - {component} el$ - the element's component | Triggered in mounted hook. |
| `beforeUpdate` | - {component} el$ - the element's component | Triggered in beforeUpdate hook. |
| `updated` | - {component} el$ - the element's component | Triggered in updated hook. |
| `beforeUnmount` | - {component} el$ - the element's component | Triggered in beforeUnmount (or beforeDestroy in Vue 2) hook. |
| `unmounted` | - {component} el$ - the element's component | Triggered in unmounted (or destroyed in Vue 2) hook. |

### 🔔 Example Usage of PHP

```php
TextElement::name('example')
    ->events([
        'reset' => 'handleReset',
        'clear' => 'handleClear',
        'change' => 'handleChange',
        'blur' => 'handleBlur',
        'focus' => 'handleFocus',
        'keydown' => 'handleKeydown',
        'keyup' => 'handleKeyup',
        'keypress' => 'handleKeypress',
        'beforeCreate' => 'handleBeforeCreate',
        'created' => 'handleCreated',
        'beforeMount' => 'handleBeforeMount',
        'mounted' => 'handleMounted',
        'beforeUpdate' => 'handleBeforeUpdate',
        'updated' => 'handleUpdated',
        'beforeUnmount' => 'handleBeforeUnmount',
        'unmounted' => 'handleUnmounted',
    ])
```

### 🔔 Example Usage of JavaScript

```javascript
function handleReset(el$) {
    // Your code here
}
function handleClear(el$) {
    // Your code here
}
function handleChange(newValue, oldValue, el$) {
    // Your code here
}
function handleBlur(el$) {
    // Your code here
}
function handleFocus(el$) {
    // Your code here
}
function handleKeydown(Event, el$) {
    // Your code here
}
function handleKeyup(Event, el$) {
    // Your code here
}
function handleKeypress(Event, el$) {
    // Your code here
}
function handleBeforeCreate(el$) {
    // Your code here
}
function handleCreated(el$) {
    // Your code here
}
function handleBeforeMount(el$) {
    // Your code here
}
function handleMounted(el$) {
    // Your code here
}
function handleBeforeUpdate(el$) {
    // Your code here
}
function handleUpdated(el$) {
    // Your code here
}
function handleBeforeUnmount(el$) {
    // Your code here
}
function handleUnmounted(el$) {
    // Your code here
}
