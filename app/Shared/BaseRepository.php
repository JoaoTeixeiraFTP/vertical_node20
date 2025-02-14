<?php

declare(strict_types=1);

namespace App\Shared;

use GuzzleHttp\Client;

abstract class BaseRepository
{
    protected Client $fetch;

    protected DatalinkRoutes $api;

    public function __construct()
    {
        $this->api = new DatalinkRoutes();
        $this->fetch = new Client([
            'base_uri' => $this->api::DATALINK,
        ]);
    }
}
