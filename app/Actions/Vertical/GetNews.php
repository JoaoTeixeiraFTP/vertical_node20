<?php

namespace App\Actions\Vertical;

use App\Shared\Result;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;

class GetNews {
    /**
     * @throws ConnectionException
     */
    public function handler(): Result {
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
