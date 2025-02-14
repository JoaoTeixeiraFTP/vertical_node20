<?php

declare(strict_types=1);

namespace App\Shared;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

final class Result extends JsonResource
{
    /**
     * Constrói uma estrutura padrão para o JSON.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'status' => $this->resource['status'] ?? null,
            'data' => $this->resource['data'] ?? null,
            'errorMessages' => $this->resource['errorMessages'] ?? [],
        ];
    }

    /**
     * Retorna uma resposta HTTP pronta.
     */
    public function withResponse(Request $request, $response): JsonResponse
    {
        if (! empty($this->resource['errorMessages']) && empty($this->resource['status'])) {
            return $response->setStatusCode($this->resource['status'] ?? 400); // Código de erro padrão
        }

        return $response->setStatusCode($this->resource['status'] ?? 200); // Código de sucesso padrão

    }
}
