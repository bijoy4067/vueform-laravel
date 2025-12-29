# LangsElement

---

## 🧱 Import Class

```php
use LaravelVueForm\Abstracts\VueFormBuilder;
use LaravelVueForm\Elements\Fields\TextElement;
use LaravelVueForm\Elements\Tabs\FormLanguage;
use LaravelVueForm\Elements\Vueform;
```

---

## 🧩 Example

```php
class LangsElementForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->langs([
                FormLanguage::name('tab1')
                    ->language('English')
                    ->code('en'),
                FormLanguage::name('tab2')
                    ->language('Bangla')
                    ->code('bd')
            ])
            ->schema([
                TextElement::name('input'),
                TextElement::name('input2'),
                TextElement::name('input3')
            ]);
    }
}
```
