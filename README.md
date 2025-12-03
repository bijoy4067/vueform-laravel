# vueform-laravel

A Laravel backend integration for VueForm — provides server-side scaffolding, API endpoints, validation, and optional frontend helpers to use Vue-based form builders in Laravel applications.

> NOTE: This README is a best-effort draft generated without direct access to the repository files. I can update it to exactly match the repository structure and usage once I can read the files or you provide the file list/archive.

## Table of Contents

- [About](https://github.com/bijoy4067/vueform-laravel/tree/main?tab=readme-ov-file#about)
- [Requirements](https://github.com/bijoy4067/vueform-laravel/tree/main?tab=readme-ov-file#requirements)
- [Installation](https://github.com/bijoy4067/vueform-laravel/tree/main?tab=readme-ov-file#installation)
- [Configuration](https://github.com/bijoy4067/vueform-laravel/tree/main?tab=readme-ov-file#configuration)
- [Create Form Component](https://github.com/bijoy4067/vueform-laravel/tree/main?tab=readme-ov-file#create-form-component)
- [Usage](https://github.com/bijoy4067/vueform-laravel/tree/main?tab=readme-ov-file#usage)
- [API](https://github.com/bijoy4067/vueform-laravel/tree/main?tab=readme-ov-file#api)
- [Testing](https://github.com/bijoy4067/vueform-laravel/tree/main?tab=readme-ov-file#testing)
- [Contributing](https://github.com/bijoy4067/vueform-laravel/tree/main?tab=readme-ov-file#contributing)
- [Changelog](https://github.com/bijoy4067/vueform-laravel/tree/main?tab=readme-ov-file#changelog)
- [License](https://github.com/bijoy4067/vueform-laravel/tree/main?tab=readme-ov-file#license)
- [Maintainer](https://github.com/bijoy4067/vueform-laravel/tree/main?tab=readme-ov-file#maintainer)

## About

vueform-laravel integrates Vue-based form handling with Laravel. It aims to provide:

- Reusable backend controllers and routes for storing form definitions and submissions
- Validation rules compatible with Vue form schemas
- Publishing of assets and optional frontend scaffolding
- Eloquent models and migrations for persistent form data

## Requirements

- PHP >= 8.0 (or the Laravel-required PHP version)
- Laravel >= 9.x (adjust accordingly)

## Installation

1. Install via Composer (replace package name if different):

```bash
composer require bijoy4067/vueform-laravel
```

2. Publish package assets, config, migrations and views:

```bash
php artisan vendor:publish --provider="Bijoy4067\VueformLaravel\VueformServiceProvider"
```

## Configuration

Add this following code to `<head></head>` Tag:

```html
<!-- Load VueForm assets -->
{{ LaravelVueForm\Abstracts\VueFormBuilder::loadAssets() }}
```
## Create Form Component

To create a form component use the following command
```bash
php artisan vueform:make FormComponent
```
This command will publish the form component to `app/vueform/FormComponent.php`.
Or create a form component in any other directory by specifying the path.
```bash
php artisan vueform:make Form\FormComponent
```
This command will publish the form component to `app/vueform/Form/FormComponent.php`.

## Usage

Typical examples of `app/vueform/FormComponent.php`:

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
                TextElement::name('search')
                    ->info(null),
                ButtonElement::submitButton()
            ]);
    }


    // you will get submit data into formData method if you not defined endpoint.
    public static function formData($request)
    {
        $request->validate([
            'search' => 'required'
        ]);

        return response()->json([
            'status' => 'success'
        ]);
    }
}
```
Get more Example [VueForm]()
## API

Common endpoints (replace names/prefixes as appropriate):

- GET /api/forms — list available forms
- GET /api/forms/{slug} — get form schema and metadata
- POST /api/forms/{form}/submit — submit form data
- GET /api/forms/{form}/submissions — list submissions (admin)

Authentication and middleware are configurable.

## Testing

If the repository includes tests, run them with:

```bash
composer test
# or
php artisan test
```

Add tests for controllers, requests, models, and API endpoints as appropriate.

## Contributing

Thanks for considering contributing! Suggested workflow:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Add tests and documentation for changes.
4. Open a pull request describing your changes.

Please follow the repository's coding standards and include unit/integration tests for new features.

## Changelog

Refer to the repository's changelog or releases for version history. If none, consider adding a `CHANGELOG.md` following Keep a Changelog format.

## License

Specify the license used by the project (e.g., MIT). If not yet set, add a LICENSE file and update this section.

## Maintainer

- Repository: bijoy4067/vueform-laravel
- Author/Maintainer: bijoy4067

## Final notes

This README is a draft. To make it fully accurate I can:
- Read the repository files and replace placeholders (service provider class, published tags, exact route URIs, model names).
- Extract examples from real controllers, config, and views.

Tell me if you want me to:
1. Retry reading the GitHub repo now and update this README precisely; or
2. Upload the repo / paste the files and I will generate the README from them; or
3. Accept this draft as-is and I’ll make further manual refinements.