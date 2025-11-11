<?php

namespace LaravelVueForm\Controllers;

use Crypt;

class FormDataController
{
    public function handleFormData()
    {
        if (class_exists($class = self::decodeScope(request('scope')))) {
            return $class::formData(request());
        }
    }

    public static function encodeScope($string)
    {
        return Crypt::encryptString($string);
    }

    private static function decodeScope($string)
    {
        return Crypt::decryptString($string);
    }
}