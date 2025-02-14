<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

final class CreateParentUsersTable extends Migration
{
    public function up()
    {
        Schema::create('parent_users', function (Blueprint $table) {
            $table->id();
            $table->string('client')->unique();
            $table->string('email');
            $table->string('password');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('parent_users');
    }
}
