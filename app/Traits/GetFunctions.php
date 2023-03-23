<?php

namespace App\Traits;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;

/**
 * TODO:
 * action based checks ob man das darf.
 */
trait GetFunctions {
    private array $allowed_operators = ['=', '>', '<', '>=', '<=', '!='];

    public function get($id) {
        return $this->model::find($id);
    }

    public function all(Request $request) {
        $filters = $request->get('filter') ?? [];
        if (is_string($filters)) {
            $filters = json_decode($filters, true);
        }
        if (count($filters) === 0) {
            return $this->model::all();
        }
        $where = [];
        foreach ($filters as $fieldname => $filter) {
            foreach ($filter as $operator => $value) {
                if (!Schema::hasColumn((new $this->model)->getTable(), $fieldname)) {
                    // todo: gscheite meldung
                    return $fieldname . ' not in ' . (new $this->model)->getTable();
                }
                if (!in_array($operator, $this->allowed_operators)) {
                    // todo: gscheite meldung
                    return 'invalid operator';
                }
                $where[] = [$fieldname, $operator, $value];
            }
        }
        if (count($where) > 0) {
            return $this->model::where($where)->get();
        } else {
            return $this->model::all();
        }
    }
}

