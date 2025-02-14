<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Shared\Controllers\Controller;

final class VerticalController extends Controller
{
    public function index()
    {
        return view('pages.home');
    }
}
