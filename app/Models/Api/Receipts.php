<?php

declare(strict_types=1);

namespace App\Models\Api;

use App\Shared\Services\RequestBuilder;
use BadMethodCallException;

final class Receipts
{
    private static array $params = [
        'no',
        'restamp',
    ];

    public static function __callStatic($method, $arguments)
    {
        if (in_array($method, self::$params)) {
            return self::fetch()->$method(...$arguments);
        }

        throw new BadMethodCallException("O método {$method} não está disponível no builder.");
    }

    public static function fetch(): RequestBuilder
    {
        return new RequestBuilder(endpoint: 'phc/Vertical/recibos'); // Define o endpoint
    }
}
