<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Http\Controllers\SubscriberController;
use App\Models\Api\CurrentAccount;
use App\Models\Api\Invoices;
use App\Models\Api\Receipts;
use App\Shared\Repositories\Repository;
use App\Shared\Result;
use GuzzleHttp\Promise\PromiseInterface;
use Illuminate\Foundation\Application;
use Illuminate\Http\RedirectResponse;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Throwable;

final class FinanceRepository extends Repository
{
    public function __construct()
    {
        parent::__construct();

        $this->datalink = new DatalinkRepository;
    }

    public function getAllInvoices(): PromiseInterface
    {
        return Invoices::query()
            ->token(Auth::user()->get_subscriber->access_token)
            ->no(Auth::user()->no)
            ->filter('onlyheaders')
            ->get();
    }

    public function getPaginatedInvoices(int $page, int $perPage): PromiseInterface
    {
        return Invoices::query()
            ->token(Auth::user()->get_subscriber->access_token)
            ->no(Auth::user()->no)
            ->paginate(perPage: $perPage, page: $page);
    }

    public function getAllCurrentAccount(): PromiseInterface
    {
        return CurrentAccount::query()
            ->token(Auth::user()->get_subscriber->access_token)
            ->no(Auth::user()->no)
            ->get();
    }

    public function getPaginatedCurrentAccount(int $page, int $perPage): PromiseInterface
    {
        return CurrentAccount::query()
            ->token(Auth::user()->get_subscriber->access_token)
            ->no(Auth::user()->no)
            ->paginate(page: $page, perPage: $perPage);
    }

    public function getAllReceipts(): PromiseInterface
    {
        return Receipts::query()
            ->token(Auth::user()->get_subscriber->access_token)
            ->no(Auth::user()->no)
            ->get();
    }

    public function getPaginatedReceipts(int $page, int $perPage): PromiseInterface
    {
        return Receipts::query()
            ->token(Auth::user()->get_subscriber->access_token)
            ->no(Auth::user()->no)
            ->paginate(page: $page, perPage: $perPage);
    }

    public function getDocument(string $document, string $id, int $page = 1): Application|RedirectResponse|Redirector|Result
    {
        $result = null;
        $messages = [];
        $code = null;
        $searchField = '';

        try {
            // invoices         -> ftstamp
            // current-account  -> ccstamp
            if ($document === 'invoices') {
                $searchField = 'ftstamp';
            } elseif ($document === 'current-account') {
                $searchField = 'ccstamp';
            } elseif ($document === 'receipts') {
                $searchField = 'restamp';
            }

            $user = Auth::user();

            $filter = '?'.$searchField.'='.trim($id);

            $subscriber = (new SubscriberController)->getSubscriber($user->subscriber);

            $args = [
                'headers' => [
                    'Authorization' => 'Bearer '.$subscriber['access_token'],
                    'Content-Type' => 'application/json',
                    'Accept' => 'application/json',
                ],
            ];

            $response = $this->fetch->request('GET', $this->api::ENDPOINTS[$document].$filter, $args);

            $body = json_decode($response->getBody()->getContents(), true);

            if (! isset($body['data'])) {
                if ($body['message'] === 'Token Expired') {
                    $messages = 'Token Expired';
                }
            }

            $result = $body['data'];

        } catch (Throwable $e) {
            report($e);
            $messages[] = $e;
            $code = 406;
        }

        return new Result([
            'data' => $result,
            'errorMessages' => $messages,
            'status' => $code,
        ]);
    }

    public function getWeather(): Result
    {
        $apiKey = '10982b6f91413c7e2205c4932a4c7797';
        $city = 'Lisbon';

        $response = Http::get('https://api.openweathermap.org/data/2.5/weather', [
            'q' => $city,
            'appid' => $apiKey,
            'lang' => 'pt',
        ]);

        if ($response->successful()) {
            $weatherData = $response->json();
        } else {
            $weatherData = null;
        }

        return new Result([
            'data' => $weatherData,
            'errorMessages' => null,
            'status' => null,
        ]);
    }

    public function getNews()
    {
        $cacheKey = 'news_data';
        $cacheDuration = 60; // duração cache

        if (Cache::has($cacheKey)) {
            return Cache::get($cacheKey);
        }

        $apiKey = 'c9c20ec14d0d490cb5cf79841333f8cd';

        $businessHeadlinesResponse = Http::withHeaders([
            'x-api-key' => $apiKey,
        ])->get('https://newsapi.org/v2/top-headlines', [
            'country' => 'us',
            'category' => 'business',
        ]);

        $techCrunchHeadlinesResponse = Http::withHeaders([
            'x-api-key' => $apiKey,
        ])->get('https://newsapi.org/v2/top-headlines', [
            'sources' => 'techcrunch',
        ]);

        $businessHeadlinesData = $businessHeadlinesResponse->successful() ? $businessHeadlinesResponse->json() : null;
        $techCrunchHeadlinesData = $techCrunchHeadlinesResponse->successful() ? $techCrunchHeadlinesResponse->json() : null;

        $result = new Result([
            'data' => [
                'businessHeadlines' => $businessHeadlinesData ? $businessHeadlinesData['articles'] : [],
                'techCrunchHeadlines' => $techCrunchHeadlinesData ? $techCrunchHeadlinesData['articles'] : [],
            ],
            'errorMessages' => null,
            'status' => null,
        ]);

        Cache::put($cacheKey, $result, $cacheDuration * 60); // request de hora em hora

        return $result;
    }
}
