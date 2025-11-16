<?php

namespace LaravelVueForm\Builder;

use Illuminate\Support\Str;
use LaravelVueForm\Abstracts\AttributesBuilder;

class FormSchemaBuilder extends AttributesBuilder
{
    public array $attributes = [];

    protected static array $allowedAttributes = [];

    /**
     * Start a new instance with name
     */
    public static function name(string $value): static
    {
        $class = static::class;
        $shortName = class_basename($class);
        $formElement = Str::of($shortName)->kebab()->value();

        $instance = new static();
        $instance->attributes['name'] = $value;
        $instance->attributes['element'] = $formElement;
        return $instance;
    }

    /**
     * Magic method to set allowed attributes
     */
    public function __call(string $method, array $arguments): static
    {
        if (method_exists($this, $method)) {
            return $this->$method(...$arguments);
        }

        if (in_array($method, static::$allowedAttributes, true)) {
            $this->attributes[$method] = $arguments[0] ?? null;
            return $this;
        }

        throw new \InvalidArgumentException("Attribute '{$method}' is not allowed in " . static::class);
    }

    /**
     * Merge user attributes with defaults
     */
    public function getAttributes(): array
    {
        return $this->attributes;
    }

    /**
     * Convert to array
     */
    public function toArray(): array
    {
        return $this->getAttributes();
    }

    protected static function generateRandomName()
    {
        return strtolower(Str::random(10));
    }

    protected function conditions(array $conditions): static
    {
        $this->attributes['conditions'] = $conditions ?? [];
        return $this;
    }
}