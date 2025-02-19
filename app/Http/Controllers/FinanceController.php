<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Api\CurrentAccount;
use App\Models\Api\Invoices;
use App\Models\Api\Receipts;
use App\Shared\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

final class FinanceController extends Controller
{
    public function __construct() {}

    /**
     * Show the application dashboard.
     */
    public function index(): Response
    {
        return Inertia::render('finance/finance-dashboard', [
            'invoices' => Inertia::defer(fn () => Invoices::fetch()
                ->token(Auth::user()->get_subscriber->access_token)
                ->no(Auth::user()->no)
                ->filter('onlyheaders')
                ->get()
                ->wait()),
            'currentAccount' => Inertia::defer(fn () => CurrentAccount::fetch()
                ->token(Auth::user()->get_subscriber->access_token)
                ->no(Auth::user()->no)
                ->get()
                ->wait()),
            'receipts' => Inertia::defer(fn () => Receipts::fetch()
                ->token(Auth::user()->get_subscriber->access_token)
                ->no(Auth::user()->no)
                ->get()
                ->wait()),
        ]);
    }

    public function getAllCurrentAccount()
    {
        return CurrentAccount::fetch()
            ->token(Auth::user()->get_subscriber->access_token)
            ->no(Auth::user()->no)
            ->get()
            ->wait();
    }

    /**
     * Show the application dashboard.
     */
    public function invoicePage(): Response
    {
        $page = request()->input('page', 1);
        $per_page = request()->input('per_page', 15);

        return Inertia::render('finance/invoices', [
            'invoices' => Inertia::defer(fn () => Invoices::fetch()
                ->token(Auth::user()->get_subscriber->access_token)
                ->no(Auth::user()->no)
                ->filter('onlyheaders')
                ->paginate(perPage: $per_page, page: (int) $page))->merge(),
        ]);
    }

    /**
     * Show the application dashboard.
     */
    public function currentAccountPage(): Response
    {
        $page = request()->input('page', 1);
        $per_page = request()->input('per_page', 15);

        return Inertia::render('finance/current-account', [
            'currentAccount' => Inertia::defer(fn () => CurrentAccount::fetch()
                ->token(Auth::user()->get_subscriber->access_token)
                ->no(Auth::user()->no)
                ->paginate(perPage: $per_page, page: (int) $page))->merge(),
        ]);
    }

    /**
     * Show the application dashboard.
     */
    public function receiptsPage(): Response
    {
        $page = request()->input('page', 1);
        $per_page = request()->input('per_page', 15);

        return Inertia::render('finance/receipts', [
            'receipt' => Inertia::defer(fn () => Receipts::fetch()
                ->token(Auth::user()->get_subscriber->access_token)
                ->no(Auth::user()->no)
                ->paginate(perPage: $per_page, page: (int) $page))->merge(),
        ]);
    }

    public function notregularizedPage(): Response
    {
        $page = request()->input('page', 1);
        $per_page = request()->input('per_page', 15);

        return Inertia::render('finance/notregularized', [
            'notregularized' => Inertia::defer(fn () => CurrentAccount::fetch()
                ->token(Auth::user()->get_subscriber->access_token)
                ->no(Auth::user()->no)
                ->paginate(perPage: $per_page, page: (int) $page))->merge(),
        ]);
    }

    /**
     * Show the application dashboard.
     */
    public function documentPage($document, $id): Response
    {
        $fetch = null;
        $page = null;

        if ($document === 'invoices' || $document === 'billing') {
            $fetch = Invoices::fetch()
                ->ftstamp($id);
            $page = 'finance/document/invoice-document';
        } elseif ($document === 'current-account') {
            $fetch = CurrentAccount::fetch()
                ->ccstamp(trim($id));
            $page = 'finance/document/account-document';
        } elseif ($document === 'receipts') {
            $fetch = Receipts::fetch()
                ->restamp($id)
                ->no(Auth::user()->no);
            $page = 'finance/document/receipt-document';
        } elseif ($document === 'notregularized') {
            $fetch = CurrentAccount::fetch()
                ->ccstamp($id);
            $page = 'finance/document/notregularized-document';
        }

        return Inertia::render($page, [
            'document' => Inertia::defer(fn () => $fetch
                ->token(Auth::user()->get_subscriber->access_token)
                ->get()
                ->wait()),
        ]);
    }
}
