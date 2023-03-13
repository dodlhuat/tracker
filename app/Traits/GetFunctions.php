<?php

namespace App\Traits;

/**
 * TODO:
 * action based checks ob man das darf.
 */

trait GetFunctions {
    public function get($id) {
        return $this->model::find($id);
    }

    public function all() {
        return $this->model::all();
    }
}

