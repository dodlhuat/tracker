<?php
namespace App\Traits;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;

trait FilterFunctions {
    private $allowed_operators = [
        '>','<','<=','>=','=','LIKE'
    ];
    public function filter(Request $request) {
        $where = [];
        $filters = $request->get('filter') ?? [];
        foreach ($filters as $fieldname => $filter) {
            foreach($filter as $operator => $value) {
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

        // return $request->get('filter');
    }
}
