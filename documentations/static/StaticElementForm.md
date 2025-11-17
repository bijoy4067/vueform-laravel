# StaticElementForm

**Class:** `StaticElementForm`

**Namespace:**  
`App\VueForm\Static\StaticElementForm`

---

## 🧱 Import Class

```php
use LaravelVueForm\Abstracts\VueFormBuilder;
use LaravelVueForm\Elements\Static\StaticElement;
```

---

## 🧩 Example

```php
class StaticElementForm extends VueFormBuilder
{
    protected static $method = 'post';
    /**
     * Build the form structure.s
     *
     * @return array
     */
    protected function buildForm(): array
    {
        return [
            StaticElement::text('asdf'),
            StaticElement::h1('asdf'),
            StaticElement::hr(),
            StaticElement::img(
                src: 'https://vueform.com/images/logo.svg',
                height: 40,
                width: 570
            )
                
        ];
    }
}
```
