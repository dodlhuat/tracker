<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class TrackedTime extends Model
{
    use HasFactory;

    public function user(): HasOne {
        return $this->hasOne(User::class);
    }

    public function weekday(): HasOne {
        return $this->hasOne(Weekday::class);
    }

    public function trackingType(): HasOne {
        return $this->hasOne(TrackingType::class);
    }
}
