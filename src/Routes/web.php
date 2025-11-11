<?php

use LaravelVueForm\Controllers\FormDataController;

Route::post('laravel-vueform/{scope}/store', [FormDataController::class, 'handleFormData'])->name('laravel-vue-form.processData');