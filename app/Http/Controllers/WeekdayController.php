<?php

namespace App\Http\Controllers;

use App\Models\Weekday;
use App\Traits\GetFunctions;

class WeekdayController extends Controller
{
    use GetFunctions {
        GetFunctions::get as parentGet;
        GetFunctions::all as parentAll;
    }
    protected $model = Weekday::class;

    public function get($id) {
        $element = $this->parentGet($id);
        $element->name = __($element->name);
        return $element;
    }

    public function all() {
        $elements = $this->parentAll();
        foreach ($elements as &$element) {
            $element->name = __($element->name);
        }
        return $elements;
    }
}
