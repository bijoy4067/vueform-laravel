# LangsElement

---

## 🧱 Import Class

```php
use VueFormLaravel\Abstracts\VueFormBuilder;
use VueFormLaravel\Elements\Fields\TextElement;
use VueFormLaravel\Elements\Tabs\FormLanguage;
use VueFormLaravel\Elements\Vueform;
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
