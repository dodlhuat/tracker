<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/token-check', function () {
    return ['message' => 'Authenticated', 'valid' => true];
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/auth/login', [\App\Http\Controllers\Api\AuthController::class, 'login']);


# workingminutes
Route::middleware('auth:sanctum')->post('/workingminutes', function () {
    return App::call('App\Http\Controllers\WorkingminutesController@edit');
});
Route::middleware('auth:sanctum')->delete('/workingminutes/{id}', function ($id) {
    return App::call('App\Http\Controllers\WorkingminutesController@delete' , ['id' => $id]);
});
Route::middleware('auth:sanctum')->get('/workingminutes/{id}', function ($id) {
    return App::call('App\Http\Controllers\WorkingminutesController@get' , ['id' => $id]);
});
Route::middleware('auth:sanctum')->get('/workingminutes', function () {
    return App::call('App\Http\Controllers\WorkingminutesController@all');
});

# todo: trackedtime hinzufügen / bearbeiten / löschen / laden für definierte periode

# todo: user hinzufügen / bearbeiten / löschen / laden

# todo: weekdays laden
Route::middleware('auth:sanctum')->get('/weekdays/{id}', function ($id) {
    return App::call('App\Http\Controllers\WeekdayController@get' , ['id' => $id]);
});
Route::middleware('auth:sanctum')->get('/weekdays', function () {
    return App::call('App\Http\Controllers\WeekdayController@all');
});

# todo: trackingtypes laden

// translation endpoint
Route::middleware('auth:sanctum')->get('/translate', function () {
    return App::call('App\Http\Controllers\TranslationController@translate');
});
Route::middleware('auth:sanctum')->get('/translate/all', function () {
    return App::call('App\Http\Controllers\TranslationController@all');
});