<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('name');
            $table->string('firstname');
            $table->string('lastname');
        });
        Schema::create('weekdays', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });
        $data = [
            ['name' => 'Monday'],
            ['name' => 'Tuesday'],
            ['name' => 'Wednesday'],
            ['name' => 'Thursday'],
            ['name' => 'Friday'],
            ['name' => 'Saturday'],
            ['name' => 'Sunday'],
        ];
        DB::table('weekdays')->insert($data);
        Schema::create('tracking_types', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });
        $data = [
            ['name' => 'Default'],
            ['name' => 'Homeoffice'],
            ['name' => 'Sick Leave'],
        ];
        DB::table('tracking_types')->insert($data);
        Schema::create('workingminutes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('weekday_id');
            $table->integer('minutes');
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('weekday_id')->references('id')->on('weekdays');
        });
        Schema::create('tracked_times', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('weekday_id');
            $table->unsignedBigInteger('tracking_type_id');
            $table->timestamps();
            $table->timestamp('start');
            $table->integer('minutes');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('weekday_id')->references('id')->on('weekdays');
            $table->foreign('tracking_type_id')->references('id')->on('tracking_types');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('weekdays');
        Schema::dropIfExists('workingminutes');
        Schema::dropIfExists('tracking_types');
        Schema::dropIfExists('tracked_times');
    }
};
