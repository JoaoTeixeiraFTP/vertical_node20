<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Actions\Vertical\GetNews;
use App\Models\Api\CurrentAccount;
use App\Shared\Controllers\Controller;
use App\Shared\Result;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

final class HomeController extends Controller
{

    public function __construct()
    {
    }

    /**
     * Show the application dashboard.
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('home');
    }

    /**
     * @throws ConnectionException
     */
    public function getNews(GetNews $news): Result
    {
        return $news->handler();
    }
}
