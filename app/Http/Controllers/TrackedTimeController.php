<?php

namespace App\Http\Controllers;

use App\Models\TrackedTime;
use App\Traits\EditDeleteFunctions;
use App\Traits\GetFunctions;
use App\Traits\FilterFunctions;

class TrackedTimeController extends Controller
{
    use EditDeleteFunctions;
    use GetFunctions;
    use FilterFunctions;
    protected $model = TrackedTime::class;
}
