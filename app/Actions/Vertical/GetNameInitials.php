<?php

declare(strict_types=1);

namespace App\Actions\Vertical;

final class GetNameInitials
{
    public function execute(string $fullName): string
    {
        $names = explode(' ', trim($fullName));
        $firstInitial = mb_strtoupper(mb_substr($names[0], 0, 1));
        $lastInitial = mb_strtoupper(mb_substr(end($names), 0, 1));

        return $firstInitial.$lastInitial;
    }
}
