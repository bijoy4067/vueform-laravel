<?php

namespace LaravelVueForm\Builder;

use Illuminate\Support\Str;
use LaravelVueForm\Abstracts\AttributesBuilder;
use LaravelVueForm\Traits\DefaultAttributesTraits;

/**
 * FormSchemaBuilder
 * =================
 *
 * This builder represents a single VueForm element schema.
 *
 * In simple terms:
 * - Each form field (input, textarea, group, list, etc.)
 *   is built using this class or its children.
 * - Attributes are collected step by step using fluent methods.
 *
 * This class focuses ONLY on:
 * - Collecting attributes
 * - Validating allowed attributes
 * - Converting everything into a clean array for Vue
 *
 * Rendering and HTML generation are handled elsewhere.
 */
class FormSchemaBuilder extends AttributesBuilder
{
    use DefaultAttributesTraits;

    /** Stores all attributes for this form element */
    public array $attributes = [];

    /** Allowed HTML / Vue attributes for this element */
    protected static array $allowedAttributes = [];
    /** Allowed Vue props (converted to :prop bindings later) */
    protected static array $allowedProperties = [];
    /** Allowed Vue events (click, input, change, etc.) */
    protected static array $allowedEventAttributes = [];
    /** Allowed Vue slots for this element */
    protected static array $allowedSlotAttributes = [];

    /**
     * Merge default allowed attributes with element-specific ones.
     * This allows base rules + custom extensions per element.
     */
    public function __construct()
    {
        // Combine framework defaults with element-specific rules
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
     * Create a new element instance with a unique name.
     *
     * If no name is provided:
     * - A random name is generated
     * - This prevents name collisions in complex forms
     */
    public static function name(string $value = null): static
    {
        if (empty($value)) {
            $value = static::generateRandomName();
        }
        $class = static::class;
        // Convert class name into a kebab-case element name
        $shortName = class_basename($class);
        $formElement = Str::of($shortName)->kebab()->value();

        // Create fresh builder instance
        $instance = new static();
        $instance->attributes['name'] = $value;
        $instance->attributes['element-name'] = $formElement;
        return $instance;
    }

    /**
     * Dynamic attribute handler.
     *
     * Allows fluent usage like:
     *   ->label('Email')
     *   ->placeholder('Enter email')
     *
     * Only attributes defined in the allow-list are accepted.
     */
    public function __call(string $method, array $arguments): static
    {
        // Call real method if it exists on the class
        if (method_exists($this, $method)) {
            return $this->$method(...$arguments);
        }
        // Allow only predefined attributes
        if (in_array($method, array_keys(static::$allowedAttributes))) {
            // argument validation
            $this->argumentValidation($method, $arguments[0] ?? null, static::$allowedAttributes[$method]);

            // Save validated attribute value
            $this->attributes[$method] = $arguments[0] ?? null;
            return $this;
        }

        throw new \InvalidArgumentException("Attribute '{$method}' is not allowed in " . static::class);
    }

    /**
     * Return all collected attributes.
     */
    public function getAttributes(): array
    {
        return $this->attributes;
    }

    /**
     * Convert builder state into array form.
     * Used when generating the final Vue schema.
     */
    public function toArray(): array
    {
        return $this->getAttributes();
    }

    /**
     * Generate a random, safe element name.
     */
    protected static function generateRandomName()
    {
        return strtolower(Str::random(10));
    }

    /**
     * Attach conditional display logic to this element.
     * Conditions are resolved later using full data paths.
     */
    protected function conditions(array $conditions): static
    {
        $this->attributes['conditions'] = $conditions ?? [];
        return $this;
    }

    /**
     * Validate attribute value type.
     *
     * Supports multiple types:
     * string|number|boolean|array|object|function|mixed
     */
    private function argumentValidation(string $attribute, $value, string $typeDefinition): void
    {
        // Multiple types can be defined using "|" separator
        $allowedTypes = explode('|', $typeDefinition);
        $isValid = false;

        // Check value against each allowed type
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

        // Throw error if value does not match any allowed type
        if (!$isValid) {
            throw new \InvalidArgumentException("Invalid value for attribute '{$attribute}'. Expected: {$typeDefinition}.");
        }
    }
}
