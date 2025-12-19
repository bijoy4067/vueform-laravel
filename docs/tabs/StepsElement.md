# StepsElement

---

## 🧱 Import Class

```php
use LaravelVueForm\Abstracts\VueFormBuilder;
use LaravelVueForm\Elements\Fields\TextElement;
use LaravelVueForm\Elements\Tabs\FormStepElement;
use LaravelVueForm\Elements\Vueform;
```

---

## 🧩 Example

```php
class StepsElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::name('tabs-element-form')
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
