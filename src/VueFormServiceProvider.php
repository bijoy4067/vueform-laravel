<?php

namespace LaravelVueForm;

use Illuminate\Support\ServiceProvider;

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

        // ✅ Publish the config file
        $this->publishes([
            __DIR__ . '/Config/laravel-vueform.php' => config_path('laravel-vueform.php'),
            __DIR__ . '/public/assets' => public_path('vueform-laravel'),
        ], 'laravel-vueform');
    }

    /**
     * Register any application services.11
     */
    public function register()
    {
        // Merge config to make it available via config('laravel-vueform')
        $this->mergeConfigFrom(
            __DIR__ . '/Config/laravel-vueform.php',
            'laravel-vueform'
        );

        if ($this->app->runningInConsole()) {
            $this->commands([
                \LaravelVueForm\Console\BuildCommand::class,
            ]);
        }

        $this->app->bind('Laraform\Contracts\Validation\Validator', 'Laraform\Validation\Validator');

        $this->app->bind('Illuminate\Contracts\Validation\Validator', function ($app, $args) {
            return app()->makeWith('Illuminate\Validation\Validator', [
                'data' => [],
                'rules' => [],
            ]);
        });
    }
}
