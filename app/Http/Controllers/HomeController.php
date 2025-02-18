<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Actions\Vertical\GetNews;
use App\Models\Api\CurrentAccount;
use App\Models\Api\Invoices;
use App\Models\Api\Receipts;
use App\Shared\Controllers\Controller;
use App\Shared\Result;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

final class HomeController extends Controller
{
    public function __construct() {}

    /**
     * Show the application dashboard.
     */
    public function index(GetNews $news): Response
    {
        return Inertia::render('home', [
            'invoices' => Inertia::defer(fn () => Invoices::fetch()
                ->token(Auth::user()->get_subscriber->access_token)
                ->no(Auth::user()->no)
                ->filter('onlyheaders')
                ->get()),
            'currentAccount' => Inertia::defer(fn () => CurrentAccount::fetch()
                ->token(Auth::user()->get_subscriber->access_token)
                ->no(Auth::user()->no)
                ->get()
                ->wait()),
            'receipts' => Inertia::defer(fn () => Receipts::fetch()
                ->token(Auth::user()->get_subscriber->access_token)
                ->no(Auth::user()->no)
                ->get()),
            'news' => Inertia::defer(fn () => $news->handler()),
        ]);
    }

    /**
     * @throws ConnectionException
     */
    public function getNews(GetNews $news): Result
    {
        return $news->handler();
    }
}
