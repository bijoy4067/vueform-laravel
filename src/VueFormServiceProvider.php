<?php

namespace VueFormLaravel;

use Illuminate\Support\ServiceProvider;
use VueFormLaravel\Commands\MakeFormClass;

class VueFormServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     */
    public function boot()
    {
        // Load package views & routes
        $this->loadViewsFrom(__DIR__ . '/resources/views', 'vueForm');
        $this->loadRoutesFrom(__DIR__ . '/Routes/web.php');

        // Register commands
        // Register command (only when running in console)
        if ($this->app->runningInConsole()) {
            $this->commands([
                MakeFormClass::class,
            ]);
        }

        // ✅ Publish the config file
        $this->publishes([
            __DIR__ . '/Config/vueform-laravel.php' => config_path('vueform-laravel.php'),
            __DIR__ . '/public/assets' => public_path('vueform-laravel'),
        ], 'vueform-laravel');
    }

    /**
     * Register any application services.11
     */
    public function register()
    {
        // Merge config to make it available via config('vueform-laravel')      
        $this->mergeConfigFrom(
            __DIR__ . '/Config/vueform-laravel.php',
            'vueform-laravel'
        );

        $this->app->bind('Laraform\Contracts\Validation\Validator', 'Laraform\Validation\Validator');

        $this->app->bind('Illuminate\Contracts\Validation\Validator', function ($app, $args) {
            return app()->makeWith('Illuminate\Validation\Validator', [
                'data' => [],
                'rules' => [],
            ]);
        });
    }
}
