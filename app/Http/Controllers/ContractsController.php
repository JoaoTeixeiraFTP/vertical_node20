<?php

namespace App\Http\Controllers;

use App\Shared\Controllers\Controller;

final class ContractsController extends Controller
{
    public function index()
    {
        $contracts = collect([
            (object) [
                'id' => 1,
                'client' => 'Empresa Alpha',
                'value' => 15000.50,
                'status' => 'active',
                'start_date' => '2024-01-01',
                'end_date' => '2025-01-01',
            ],
            (object) [
                'id' => 2,
                'client' => 'Beta Solutions',
                'value' => 9800.75,
                'status' => 'inactive',
                'start_date' => '2023-06-15',
                'end_date' => '2024-06-15',
            ],
            (object) [
                'id' => 3,
                'client' => 'Gamma Tech',
                'value' => 21000.00,
                'status' => 'active',
                'start_date' => '2022-11-20',
                'end_date' => '2025-11-20',
            ],
            (object) [
                'id' => 4,
                'client' => 'Delta Corp',
                'value' => 12345.67,
                'status' => 'inactive',
                'start_date' => '2023-05-10',
                'end_date' => '2024-05-10',
            ],
            (object) [
                'id' => 5,
                'client' => 'Epsilon Ltd.',
                'value' => 7650.30,
                'status' => 'active',
                'start_date' => '2024-02-01',
                'end_date' => '2025-02-01',
            ],
        ]);

        return view('pages.contracts.contracts', compact('contracts'));
    }
}
