<?php

namespace App\Http\Controllers;

use App\Models\Workingminutes;
use App\Traits\EditDeleteFunctions;
use App\Traits\GetFunctions;

class WorkingminutesController extends Controller
{
    use EditDeleteFunctions;
    use GetFunctions;
    protected $model = Workingminutes::class;
}
