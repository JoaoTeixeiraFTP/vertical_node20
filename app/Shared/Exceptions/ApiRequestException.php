<?php

declare(strict_types=1);

namespace App\Shared\Exceptions;

use Exception;
use Illuminate\Support\Facades\Log;

final class ApiRequestException extends Exception
{
    public function __construct($message, $code = 0, ?Exception $previous = null)
    {
        Log::error(
            $message,
            [
                'error' => $previous,
                'status_code' => $code,
            ]
        );

        parent::__construct($message, $code, $previous);
    }
}
