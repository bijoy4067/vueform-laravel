# app/VueForm — Quick reference

This folder contains example server-side form builders used by the local demo / testing UI. Files are PHP form classes grouped by type:

-   Fields/
    -   PhoneElementForm.php
    -   TagsElementForm.php
    -   TextElementForm.php
-   Static/
    -   ButtonElementForm.php
    -   StaticElementForm.php
-   Structure/
    -   GroupElementForm.php
    -   ListElementForm.php

Purpose

-   Each class builds a VueForm schema (the package uses @vueform/vueform on the frontend).
-   Use these classes to serve a JSON schema or render a Blade / Inertia view that mounts a Vue form.

Quick notes

-   If a class exposes only a protected buildForm(), add a small public adapter (e.g. toArray() or static schema()) to return the built schema for controllers.
-   Examples below assume each form class can provide an array schema via static method `schema()` or instance method `toArray()`. Adjust to your class API.

1. Route + controller (serve HTML page that mounts Vue)

```php
// filepath: routes/web.php
// ...existing code...
Route::get('/vueform/{name}', [App\Http\Controllers\VueFormController::class, 'show']);
```

```php
// filepath: app/Http/Controllers/VueFormController.php
// ...existing code...
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\VueForm\Fields\PhoneElementForm; // example

class VueFormController extends Controller
{
    public function show(Request $request, $name)
    {
        $map = [
            'phone' => \App\VueForm\Fields\PhoneElementForm::class,
            'tags'  => \App\VueForm\Fields\TagsElementForm::class,
            'text'  => \App\VueForm\Fields\TextElementForm::class,
            // add other mappings...
        ];

        $class = $map[$name] ?? PhoneElementForm::class;

        // Prefer a public static schema() or toArray() on the form class
        $schema = is_callable([$class, 'schema']) ? $class::schema() : (new $class())->toArray();

        return view('vueform.show', ['schema' => $schema]);
    }
}
```

```blade
// filepath: resources/views/vueform/show.blade.php
<!doctype html>
<html>
<head>
  @vite('resources/js/vueform-app.js') {{-- or mix('js/vueform-app.js') for Mix --}}
</head>
<body>
  <div id="vueform-root" data-schema='@json($schema)'></div>
</body>
</html>
```

2. Vue bootstrap (Vue 3 + @vueform/vueform)

```js
// filepath: resources/js/vueform-app.js
import { createApp, h } from "vue";
import { Form } from "@vueform/vueform"; // or your wrapper component

const el = document.getElementById("vueform-root");
if (el) {
    const schema = JSON.parse(el.dataset.schema || "{}");
    const App = {
        render: () =>
            h(Form, {
                schema,
                onSubmit: (data) => console.log("submit", data),
            }),
    };
    createApp(App).mount("#vueform-root");
}
```

3. Serve schema as JSON (useful for SPA or remote forms)

```php
// filepath: routes/api.php
// ...existing code...
Route::get('/form-schema/{name}', function ($name) {
    $map = [
        'phone' => \App\VueForm\Fields\PhoneElementForm::class,
        // ...
    ];
    $class = $map[$name] ?? \App\VueForm\Fields\PhoneElementForm::class;
    $schema = is_callable([$class, 'schema']) ? $class::schema() : (new $class())->toArray();
    return response()->json($schema);
});
```

4. Inertia example

```php
// filepath: app/Http/Controllers/VueFormInertiaController.php
use Inertia\Inertia;
public function inertiaShow($name)
{
    $schema = \App\VueForm\Fields\PhoneElementForm::schema();
    return Inertia::render('VueFormPage', ['schema' => $schema]);
}
```

5. Livewire note

-   Livewire can render the blade mount point and pass schema JSON via `@json()`. Mount the Vue form inside Livewire components; keep event/submit integration via API endpoints.

6. Build front-end assets

-   If using Vite:
    -   npm install
    -   npm run dev (local)
    -   npm run build (production)
-   If using Mix:
    -   npm install
    -   npm run dev / npm run watch
-   Make sure @vueform/vueform is installed in the app (npm install @vueform/vueform).

7. Adding a new server form

-   Copy any file in this folder, build the schema (Vueform::name(...)->schema([...]) or the package-specific builder).
-   Expose it via a route/controller mapping.
-   Provide a public schema() or toArray() accessor if needed.

8. Troubleshooting

-   If schema does not render: clear view/cache: `php artisan view:clear && php artisan cache:clear && php artisan route:clear`
-   If component not mounting: confirm script is loaded and element ID matches.
-   If package pathing issues: check composer autoload and namespaces.

9. Recommended commit: add this README and keep `app/VueForm` as canonical examples for end users.
