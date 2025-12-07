# SelectElement

---

## 🧱 Import Class

```php
use LaravelVueForm\Abstracts\VueFormBuilder;
use LaravelVueForm\Elements\Fields\SelectElement;
use LaravelVueForm\Elements\Static\ButtonElement;
use LaravelVueForm\Elements\Vueform;
```

---

## 🧩 Example

```php
class SelectElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::name('select-element-form')
            ->schema([
                SelectElement::name('options')
                    ->label('Select Options')
                    ->items([
                        'option1' => 'Option 1',
                        'option2' => 'Option 2',
                        'option3' => 'Option 3',
                    ])
                    ->placeholder('Please select an option'),
                ButtonElement::submitButton(),
            ]);
    }
}
```
