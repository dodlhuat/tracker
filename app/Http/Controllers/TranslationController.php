<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class TranslationController extends Controller {
    public array $mandatory = ['lang', 'translate'];

    public function translate(Request $request) {
        $parameters = $request->all();
        foreach ($this->mandatory as $field) {
            if (!isset($parameters[$field])) {
                return response()->json(['error' => __('Parameters invalid or missing')], 403);
            }
        }
        App::setLocale($parameters['lang']);
        $elements = json_decode($parameters['translate'], true);
        if (json_last_error() !== JSON_ERROR_NONE) {
            // if not a json but a string
            $elements = $parameters['translate'];
        }
        if (is_array($elements)) {
            $response = [];
            foreach ($elements as $element) {
                $response[$element] = __($element);
            }
            return $response;
        } else {
            return __($elements);
        }
    }

    public function all(Request $request) {
        $parameters = $request->all();
        if (!isset($parameters['lang'])) {
            return response()->json(['error' => __('Parameters invalid or missing')], 403);
        }
        try {
            $json = File::get(base_path() . '/lang/' . $parameters['lang'] . '.json');
        } catch (\Exception $e) {
            return response()->json(['error' => __('Translation not found')], 404);
        }
        return json_decode($json, true);
    }
}
