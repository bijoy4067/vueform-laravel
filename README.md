[![Vueform Laravel](https://raw.githubusercontent.com/bijoy4067/vueform-laravel/refs/heads/main/.github/assets/logo.png?token=GHSAT0AAAAAADOCXVS76EVJL563UDY4IQ2G2J7KWCQ)](https://vueform.com?cid=vueform)

# VueForm Laravel - Server-Side Form Builder for Laravel & Vue 3

[![Latest Version](https://img.shields.io/packagist/v/bijoy4067/vueform-laravel)](https://packagist.org/packages/bijoy4067/vueform-laravel)
[![License](https://img.shields.io/packagist/l/bijoy4067/vueform-laravel)](LICENSE)
[![PHP Version](https://img.shields.io/packagist/php-v/bijoy4067/vueform-laravel)](https://packagist.org/packages/bijoy4067/vueform-laravel)

**Build powerful, production-ready Laravel forms with Vue 3 without writing JavaScript.** VueForm Laravel is a comprehensive PHP form builder that seamlessly integrates VueForm's reactive UI components with Laravel's robust backend validation and routing system. Define your forms entirely in PHP, leverage server-side validation, and render beautiful Material Design forms instantly in your Blade templates.

## 🎯 Why VueForm Laravel?

### Developer-First Form Building

- **Zero JavaScript Required** - Build complex forms using only PHP classes
- **Server-Side Schema Generation** - Forms are defined in Laravel, validated in Laravel, and rendered automatically
- **Material Design UI** - Pre-built, customizable Material Theme components included
- **No Frontend Build Process** - All CSS and JS assets are pre-compiled and bundled

### Enterprise-Ready Features

- **Single Source of Truth** - Form schema, validation rules, and business logic live together in PHP
- **Type-Safe Form Builders** - Leverage PHP 8.0+ type hints and IDE autocomplete
- **Reusable Form Components** - Create form libraries shared across your application
- **AJAX-Ready** - Built-in async submission with Laravel CSRF protection
- **Conditional Logic** - Show/hide fields based on user input without writing JS
- **Multi-Step Forms** - Build wizards and complex form flows declaratively

---

## 📋 Table of Contents

- [Key Features](#-key-features)
- [Requirements](#-requirements)
- [Installation](#-installation)
- [Quick Start Guide](#-quick-start-guide)
- [Configuration](#%EF%B8%8F-configuration)
- [Creating Form Components](#%EF%B8%8F-creating-form-components)
- [Rendering Forms](#%EF%B8%8F-rendering-forms)
- [Form Submission Handling](#-form-submission-handling)
- [Advanced Usage](#-advanced-usage)
- [Performance Optimization](#-performance-optimization)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Key Features

### For PHP Developers

- **Reusable Form** - Anywhere in your `.blade.php` file you can use this form
- **Laravel Validation Integration** - Use familiar validation rules directly in form definitions
- **Eloquent Model Binding** - Auto-populate forms from Eloquent models
- **Dynamic Routing** - Automatic endpoint generation based on Laravel routes

### Form Element Types

- **Text Inputs** - Text, email, password, textarea, URL, number
- **Selection Controls** - Radio, checkbox, select, multiselect, toggle
- **Date & Time** - Date picker, time picker, datetime picker
- **File Uploads** - Single/multiple file upload with preview
- **Rich Content** - WYSIWYG editor, markdown editor
- **Dynamic Lists** - Repeatable field groups with add/remove
- **Layout Elements** - Groups, columns, tabs, steps

---

## 🔧 Requirements

- **PHP**: 8.0 or higher
- **Laravel**: 9.x, 10.x, or 11.x
- **Composer**: 2.x or higher
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)

> **Note**: This package works with Laravel's default frontend setup. No Vue CLI, Vite, or npm installation required on your end—all frontend assets are pre-bundled.

---

## 📦 Installation

### Step 1: Install via Composer

```bash
composer require bijoy4067/vueform-laravel
```

### Step 2: Publish Configuration and Assets

```bash
php artisan vendor:publish --tag=vueform-laravel --force
```

This command publishes:

- Configuration file to `config/vueform-laravel.php`
- Pre-compiled CSS and JavaScript assets to your `public` directory
- Stubs for form component generation

### Step 3: Add Assets to Your Layout

Add the following to your main Blade layout's `<head>` section (typically `resources/views/layouts/app.blade.php`):

```php
<head>
    <!-- Required: CSRF Token for AJAX submissions -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Load VueForm Laravel Assets (CSS + JS) -->
    {{ LaravelVueForm\Abstracts\VueFormBuilder::loadAssets() }}

    <!-- Your other head elements -->
</head>
```

**What this does**: Loads pre-compiled Vue 3 components, VueForm library, and Material Theme styles. No build process needed.

---

## 🚀 Quick Start Guide

### Create Your First Form (2 minutes)

#### 1. Generate a Form Component

```bash
php artisan vueform:make ContactForm
```

This creates `app/VueForm/ContactForm.php` with boilerplate code.

#### 2. Define Form Schema

Open `app/VueForm/ContactForm.php` and add your form fields:

```php
<?php

namespace App\VueForm;

use LaravelVueForm\Abstracts\VueFormBuilder;
use LaravelVueForm\Elements\Fields\TextElement;
use LaravelVueForm\Elements\Fields\TextareaElement;
use LaravelVueForm\Elements\Static\ButtonElement;
use LaravelVueForm\Elements\Vueform;

class ContactForm extends VueFormBuilder
{
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                TextElement::name('name')
                    ->label('Your Name')
                    ->rules('required|min:3'),

                TextElement::name('email')
                    ->label('Email Address')
                    ->rules('required|email'),

                TextareaElement::name('message')
                    ->label('Message')
                    ->rules('required|min:10'),

                ButtonElement::submitButton('Send Message')
            ]);
    }

    public static function validatedFormData($request)
    {
        // This receives only validated data
        // Send email, save to database, etc.

        return response()->json([
            'message' => 'Thank you! We received your message.'
        ]);
    }
}
```

#### 3. Add to Controller

```php
<?php

namespace App\Http\Controllers;

use App\VueForm\ContactForm;

class ContactController extends Controller
{
    public function show()
    {
        return view('contact', [
            'contactForm' => app(ContactForm::class)
        ]);
    }
}
```

#### 4. Render in Blade Template

```php
<!-- resources/views/contact.blade.php -->
@extends('layouts.app')

@section('content')
    <div class="container">
        <h1>Contact Us</h1>
        {!! $contactForm->build() !!}
    </div>
@endsection
```

**That's it!** Navigate to your route and see a fully functional, validated contact form with Material Design styling.

---

## ⚙️ Configuration

### Customize Material Theme Colors

Edit `config/vueform-laravel.php` to match your brand:

```php
<?php

return [
    'styles' => [
        // Primary brand color
        '--vf-primary' => '#6200ee',

        // Form element styling
        '--vf-bg-input' => '#ffffff',
        '--vf-border-color-input' => '#d1d5db',
        '--vf-radius-input' => '0.375rem',

        // Typography
        '--vf-font-size' => '0.875rem',
        '--vf-line-height' => '1.25rem',

        // Spacing
        '--vf-gutter' => '1rem',
        '--vf-min-height-input' => '2.375rem',

        // State colors
        '--vf-color-success' => '#10b981',
        '--vf-color-danger' => '#ef4444',
    ]
];
```

After updating configuration, **clear your browser cache** or do a hard refresh (Ctrl+F5) to see changes.

---

## 🏗️ Creating Form Components

### Using the Artisan Command

```bash
# Basic form
php artisan vueform:make UserRegistrationForm

# Form in a subdirectory
php artisan vueform:make Admin/UserEditForm

# With custom namespace
php artisan vueform:make Forms/Checkout/PaymentForm
```

Forms are created in `app/VueForm/` by default. You can organize them in subdirectories.

### Form Builder Anatomy

Every form component extends `VueFormBuilder` and implements `buildForm()`:

```php
<?php

namespace App\VueForm;

use LaravelVueForm\Abstracts\VueFormBuilder;
use LaravelVueForm\Elements\Vueform;

class ExampleForm extends VueFormBuilder
{
    // Optional: Custom submission endpoint
    protected static $actionUrl = null; // Auto-generated if null

    // Optional: HTTP method (GET, POST, PUT, PATCH, DELETE)
    protected static $method = 'POST';

    // Required: Define form structure
    protected function buildForm()
    {
        return Vueform::build()
            ->schema([
                // Your form elements here
            ]);
    }

    // Optional: Handle form submission
    public static function validatedFormData($request)
    {
        // Process validated data
        // $request contains only fields that passed validation

        return response()->json(['success' => true]);
    }

    // Alternative: Manual validation
    public static function formData($request)
    {
        // Manually validate
        $validated = $request->validate([
            'field_name' => 'required|string|max:255'
        ]);

        // Process data

        return response()->json(['success' => true]);
    }
}
```

### Key Concepts

- **Auto-Generated Endpoints**: If `$actionUrl` is `null`, the package generates a secure route automatically
- **Validation Methods**:
  - `validatedFormData()` - Receives pre-validated data based on element rules
  - `formData()` - Receives raw request for manual validation
- **Response Format**: Return JSON responses for AJAX forms

---

## 🖼️ Rendering Forms

### Method 1: Via Controller (Recommended)

**Best for**: Multi-page applications, forms with complex logic

```php
// Controller
public function create()
{
    return view('users.create', [
        'userForm' => app(\App\VueForm\UserForm::class)
    ]);
}
```

```php
<!-- View -->
{!! $userForm->build() !!}
```

### Method 2: Direct Instantiation

**Best for**: Simple forms, prototyping, global components

```php
<!-- Anywhere in any Blade file -->
{!! (new \App\VueForm\NewsletterForm())->build() !!}
```

---

## 📨 Form Submission Handling

### Automatic Validation

The package validates form data based on rules defined in your elements:

```php
protected function buildForm()
{
    return Vueform::build()
        ->schema([
            TextElement::name('username')
                ->rules('required|alpha_dash|min:3|max:20|unique:users'),

            TextElement::name('email')
                ->rules('required|email|unique:users'),

            TextElement::name('age')
                ->rules('nullable|integer|min:13|max:120')
        ]);
}

public static function validatedFormData($request)
{
    // All rules passed, $request contains clean data
    User::create($request->all());

    return response()->json([
        'message' => 'User created successfully!',
        'redirect' => route('users.index')
    ]);
}
```

### Custom Validation Messages

```php
TextElement::name('email')
    ->rules('required|email')
    ->messages([
        'required' => 'We need your email to contact you.',
        'email' => 'Please enter a valid email address.'
    ]);
```

### Handling Validation Errors

Errors are automatically displayed below each field. Customize error display:

```php
return Vueform::build()
    ->displayErrors(true) // Show/hide error messages
    ->validateOn('change|submit') // When to validate
    ->schema([...]);
```

### Server-Side Processing

```php
public static function validatedFormData($request)
{
    // Example: Create database record
    $user = User::create($request->only(['name', 'email']));

    // Example: Send email
    Mail::to($user)->send(new WelcomeEmail($user));

    // Example: Fire event
    event(new UserRegistered($user));

    // Return success response
    return response()->json([
        'message' => 'Registration complete!',
        'redirect' => route('dashboard')
    ]);
}
```

### Error Handling

```php
public static function validatedFormData($request)
{
    try {
        // Your logic here

        return response()->json(['success' => true]);
    } catch (\Exception $e) {
        return response()->json([
            'message' => 'An error occurred: ' . $e->getMessage()
        ], 500);
    }
}
```

---

## 🎓 Advanced Usage

### Conditional Fields

Show/hide fields based on other field values:

```php
RadioElement::name('account_type')
    ->items(['personal' => 'Personal', 'business' => 'Business']),

TextElement::name('company_name')
    ->conditions([
        ['account_type', '==', 'business']
    ])
```

### Dynamic Options from Database

```php
SelectElement::name('category_id')
    ->items(Category::pluck('name', 'id')->toArray())
    ->search(true)
    ->placeholder('Select a category...')
```

### File Uploads

```php
FileElement::name('avatar')
    ->accept('image/*')
    ->uploadTempEndpoint(route('temp.upload'))
    ->removeTempEndpoint(route('temp.remove'))
    ->auto(true)
```

### Multi-Step Forms (Wizards)

```php
return Vueform::build()
    ->steps([
        'personal' => 'Personal Information',
        'address' => 'Address Details',
        'review' => 'Review & Submit'
    ])
    ->schema([
        // Step 1
        GroupElement::name('personal_info')->schema([...]),

        // Step 2
        GroupElement::name('address_info')->schema([...]),

        // Step 3
        StaticElement::name('review')->content('<p>Review your information...</p>')
    ]);
```

### Repeatable Field Groups

```php
ListElement::name('phone_numbers')
    ->label('Phone Numbers')
    ->addText('Add Another Phone')
    ->object([
        'type' => SelectElement::name('type')->items(['mobile', 'home', 'work']),
        'number' => TextElement::name('number')->rules('required')
    ])
```

---

### Element Types Reference

See the full documentation for detailed element options:

- **Text Inputs**: `TextElement`, `TextareaElement`, `EmailElement`, `PasswordElement`
- **Numbers**: `NumberElement`, `SliderElement`
- **Selections**: `SelectElement`, `RadioElement`, `CheckboxElement`, `ToggleElement`
- **Dates**: `DateElement`, `TimeElement`, `DatetimeElement`
- **Files**: `FileElement`, `ImageElement`
- **Rich Content**: `EditorElement`, `MarkdownElement`
- **Layout**: `GroupElement`, `ListElement`, `ColumnsElement`
- **Static**: `ButtonElement`, `StaticElement`, `HtmlElement`

---

## ⚡ Performance Optimization

### Caching Form Schemas

For forms that don't change often:

```php
public function buildForm()
{
    return Cache::remember('contact-form-schema', 3600, function() {
        return Vueform::build()->schema([...]);
    });
}
```

---

## 🐛 Troubleshooting

### Forms Not Rendering

**Check**: Did you add `loadAssets()` to your layout?

```php
{{ LaravelVueForm\Abstracts\VueFormBuilder::loadAssets() }}
```

### CSRF Token Errors

**Check**: Is the CSRF meta tag present?

```php
<meta name="csrf-token" content="{{ csrf_token() }}">
```

### Validation Not Working

**Check**: Are rules defined on elements?

```php
TextElement::name('email')->rules('required|email')
```

### Styles Not Applied

**Solution**: Clear browser cache and run:

```bash
php artisan cache:clear
php artisan config:clear
```

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork the repository** on GitHub
2. **Clone your fork**: `git clone https://github.com/bijoy4067/vueform-laravel.git`
3. **Create a feature branch**: `git checkout -b feature/amazing-feature`
4. **Make your changes** with clear commit messages
5. **Add tests** for new functionality
6. **Submit a pull request** with a description of your changes

### Coding Standards

- Follow PSR-12 coding standards
- Write PHPDoc comments for public methods
- Include unit tests for new features
- Update documentation for new features

---

## 📜 License

This package is open-sourced software licensed under the [MIT license](LICENSE).

---

## 🔗 Resources

- **Official Documentation**: [Coming Soon]
- **Laravel Documentation**: [https://laravel.com/docs](https://laravel.com/docs)
- **Vue 3 Guide**: [https://vuejs.org](https://vuejs.org)
- **VueForm**: [https://vueform.com](https://vueform.com)
- **Material Design**: [https://material.io](https://material.io)

---

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/bijoy4067/vueform-laravel/issues)
- **Discussions**: [GitHub Discussions](https://github.com/bijoy4067/vueform-laravel/discussions)
- **Email**: support@example.com

---

**Built with ❤️ for the Laravel community**
