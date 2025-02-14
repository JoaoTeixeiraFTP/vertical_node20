<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Models\Api\Datalink;
use App\Models\Api\Vertical;
use App\Shared\Exceptions\ApiRequestException;
use App\Shared\Repositories\Repository;
use App\Shared\Result;
use Exception;
use Throwable;

final class DatalinkRepository extends Repository
{
    /**
     * @throws ApiRequestException
     */
    public function isVerticalActive($subscriber): Result
    {
        try {
            $result = Vertical::query()
                ->token($subscriber['data']['access_token'])
                ->get()
                ->wait();

            return new Result([
                'data' => $result['data'],
                'errorMessages' => $result['errorMessages'],
                'status' => $result['status'],
            ]);
        } catch (Exception $e) {
            // Re-throw para tratar em outros níveis, se necessário
            throw new ApiRequestException('Erro ao verificar se Vertical esta ativo: '.$e->getMessage(), $e->getCode(), $e);
        }
    }

    /**
     * @throws ApiRequestException
     */
    public function getToken(?string $email = null, ?string $password = null): Result
    {
        try {
            $result = Datalink::query()
                ->args()
                ->email($email)
                ->password($password)
                ->post();

            return new Result([
                'data' => $result['data'],
                'errorMessages' => $result['errorMessages'],
                'status' => $result['status'],
            ]);
        } catch (Throwable $e) {
            // Re-throw para tratar em outros níveis, se necessário
            throw new ApiRequestException("Erro ao pedir token referente ao user($email): ".$e->getMessage(), $e->getCode(), $e);
        }
    }
}
