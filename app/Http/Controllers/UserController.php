<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Traits\EditDeleteFunctions;
use App\Traits\GetFunctions;

class UserController extends Controller
{
    use EditDeleteFunctions;
    use GetFunctions;
    protected $model = User::class;
}
