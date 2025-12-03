# VueForm Laravel Backend — Examples

This file collects focused examples (no installation instructions) drawn from the example builders in app/VueForm/*.

Files referenced:
- app/VueForm/Fields/TextElementForm.php  
  https://github.com/bijoy4067/vueform-laravel-backend/blob/main/app/VueForm/Fields/TextElementForm.php
- app/VueForm/Fields/TagsElementForm.php  
  https://github.com/bijoy4067/vueform-laravel-backend/blob/main/app/VueForm/Fields/TagsElementForm.php
- app/VueForm/Fields/PhoneElementForm.php  
  https://github.com/bijoy4067/vueform-laravel-backend/blob/main/app/VueForm/Fields/PhoneElementForm.php
- app/VueForm/Structure/GroupElementForm.php  
  https://github.com/bijoy4067/vueform-laravel-backend/blob/main/app/VueForm/Structure/GroupElementForm.php
- app/VueForm/Structure/ListElementForm.php  
  https://github.com/bijoy4067/vueform-laravel-backend/blob/main/app/VueForm/Structure/ListElementForm.php
- app/VueForm/Static/StaticElementForm.php  
  https://github.com/bijoy4067/vueform-laravel-backend/blob/main/app/VueForm/Static/StaticElementForm.php
- app/VueForm/Static/ButtonElementForm.php  
  https://github.com/bijoy4067/vueform-laravel-backend/blob/main/app/VueForm/Static/ButtonElementForm.php

---

## Text input example
Demonstrates text, number, email, password and url fields, defaults, conditional visibility and an addon slot.

Key excerpt:
```php
Vueform::name('text-element-form')
    ->default([
        'search' => 'Search',
        'number' => '123456',
        'email' => 'user@example.com',
        'password' => 'password123',
        'url' => 'https://example.com',
    ])
    ->schema([
        TextElement::name('search')->info(null),
        TextElement::name('addon')->slots([
            'addon-before' => '<i class="fa fa-search"></i>'
        ]),
        TextElement::name('number')
            ->inputType('number')
            ->conditions([ ['search', 'not_empty'] ]),
        TextElement::name('email')->inputType('email'),
        TextElement::name('password')->inputType('password'),
        TextElement::name('url')->inputType('url'),
        ButtonElement::submitButton()
    ]);
```

Example form handler (validation + JSON response):
```php
public static function formData($request)
{
    $request->validate([
        'search' => 'required'
    ]);

    return response()->json(['status' => 'success']);
}
```

---

## Tags (multi-select) example
Shows tags with custom slots, static items or remote items, limits and events.

Key excerpt:
```php
TagsElement::name('category')
    ->type('tags')
    ->closeOnSelect(false)
    ->search(true)
    ->label('Categoryxx')
    ->inputType('search')
    ->limit(5)
    ->rules('required')
    ->items([
        ['value' => 1, 'label' => 'Category 1', 'color' => 'red', 'name' => 'foo'],
        ['value' => 2, 'label' => 'Category 2', 'color' => 'red', 'name' => 'foo'],
        ['value' => 3, 'label' => 'Category 3', 'color' => 'red', 'name' => 'foo']
    ])
    ->slots([
        'tag' => '<span class="badge w-auto" style="background-color: {{ option.color}}; ...">{{ option.label }}</span>',
        'info' => '<span>gggg ddd ddd</span>',
        'before' => '<h1 style="color: blue;"> Please select categories cc</h1>',
    ]),
```

Remote items example:
```php
TagsElement::name('tags')
    ->items('http://localhost:8000/tags/json')
    ->max(5);
```

---

## Group & List structure examples
Arrange fields into rows/columns and create repeatable list items.

Group example (row with columns, conditional show):
```php
GroupElement::rowWith4Columns([
    TextElement::name('first_name'),
    TagsElement::name('category')->conditions([['first_name','not_empty']]),
    TextElement::name('search'),
    TextElement::name('number')->inputType('number'),
]),
```

List (repeatable schema) example:
```php
ListElement::schema([
    TextElement::name('item_name')->label('Item Name')->rules('required'),
    GroupElement::rowWith4Columns([
        GroupElement::rowWith4Columns([
            TextElement::name('first_name'),
            TextElement::name('first_name_old')
        ]),
    ]),
])
```

---

## Phone element example
Phone input with country include and unmask option:
```php
PhoneElement::name('phone')
    ->include(['bd'])
    ->unmask(true)
```

---

## Static elements & submit button
Static content helpers (text, headers, hr, image) and a submit button helper.

Static elements:
```php
StaticElement::text('asdf'),
StaticElement::h1('asdf'),
StaticElement::hr(),
StaticElement::img(src: 'https://vueform.com/images/logo.svg', height: 40, width: 570)
```

Submit button:
```php
ButtonElement::submitButton()
```

---

## Minimal usage notes
- Each example builder returns a configured Vueform instance inside buildForm().
- Many examples include a static formData($request) method to validate request input and return JSON — place your submission logic there.
- Use conditions() to show/hide elements based on other field values, and items() for static or remote options.

---

If you want, I can:
- Produce a single consolidated example file (controller or route) that returns one of these form schemas as JSON and demonstrates calling the static formData on submit.
- Or generate smaller focused README sections per form type (text, tags, phone, group, list, static).

Which would you prefer?