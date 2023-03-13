<?php

namespace App\Http\Controllers;

use App\Models\TrackingType;
use App\Traits\EditDeleteFunctions;
use App\Traits\GetFunctions;

class TrackingTypeController extends Controller
{
    use EditDeleteFunctions;
    use GetFunctions;
    protected $model = TrackingType::class;
}
