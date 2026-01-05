# StepsElement

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
