# Langs Element

A form example demonstrating how to use the LangsElement in VueForm Laravel to build multilingual forms with language tabs and translated inputs. <a href="https://vueform.com/reference/form-languages" target="_blank">Documentation</a>

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
