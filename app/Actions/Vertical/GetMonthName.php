<?php

declare(strict_types=1);

namespace App\Actions\Vertical;

use Carbon\Carbon;
use Carbon\Factory;

final class GetMonthName
{
    public function execute(string $date): string
    {
        $ptFactory = new Factory([
            'locale' => 'pt_PT',
            'timezone' => 'Europe/Lisbon',
        ]);

        return ucfirst($ptFactory->make(Carbon::create($date))->monthName);
    }
}
