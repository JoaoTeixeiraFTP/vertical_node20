<?php

declare(strict_types=1);

namespace App\Models\Api;

use App\Shared\Services\RequestBuilder;
use BadMethodCallException;

final class Orders
{
    private static array $params = [
        'order_number',
        'client_name',
        'address',
        'location',
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
        return new RequestBuilder(endpoint: 'phc/orders'); // Define o endpoint
    }

    // Função para retornar dados fictícios
    public static function fakeData(): array
    {
        return [
            [
                'order_number' => 'ORD133',
                'client_name' => 'Ritmos Quentes, lda',
                'address' => 'Caminho Senhora Piedade',
                'location' => 'Bairro Além do Rio',
                'status' => 'Pendente',
            ],
            [
                'order_number' => 'ORD372',
                'client_name' => 'Fernando Martins',
                'address' => 'Praceta Padre Chiquito',
                'location' => 'Santarém',
                'status' => 'Concluída',
            ],
            [
                'order_number' => 'ORD639',
                'client_name' => 'Eira e Beira, lda',
                'address' => 'Rua Almirante Pinheiro de Azevedo',
                'location' => 'Ameijeira',
                'status' => 'Em andamento',
            ],
        ];
    }
}
