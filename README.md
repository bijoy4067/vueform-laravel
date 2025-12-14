# vueform-laravel

A Laravel backend integration for VueForm — server-side form builders, validation helpers, and example components that produce JSON schemas consumed by VueForm frontends. This README targets all kinds of developers: beginners who want a minimal working example, intermediate users who need clear patterns, and advanced users who want performance, customization and testing tips.

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

Add this form builder composer package to your laravel application by using following command.

```bash
composer require bijoy4067/vueform-laravel
```

publish vendor assets

```bash
php artisan vendor:publish --tag=vueform-laravel --force
```

---

## Configuration

Load required front-end assets once in your main layout (inside `<head>`):

```php
<!-- Load VueForm assets (scripts & styles required by the renderer) -->
{{ LaravelVueForm\Abstracts\VueFormBuilder::loadAssets() }}
```

Ensure `csrf-token` meta is present (used by AJAX submissions):

```html
<meta name="csrf-token" content="{{ csrf_token() }}" />
```

Updata your form style (color, padding, margin) etc, form `config/vueform-laravel.php`. After update make reload to your form style will be applied to your form

```php
<?php

return [
    'styles' => [
        '--vf-primary' => '#6200ee', // you can modify here
        //... other style
    ]
]
```

---

## Create Form Component

Create form (Vueform laravel php class) by using following command

```bash
php artisan vueform:make FormComponent
```

This will create a file to `app/VueForm/FormComponent.php`. You can also create files manually anywhere inside `app/VueForm`.

---

## Usage

Add Form Elements schema and setting up Form such as (`endpoint, submit method`) etc inside `buildForm()` method.

Minimal example `app\VueForm\FormComponent.php` (Text input + submit button):

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
        return Vueform::build() // must add name
            ->schema([
                TextElement::name('search')->info(null), // text input field
                ButtonElement::submitButton() // submit button
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

Key point of this example:

- Endpoint.
    - Endpoint will be auto generate if you not defiend `protected static $actionUrl = 'site.com/api-endpoint';`.
- Form Submit method
    - By default it submit form by post method you can defined method by `protected static $method = 'GET';`.

- Added text input field and submit button to the form.
- After submit form, you can get form submited data to `formData($request)` or `validatedFormData($request)` method.

`validatedFormData()` method provided only validated request data. If form has errors then return by defalut (Laravel validation pattern error)

> Example of `validatedFormData()` method:

```php
// Called when form is submitted (if no custom endpoint is configured)

public static function validatedFormData($request)
{
    dd($request);
    // OR
    dd(request()->all());
}
```

## Render Form

To render this form to browser you can follow following methods

- Add this Form to `Controller -> blade`.
- Globally add anywhere in any blade file

### Update controller

controller + Blade example

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
        return view('example', compact('formComponent'));

        // or

        return view('example', [
          'formComponent' => app(FormComponent::class)
        ]);
    }
}
```

Add following php code to `example.blade.php` file.

```php
{!! $formComponent->build() !!}
```

Example:
```html
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>{{ config('app.name', 'Laravel') }}</title>

        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta name="csrf-token" content="{{ csrf_token() }}">
            <title>{{ config('app.name', 'Laravel') }}</title>

            <!-- Fonts -->
            <link rel="preconnect" href="https://fonts.bunny.net">
            <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

            <!-- Styles / Scripts -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

            {{ LaravelVueForm\Abstracts\VueFormBuilder::loadAssets() }}
        </head>

    <body>
        <div class="container mx-auto">
            <div class="col-12 mx-auto mt-5">

                <!-- Reander form -->
                {!! $vueFormData->build() !!}
            </div>
        </div>
    </body>

</html>
```

### Update Blade

Render the Form Globally in your any Blade file.

```php
{!! (new \App\VueForm\Fields\PhoneElementForm())->build() !!}
```

Example of your Blade file:

```html
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>{{ config('app.name', 'Laravel') }}</title>

        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta name="csrf-token" content="{{ csrf_token() }}">
            <title>{{ config('app.name', 'Laravel') }}</title>

            <!-- Fonts -->
            <link rel="preconnect" href="https://fonts.bunny.net">
            <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

            <!-- Styles / Scripts -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

            {{ LaravelVueForm\Abstracts\VueFormBuilder::loadAssets() }}
        </head>

    <body>
        <div class="container mx-auto">
            <div class="col-12 mx-auto mt-5">
                {!! (new \App\VueForm\Fields\PhoneElementForm())->build() !!}
            </div>
        </div>
    </body>

</html>
```

