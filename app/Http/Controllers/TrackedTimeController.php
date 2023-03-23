<?php

namespace App\Http\Controllers;

use App\Models\TrackedTime;
use App\Traits\EditDeleteFunctions;
use App\Traits\GetFunctions;

class TrackedTimeController extends Controller
{
    use EditDeleteFunctions;
    use GetFunctions;
    protected $model = TrackedTime::class;
}
