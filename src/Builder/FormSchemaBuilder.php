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
        // Merge default → custom
        static::$allowedAttributes = array_merge(
            static::$defaultAllowedAttributes,
            static::$allowedAttributes
        );

        static::$allowedProperties = array_merge(
            static::$defaultAllowedProperties,
            static::$allowedProperties
        );
        static::$allowedEventAttributes = array_merge(static::$allowedEventAttributes, static::$defaultAllowedEventAttributes);
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
        // if custom method exists, call it
        if (method_exists($this, $method)) {
            return $this->$method(...$arguments);
        }
        // dd(in_array($method, static::$allowedAttributes), static::$allowedAttributes, $method);
        if (in_array($method, array_keys(static::$allowedAttributes))) {
            // argument validation
            $this->argumentValidation($method, $arguments[0] ?? null, static::$allowedAttributes[$method]);

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

    private function argumentValidation(string $attribute, $value, string $typeDefinition): void
    {
        // Split multiple types
        $allowedTypes = explode('|', $typeDefinition);
        $isValid = false;

        foreach ($allowedTypes as $type) {
            $type = trim($type);
            if ($type === 'mixed') {
                $isValid = true;
                break;
            }
            if ($type === 'function' && is_callable($value)) {
                $isValid = true;
                break;
            }
            if ($type === 'array' && is_array($value)) {
                $isValid = true;
                break;
            }
            if ($type === 'object' && is_object($value) || is_array($value)) {
                $isValid = true;
                break;
            }
            if ($type === 'boolean' && is_bool($value)) {
                $isValid = true;
                break;
            }
            if ($type === 'string' && is_string($value)) {
                $isValid = true;
                break;
            }
            if ($type === 'number' && is_numeric($value)) {
                $isValid = true;
                break;
            }
        }

        if (!$isValid) {
            throw new \InvalidArgumentException("Invalid value for attribute '{$attribute}'. Expected: {$typeDefinition}.");
        }
    }
}
