<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Weekday extends Model
{
    use HasFactory;

    public function workingMinutes(): HasMany {
        return $this->hasMany(Workingminutes::class);
    }
}
