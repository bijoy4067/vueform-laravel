<?php

namespace LaravelVueForm\Abstracts;

class AttributesBuilder
{
    protected function event(array $data): static
    {
        foreach ($data as $key => $value) {
            if (!in_array($key, static::$allowedEventAttributes, true)) {
                throw new \InvalidArgumentException("Event attribute '{$key}' is not allowed in " . static::class);
            }

            // Use $this->attributes (instance-based)
            $this->attributes['@' . $key] = $value;
        }

        return $this;
    }

    protected function slots(array $data): static
    {
        foreach ($data as $key => $value) {
            if (!array_key_exists($key, static::$allowedSlotAttributes)) {
                throw new \InvalidArgumentException("Slot attribute '{$key}' is not allowed in " . static::class);
            }

            // Use $this->attributes (instance-based)
            $this->attributes['slots'][$key] = [
                'scope' => static::$allowedSlotAttributes[$key],
                'template' => $value,
            ];
        }

        return $this;
    }

    protected function props(array $data): static
    {
        foreach ($data as $key => $value) {
            // If you want to validate props keys:
            // if (!in_array($key, static::$allowedProperties, true)) {
            //     throw new \InvalidArgumentException("Prop '{$key}' is not allowed in " . static::class);
            // }

            // Use $this->attributes (instance-based)
            $this->attributes['props'][$key] = $value;
        }

        return $this;
    }
}