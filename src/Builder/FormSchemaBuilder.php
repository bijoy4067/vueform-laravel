<?php

namespace LaravelVueForm\Builder;

use Illuminate\Support\Str;
use LaravelVueForm\Abstracts\AttributesBuilder;
use LaravelVueForm\Traits\DefaultAttributesTraits;

class FormSchemaBuilder extends AttributesBuilder
{
    use DefaultAttributesTraits;
   
    public array $attributes = [];

    protected static array $allowedAttributes = [];
    protected static array $allowedProperties = [];
    protected static array $allowedEventAttributes = [];
    protected static array $allowedSlotAttributes = [];

    public function __construct()
    {
        static::$allowedAttributes = array_merge(static::$allowedAttributes, static::$defaultAllowedAttributes);
        static::$allowedProperties = array_merge(static::$allowedProperties, static::$defaultAllowedProperties);
        static::$allowedEventAttributes = array_merge(static::$allowedEventAttributes, static::$defaultAllowedEventAttributes);
        // static::$allowedSlotAttributes = array_merge(static::$allowedSlotAttributes, static::$defaultAllowedSlotAttributes);
    }

    /**
     * Start a new instance with name
     */
    public static function name(string $value = null): static
    {
        if (empty($value)) {
            $value = static::generateRandomName();
        }
        $class = static::class;
        $shortName = class_basename($class);
        $formElement = Str::of($shortName)->kebab()->value();

        $instance = new static();
        $instance->attributes['name'] = $value;
        $instance->attributes['element-name'] = $formElement;
        return $instance;
    }

    /**
     * Magic method to set allowed attributes
     */
    public function __call(string $method, array $arguments): static
    {
        dd($method, $arguments);
        if (!array_key_exists('name', $this->attributes)) {
            dd($method, $arguments);
            $this->attributes = static::name();
        }
        dd($this->attributes);
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