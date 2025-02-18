<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Api\Orders;
use App\Shared\Controllers\Controller;
use Illuminate\Http\Request;

final class OrdersController extends Controller
{
    public function index(Request $request, $subscriber)
    {
        $page = $request->get('page', 1);
        $perPage = 15;

        $rows = Orders::fakeData();

        $offset = ($page - 1) * $perPage;
        $pagedData = array_slice($rows, $offset, $perPage);

        $total = count($rows);
        $totalPages = ceil($total / $perPage);

        return view('pages.orders.orders', compact('pagedData', 'page', 'total', 'totalPages', 'perPage', 'subscriber'));
    }
}
