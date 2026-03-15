# Tabs Element

A form example demonstrating how to use the TabsElement in VueForm Laravel to organize form inputs into tabbed sections for better form structure and navigation. <a href="https://vueform.com/reference/form-tabs" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\TextElement;
use VueFormLaravel\Elements\Tabs\FormTabElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class TabsElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->tabs([
                FormTabElement::name('tab1')
                    ->label('tab1')
                    ->elements([
                        'input'
                    ]),
                FormTabElement::name('tab2')
                    ->label('tab2')
                    ->elements([
                        'input2'
                    ])
            ])
            ->schema([
                TextElement::name('input')->rules('required'),
                TextElement::name('input2'),
                TextElement::name('input3')
            ]);
    }
}
```
---

## ⚡ Events

You can define custom **tabs element** events <a href="https://vueform.com/reference/form-tabs#events" target="_blank">Documentation</a> directly in PHP using the `->events()` method.

Each event value refers to a JavaScript function name.

These functions must be defined inside:

```javascript
public/vueform-laravel/vueform-custom.js
```

This allows you to extend or override default behaviors for your generated VueForm components

| Name | Parameters | Description |
| --- | --- | --- |
| `select` | - {component} activeTab$ - the active tab<br>- {component} previousTab$ - the previously active tab | Triggered when a tab becomes active. |

### 🔔 Example Usage of event (PHP)

```php
TabsElement::name('example')
    ->events([
        'select' => 'handleSelect',
    ])
```

### 🔔 Example Usage of event(JavaScript)

```javascript
function handleSelect(activeTab$, previousTab$) {
    // Your code here
}
```

