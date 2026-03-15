# Steps Element

A form example demonstrating how to use the StepsElement in VueForm Laravel to build multi-step forms with step navigation and grouped form inputs. <a href="https://vueform.com/reference/form-steps" target="_blank">Documentation</a>

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\TextElement;
use VueFormLaravel\Elements\Tabs\FormStepElement;
use VueFormLaravel\Elements\Vueform;
```

---

## 🧩 Example

```php
class StepsElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->steps([
                FormStepElement::name('tab1')
                    ->label('tab1')
                    ->elements([
                        'input'
                    ]),
                FormStepElement::name('tab2')
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

You can define custom **steps element** events <a href="https://vueform.com/reference/form-steps#events" target="_blank">Documentation</a> directly in PHP using the `->events()` method.

Each event value refers to a JavaScript function name.

These functions must be defined inside:

```javascript
public/vueform-laravel/vueform-custom.js
```

This allows you to extend or override default behaviors for your generated VueForm components

| Name | Parameters | Description |
| --- | --- | --- |
| `select` | - {component} activeStep$ - the active step<br>- {component} previousStep$ - the previously active step | Triggered when a step becomes active. |
| `next` | - {component} step$ - the next FormStep component | Triggered before moves to the next step. |
| `previous` | - {component} step$ - the previous FormStep component | Triggered before moves to the previous step. |
| `finish` | - | Triggered when finish button is clicked, before validating and submitting the form. |

### 🔔 Example Usage of event (PHP)

```php
StepsElement::name('example')
    ->events([
        'select' => 'handleSelect',
        'next' => 'handleNext',
        'previous' => 'handlePrevious',
        'finish' => 'handleFinish',
    ])
```

### 🔔 Example Usage of event(JavaScript)

```javascript
function handleSelect(activeStep$, previousStep$) {
    // Your code here
}
function handleNext(step$) {
    // Your code here
}
function handlePrevious(step$) {
    // Your code here
}
function handleFinish() {
    // Your code here
}
```

