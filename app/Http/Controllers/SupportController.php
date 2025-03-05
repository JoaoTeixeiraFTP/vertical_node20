<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Api\Support;
use App\Shared\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

final class FinanceController extends Controller
{
    public function __construct() {}

    /**
     * Show the application dashboard.
     */
    public function index(): Response
    {
    }


    /**
     * Show the application dashboard.
     */
    public function supportPage(): Response
    {
        $page = request()->input('page', 1);
        $per_page = request()->input('per_page', 15);

        return Inertia::render('support', [
            'support' => Inertia::defer(fn () => Support::fetch()
                ->token(Auth::user()->get_subscriber->access_token)
                ->no(Auth::user()->no)
                ->paginate(perPage: $per_page, page: (int) $page))->merge(),
        ]);
    }
}
