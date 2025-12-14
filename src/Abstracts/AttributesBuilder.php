<?php

namespace LaravelVueForm\Abstracts;

/**
 * AttributesBuilder
 * -----------------
 *
 * This class collects Vue-related attributes from PHP arrays
 * and stores them in a normalized internal format.
 *
 * Think of this class as a "translator":
 * PHP array  ➜  structured data  ➜  Vue template output (later)
 *
 * ⚠ Important:
 * This class DOES NOT generate Vue HTML like `@click=""` or `:prop=""`.
 * It only PREPARES the data.
 * A separate renderer is responsible for converting the data
 * into actual Vue template syntax.
 *
 * What this class handles:
 * - Events   → @click, @input, etc.
 * - Slots    → <template #slot>
 * - Props    → :prop="value"
 *
 * Why this design?
 * - Keeps logic simple and testable
 * - Makes Vue rendering reusable and flexible
 * - Easy to understand for beginners and powerful for advanced users
 */
class AttributesBuilder
{
    protected function event(array $data): static
    {
        // Each array item represents a Vue event
        // Example: ['click' => 'handleClick']
        foreach ($data as $key => $value) {
            // Safety check:
            // Only allow predefined Vue events to avoid invalid bindings
            if (!in_array($key, static::$allowedEventAttributes, true)) {
                throw new \InvalidArgumentException("Event attribute '{$key}' is not allowed in " . static::class);
            }

            // Save event in Vue format:
            // click => handleClick  →  @click="handleClick"
            $this->attributes['@' . $key] = $value;
        }

        return $this;
    }

    protected function slots(array $data): static
    {
        // Each key represents a slot name
        // Each value is the slot's template content
        foreach ($data as $key => $value) {
            // Ensure this slot is allowed and has a known scope
            if (!array_key_exists($key, static::$allowedSlotAttributes)) {
                throw new \InvalidArgumentException("Slot attribute '{$key}' is not allowed in " . static::class);
            }

            // Store slot data for later rendering:
            // - scope    → slot props (if any)
            // - template → slot HTML / Vue content
            $this->attributes['slots'][$key] = [
                'scope' => static::$allowedSlotAttributes[$key],
                'template' => $value,
            ];
        }

        return $this;
    }

    protected function props(array $data): static
    {
        // Props are plain Vue bindings like :disabled="true"
        foreach ($data as $key => $value) {
            // If you want to validate props keys:
            // if (!in_array($key, static::$allowedProperties, true)) {
            //     throw new \InvalidArgumentException("Prop '{$key}' is not allowed in " . static::class);
            // }

            // Save prop value as-is
            // Example: disabled => true  →  :disabled="true"
            $this->attributes['props'][$key] = $value;
        }

        return $this;
    }
}