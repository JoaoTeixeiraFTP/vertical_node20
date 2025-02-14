<?php

declare(strict_types=1);

namespace App\Shared\Repositories;

use App\Repositories\DatalinkRepository;
use App\Shared\BaseRepository;

class Repository extends BaseRepository
{
    protected DatalinkRepository $datalink;
}
