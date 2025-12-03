# vueform-laravel

A Laravel backend integration for VueForm — server-side form builders, validation helpers, and example components that produce JSON schemas consumed by VueForm frontends. This README targets all kinds of developers: beginners who want a minimal working example, intermediate users who need clear patterns, and advanced users who want performance, customization and testing tips.

> NOTE: This README is written to match the repository structure and common usage patterns. If something does not match your local setup, adjust namespaces/paths accordingly.

## Table of Contents

- [About](#about)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Create Form Component](#create-form-component)
- [Usage](#usage)
- [Render Form](#render-form)
  - [Update controller](#update-controller)
  - [Update Blade](#update-blade)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)
- [Maintainer](#maintainer)

---

## About

vueform-laravel provides a server-first way to define forms for VueForm-powered frontends. Instead of building the schema in JavaScript only, you define forms in PHP classes (builders) that return a `Vueform` schema. This keeps validation, defaults and submission logic close to your Laravel application.

Benefits
- Single source of truth for form schema and server validation.
- Easy reuse of form components across controllers and projects.
- Built-in patterns for conditional fields, remote options and complex structures (groups, lists).
- Option to render the form directly in Blade or return the JSON schema to your SPA.

---

## Requirements

- PHP 8.0+ (or the version required by your Laravel installation)
- Laravel 9.x or newer (adjust accordingly if you use a different LTS)
- The LaravelVueForm library (this package depends on its abstractions and element classes)

---

## Installation

(Brief — only required if you are installing the package into a project)

> Add the package (replace with the correct package name if published differently):
```bash
composer require bijoy4067/vueform-laravel
```

> publish vendor assets (config, views, migrations) if provided by the package:
```bash
php artisan vendor:publish --provider="Bijoy4067\VueformLaravel\VueformServiceProvider"
```

If you only want to reference example files in `app/VueForm`, you can copy them into your application namespace and adjust imports.

---

## Configuration

Load required front-end assets once in your main layout (inside `<head>`):

```blade
<!-- Load VueForm assets (scripts & styles required by the renderer) -->
{{ LaravelVueForm\Abstracts\VueFormBuilder::loadAssets() }}
```

Ensure `csrf-token` meta is present (used by AJAX submissions):

```blade
<meta name="csrf-token" content="{{ csrf_token() }}">
```

---

## Create Form Component

You can create a form builder class to describe your form. Example CLI (if provided by the package):

```bash
php artisan vueform:make FormComponent
```

This will scaffold a file (for example `app/VueForm/FormComponent.php`). You can also create files manually anywhere inside `app/` and ensure namespaces are correct.

---

## Usage

A form builder class extends `LaravelVueForm\Abstracts\VueFormBuilder` and returns a `Vueform` schema inside `buildForm()`.

Minimal example `app\VueForm\FormComponent.php` (Text input + submit):
```php
<?php

namespace App\VueForm;

use LaravelVueForm\Abstracts\VueFormBuilder;
use LaravelVueForm\Elements\Fields\TextElement;
use LaravelVueForm\Elements\Static\ButtonElement;
use LaravelVueForm\Elements\Vueform;

class FormComponent extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::name('text-element-form')
            ->schema([
                TextElement::name('search')->info(null),
                ButtonElement::submitButton()
            ]);
    }

    // Called when form is submitted (if no custom endpoint is configured)
    public static function formData($request)
    {
        $request->validate(['search' => 'required']);
        // handle submission...
        return response()->json(['status' => 'success']);
    }
}
```

Key patterns demonstrated in the examples directory:
- Text fields with types and conditions (TextElement).
- Tags / multi-select with static or remote items (TagsElement).
- Phone inputs with country include and unmask options (PhoneElement).
- Layout primitives: GroupElement (rows/columns), ListElement (repeatable items).
- Static elements (text, headings, images) and ButtonElement helpers.

Copyable snippets
- Conditional field:
```php
TextElement::name('number')
    ->inputType('number')
    ->conditions([['search', 'not_empty']])
```
- Tags with remote items:
```php
TagsElement::name('tags')->items('https://api.example.com/tags/json')->max(5)
```
- Phone field:
```php
PhoneElement::name('phone')->include(['bd'])->unmask(true)
```

---

## Render Form

You can either:
- Render the form in Blade with helper output (convenient for server-rendered pages), or
- Return the JSON schema to a SPA and let frontend code mount the form.

### Update controller

Simple controller example
```php
<?php

namespace App\Http\Controllers;

use App\VueForm\FormComponent;
use Illuminate\Http\Request;

class FormController extends Controller
{
    public function index()
    {
        $formComponent = app(FormComponent::class);
        return view('welcome', compact('formComponent'));

        // or

        return view('welcome', [
          'formComponent' => app(FormComponent::class)
        ]);
    }
}
```

### Update Blade

Render the form in your Blade template. The builder usually exposes a `build()` helper that returns HTML + initialization scripts:

```blade
{!! $formComponent->build() !!}
```

Full minimal Blade example:
```blade
<!doctype html>
<html>
<head>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    {{ LaravelVueForm\Abstracts\VueFormBuilder::loadAssets() }}
</head>
<body>
    <div class="container">
        {!! $formComponent->build() !!}
    </div>
</body>
</html>
```

Notes:
- If you return JSON for a SPA, your frontend should mount the VueForm component and load the schema.
- If your form should post to a custom API, set the endpoint in the schema or use a controller route and handle submission in a controller method.

---

## Contributing

Contributions are welcome. Suggested workflow:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Add tests and documentation for your change.
4. Open a pull request with a clear description and test results.

Please follow PSR coding standards and include unit/integration tests for new features.

---

## Changelog

Maintain a `CHANGELOG.md` following Keep a Changelog if you publish releases. Each release should list breaking changes, new features, and fixes.

---

## License

Declare your project license (e.g., MIT). Add a `LICENSE` file to the repository and update this section with the chosen license name and a short note.

---

## Maintainer

- Repository: bijoy4067/vueform-laravel  
- Maintainer: bijoy4067

---

## Additional notes for different skill levels

For beginners
- Start by copying the example form classes in `app/VueForm/*`.
- Render them in a Blade view using `->build()` and test submission using the provided `formData()` method.
- Keep logic simple and duplicate essential validation on the server.

For intermediate users
- Use `->items($url)` for remote options and implement a server-side search endpoint with pagination.
- Use `->conditions()` to hide/show fields; always revalidate hidden fields server-side.
- Organize forms in namespaces (e.g., App\VueForm, Structure, Static).

For advanced users / pros
- Extend element classes to add custom controls, or register new element types with the VueForm renderer.
- Cache compiled form schemas (Redis / file cache) to avoid rebuilding complex schemas on every request.
- Apply strict input validation and sanitize any HTML used for slots/templates to avoid XSS.
- Write thorough unit tests for builder output (assert keys and critical attributes) and HTTP tests for `formData()`.

---

## Maintainer

- Repository: bijoy4067/vueform-laravel
- Author/Maintainer: bijoy4067
