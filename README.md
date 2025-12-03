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
- [Render Form](https://github.com/bijoy4067/vueform-laravel/tree/main?tab=readme-ov-file#render-form-1)
  - [Update controller](https://github.com/bijoy4067/vueform-laravel/tree/main?tab=readme-ov-file#update-controller)
  - [Update Blade](https://github.com/bijoy4067/vueform-laravel/tree/main?tab=readme-ov-file#update-blade-file)
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
Get more Example [VueForm](https://github.com/bijoy4067/vueform-laravel/tree/main/docs)
## Render Form
### Update Controller

Add this code to your controller before `view()` response
```php
public function index()
{
    return view('welcome', [
        'formComponent' => app(GroupElementForm::class)
    ]);
}
```

Authentication and middleware are configurable.

### Update Blade File

Add the following code anywhere in the `<body></body>`.
```php
{!! $vueFormData->build() !!}
```

### Blade File Example

If the repository includes tests, run them with:

```php
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
    <!-- Load VueForm assets -->
    {{ LaravelVueForm\Abstracts\VueFormBuilder::loadAssets() }}

    <script src="{{ asset('js/custom.js') }}"></script>
</head>

<body
    class="bg-[#FDFDFC] dark:bg-[#0a0a0a] text-[#1b1b18] flex p-6 lg:p-8 items-center lg:justify-center min-h-screen flex-col">
    <div class="container">
        <div class="col-12 mx-auto mt-5">
            {!! $formComponent->build() !!}
        </div>
    </div>
</body>

</html>
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
