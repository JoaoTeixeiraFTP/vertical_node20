<?php

declare(strict_types=1);

namespace App\Shared;

/**
 * List of all ROUTES needed to FTP Webservice and Connection related
 */
final class DatalinkRoutes
{
    public const DATALINK = 'https://phc.erpdatalink.com/api/';

    public const ENDPOINTS = [
        'apiLogin' => 'auth/login',
        'clients' => 'phc/clients',
        'vertical' => 'phc/Vertical',
        'faturas' => 'phc/Vertical/faturas',
        'products' => 'phc/products',
        'invoices' => 'phc/invoices',
        'receipts' => 'phc/Vertical/recibos',
        'current-account' => 'phc/clients/currentaccount',
    ];

    public $helpers;
}
