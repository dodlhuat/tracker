<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Workingminutes extends Model
{
    use HasFactory;

    public $mandatory = ['name'];

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }

    public function weekday(): BelongsTo {
        return $this->belongsTo(Weekday::class);
    }
}
