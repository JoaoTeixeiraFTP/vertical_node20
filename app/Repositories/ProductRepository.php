<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Shared\Repositories\Repository;
use App\Shared\Result;
use Illuminate\Support\Facades\Auth;

final class ProductRepository extends Repository
{
    public function __construct()
    {
        parent::__construct();

        $this->datalink = new DatalinkRepository;
    }

    public function getProducts(int $page = 1)
    {
        $user = Auth::user();
        $args = [
            'headers' => [
                'Authorization' => 'Bearer '.$user['access_token'],
                'Content-Type' => 'application/json',
                'Accept' => 'application/json',
            ],
        ];
        $filter = '?page='.$page.'&limit=25';

        $response = $this->fetch->request('GET', $this->api::ENDPOINTS['products'].$filter, $args);
        $body = json_decode($response->getBody()->getContents(), true);

        if (! isset($body['data'])) {
            if ($body['message'] === 'Token Expired') {
                $messages = 'Token Expired';
            }
        }

        return new Result([
            'data' => $body['data'],
            'errorMessages' => [$body['message']],
            'status' => $body['status_code'],
        ]);
    }
}
