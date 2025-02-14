<?php

namespace App\Models\Api;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contracts extends Model
{
    use HasFactory;

    protected $fillable = [
        'client',
        'value',
        'status',
        'start_date',
        'end_date',
    ];
}
