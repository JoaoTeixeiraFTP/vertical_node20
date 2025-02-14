<?php

declare(strict_types=1);

namespace App\Actions\Vertical;

use Carbon\Carbon;
use Carbon\Factory;
use Illuminate\Support\Collection;

final class GetAvailableMonths
{
    public function execute(array $dates, string $field): Collection
    {
        $ptFactory = new Factory([
            'locale' => 'pt_PT',
            'timezone' => 'Europe/Lisbon',
        ]);

        return collect($dates)
            ->map(function ($date) use ($ptFactory, $field) {
                return ucfirst($ptFactory->make(Carbon::create($date[$field]))->monthName); // Extrai o número do mês
            })
            ->unique() // Remove duplicados
            ->sort() // Ordena os meses
            ->values(); // Reinicia os índices
    }
}
