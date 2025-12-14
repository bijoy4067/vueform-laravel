<?php

namespace LaravelVueForm\Controllers;

use Crypt;

class FormDataController
{
    public function handleFormData()
    {
        if (class_exists($class = self::decodeScope(request('scope')))) {
            if (method_exists($class, 'formData')) {
                return $class::formData(request());
            }

            if (method_exists($class, 'validatedFormData')) {
                // Get validation rules from form class
                $rules = (new $class())->getFormValidationRules();

                // apply validation rules
                $validatedRequest = request()->validate($rules);

                // merge validated request data to request
                request()->merge($validatedRequest);
                return $class::validatedFormData(request());
            }
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
