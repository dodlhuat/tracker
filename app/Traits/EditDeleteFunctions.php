<?php

namespace App\Traits;

use Illuminate\Http\Request;

trait EditDeleteFunctions
{
    public function edit(Request $request) {
        $parameters = $request->all();
        foreach ((new $this->model)->mandatory as $field) {
            if (!isset($parameters[$field])) {
                return response()->json(['error' => __('Parameters invalid or missing')], 403);
            }
        }
        # todo: mach was mit den gesetzten parametern
        $response = [];
        if (isset($parameters['id'])) {
            $response['success'] = __('Update successful');
        } else {
            $response['success'] = __('Insert successful');
        }
        return response()->json($response);
    }

    public function delete($id) {
        # todo: implement delete
    }
}
