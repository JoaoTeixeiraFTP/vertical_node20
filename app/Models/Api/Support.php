<?php

declare(strict_types=1);

namespace App\Models\Api;

use App\Shared\Services\RequestBuilder;
use BadMethodCallException;

final class Support
{
    private static array $params = [
        'no',
        'pastamp',
        'status',
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
        return new RequestBuilder(endpoint: 'phc/Vertical/pa'); // Define o endpoint
    }
}
