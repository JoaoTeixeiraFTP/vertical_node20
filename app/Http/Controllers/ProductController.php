<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\DataFeed;
use App\Shared\Controllers\Controller;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;

final class ProductController extends Controller
{


    public function __construct()
    {
    }

    public function index()
    {
        $dataFeed = new DataFeed();

        return view('pages.products.main', compact('dataFeed'));
    }

    /**
     * Displays the products screen
     */
    public function getAllProducts(): Factory|View
    {
        $result = $this->productRepository->getProducts();

        return view('pages.products.list', compact('result'));
    }
}
