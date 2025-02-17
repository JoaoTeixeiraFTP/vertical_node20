<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Actions\Vertical\GetAvailableMonths;
use App\Actions\Vertical\GetAvailableYears;
use App\Models\Api\CurrentAccount;
use App\Models\Api\Invoices;
use App\Models\Api\Receipts;
use App\Shared\Controllers\Controller;
use App\Shared\Result;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

final class FinanceController extends Controller
{

    public function __construct()
    {
    }

    // METODOS QUE RENDIRIZAM AS PAGINAS

    /**
     * Show the application dashboard.
     *
     * @param GetAvailableMonths $getAvailableMonths
     * @param GetAvailableYears $getAvailableYears
     * @return Factory|View
     * @return Renderable
     */
    public function index(GetAvailableMonths $getAvailableMonths, GetAvailableYears $getAvailableYears): Factory|View
    {
        $invoices = $this->financeRepository->getAllInvoices()->wait();
        $currentAccounts = $this->financeRepository->getAllCurrentAccount()->wait();
        $receipts = $this->financeRepository->getAllReceipts()->wait();

        if ($invoices instanceof Result && $currentAccounts instanceof Result && $receipts instanceof Result) {
            $monthsInvoices = $getAvailableMonths->execute($invoices['data'], 'fdata');
            $monthsCurrentAccounts = $getAvailableMonths->execute($currentAccounts['data'], 'usrdata');

            $months = $monthsInvoices->merge($monthsCurrentAccounts)->unique();

            $yearsInvoices = $getAvailableYears->execute($invoices['data'], 'fdata');
            $yearsCurrentAccounts = $getAvailableYears->execute($currentAccounts['data'], 'usrdata');

            $years = $yearsInvoices->merge($yearsCurrentAccounts)->unique();

            return view('pages.finances.main', [
                'months' => $months,
                'years' => $years,
                'invoices' => $invoices,
                'currentAccounts' => $currentAccounts,
                'receipts' => $receipts,
            ]);
        }
        // Caso o resultado não seja esperado, pode tratar o erro aqui
        abort(500, 'Erro inesperado no processamento.');
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
     *
     * @return Response
     */
    public function invoicePage(): Response
    {
        $page = request()->input('page', 1);
        $per_page = request()->input('per_page', 15);

        return Inertia::render('finance/invoices', [
            'invoices' => Inertia::defer(fn () =>
            Invoices::fetch()
                ->token(Auth::user()->get_subscriber->access_token)
                ->no(Auth::user()->no)
                ->filter('onlyheaders')
                ->paginate(perPage: $per_page, page: (int)$page))->merge()
        ]);
    }

    /**
     * Show the application dashboard.
     *
     * @return Response
     */
    public function currentAccountPage(): Response
    {
        $page = request()->input('page', 1);
        $per_page = request()->input('per_page', 15);

        return Inertia::render('finance/current-account', [
            'currentAccount' => Inertia::defer(fn() =>
            CurrentAccount::fetch()
                ->token(Auth::user()->get_subscriber->access_token)
                ->no(Auth::user()->no)
                ->paginate(perPage: $per_page, page: (int)$page))->merge()
        ]);
    }

    /**
     * Show the application dashboard.
     *
     * @return Response
     */
    public function receiptsPage(): Response
    {
        $page = request()->input('page', 1);
        $per_page = request()->input('per_page', 15);

        return Inertia::render('finance/receipts', [
            'receipt' => Inertia::defer(fn() =>
            Receipts::fetch()
                ->token(Auth::user()->get_subscriber->access_token)
                ->no(Auth::user()->no)
                ->paginate(perPage: $per_page, page: (int)$page))->merge()
        ]);
    }

    // METODOS QUE RETORNAM OS DADOS PARA AS PAGINAS

    public function getPaginatedInvoices(int $page, int $perPage): Result|LengthAwarePaginator
    {
        $result = $this->financeRepository->getPaginatedInvoices($page, $perPage)->wait();

        if (! isset($result['data'])) {
            if ($result['message'] === 'Token Expired') {
                $messages = 'Token Expired';
            }
        }

        return $result;
    }

    public function getPaginatedCurrentAccount(int $page, int $perPage): Result|LengthAwarePaginator
    {
        $result = $this->financeRepository->getPaginatedCurrentAccount(page: $page, perPage: $perPage)->wait();

        if (! isset($result['data'])) {
            if ($result['message'] === 'Token Expired') {
                $messages = 'Token Expired';
            }
        }

        return $result;
    }

    public function getPaginatedReceipts(int $page, int $perPage): Result|LengthAwarePaginator
    {
        $result = $this->financeRepository->getPaginatedReceipts(page: $page, perPage: $perPage)->wait();

        if (! isset($result['data'])) {
            if ($result['message'] === 'Token Expired') {
                $messages = 'Token Expired';
            }
        }

        return $result;
    }

    /**
     * Show the application dashboard.
     *
     * @return Renderable
     */
    public function getDocument($client, $document, $id): Renderable
    {
        $result = $this->financeRepository->getDocument($document, $id);

        // Determine the type of document
        $type = match (mb_strtolower($document)) {
            'invoices' => 'billing',
            'billing' => 'billing',
            'receipts' => 'receipt',
            'receipt' => 'receipt',
            'current-account' => 'account-statement',
            'account-statement' => 'account-statement',
            default => 'unknown',
        };

        return view('pages.finances.document', compact('result', 'type'));
    }
}
