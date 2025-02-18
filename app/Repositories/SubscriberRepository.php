<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Models\Subscriber;
use App\Shared\Repositories\Repository;
use App\Shared\Result;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Throwable;

final class SubscriberRepository extends Repository
{
    public function __construct()
    {
        parent::__construct();

        $this->datalink = new DatalinkRepository;
    }

    public function getSubscriber(string $url): Result
    {
        $result = null;
        $messages = [];
        $code = null;

        try {
            $subscriber = Subscriber::where('url', $url)->first();

            if ($subscriber) {
                $apiResponse = $this->datalink->getToken($subscriber->email, $subscriber->password);
                $statusVertical = $this->datalink->isVerticalActive($apiResponse);

                if ($statusVertical['status'] === 200) {
                    $subscriberData = $this->getSubscriberData($apiResponse);
                    $result = $this->CreateOrUpdateSubscriber($subscriberData, $apiResponse['data']['access_token']);
                    $code = 200;

                } else {
                    $code = 406;
                    $messages[] = 'Vertical Not Active'; // $statusVertical['errorMessages'];
                }
            } else {
                $code = 404;
                $messages[] = 'Subscriber not found'; // $statusVertical['errorMessages'];
            }

        } catch (Exception $e) {
            report($e);
            $messages[] = $e;
            $code = 406;
        }

        return new Result([
            'data' => $result['data'] ?? null,
            'errorMessages' => $result['errorMessages'] ?? $messages,
            'status' => $result['code'] ?? $code,
        ]);
    }

    public function getSubscriberOnDb($url)
    {
        $result = null;
        $messages = [];
        $code = null;

        try {
            $result = Subscriber::where('url', $url)->first();
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

    public function getSubscriberData($subscriber)
    {
        $header = [
            'headers' => [
                'Authorization' => 'Bearer '.$subscriber['data']['access_token'],
                'Content-Type' => 'application/json',
                'Accept' => 'application/json',
            ],
        ];

        $responseUser = $this->fetch->request('GET', 'user', $header);

        return json_decode($responseUser->getBody()->getContents(), true)['data'];
    }

    public function CreateOrUpdateSubscriber($subscriberData, $token): Result
    {
        $result = null;
        $messages = [];
        $code = null;

        try {
            $url = Str::replace('@ftpporto.com', '', $subscriberData['email']);

            $result = Subscriber::updateOrCreate(
                ['email' => $subscriberData['email']],
                [
                    'name' => $subscriberData['name'],
                    'access_token' => $token,
                    'url' => $url,
                ]);
            $code = 200;
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

    public function updateSubscriber(string $field, string $imageUrl): Result
    {
        $result = null;
        $messages = [];
        $code = null;

        try {
            $result = Subscriber::updateOrCreate(
                ['id' => Auth::id()],
                [$field => $imageUrl]
            );
            $code = 200;
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
}
