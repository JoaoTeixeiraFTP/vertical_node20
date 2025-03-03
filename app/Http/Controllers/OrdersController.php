<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Api\Orders;
use App\Shared\Controllers\Controller;
use Illuminate\Pagination\LengthAwarePaginator;
use Inertia\Inertia;
use Inertia\Response;

final class OrdersController extends Controller
{
    public function index(): Response
    {
        $page = request()->input('page', 1);
        $per_page = request()->input('per_page', 15);

        $rows = Orders::fakeData();

        $offset = ($page - 1) * $per_page;
        $pagedData = array_slice($rows, $offset, $per_page);

        $total = count($rows);
        $totalPages = ceil($total / $per_page);

        return Inertia::render(
            'orders', [
                'orders' => Inertia::defer(fn () => new LengthAwarePaginator(
                    items: collect($pagedData ?? []),
                    total: $totalPages,
                    perPage: $per_page,
                    currentPage: $page,
                    options: [
                        'path' => request()->url(),
                        'query' => request()->query(),
                    ])
                )]
        );
    }
}
