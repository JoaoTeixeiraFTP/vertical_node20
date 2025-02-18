<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Api\Datalink;
use App\Models\Api\UserApi;
use App\Models\Api\Vertical;
use App\Models\Subscriber;
use App\Repositories\SubscriberRepository;
use App\Shared\Controllers\Controller;
use App\Shared\Exceptions\ApiRequestException;
use App\Shared\Result;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

final class SubscriberController extends Controller
{
    public function __construct() {}

    public function checkVertical(Request $request): Result
    {
        $result = null;
        $messages = [];
        $code = null;

        try {
            $subscriber = Subscriber::where('url', $request->subscriber)->first();

            if ($subscriber) {
                // TODO FALAR PARA POR A ROTA VERTICAL FAZER AS DUAS OU AS TRES COISAS
                $apiResponse = Datalink::fetch()
                    ->args()
                    ->email($subscriber->email)
                    ->password($subscriber->password)
                    ->post();
                $statusVertical = Vertical::fetch()
                    ->token($apiResponse['data']['access_token'])
                    ->get()
                    ->wait();

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

    /**
     * @throws ApiRequestException
     */
    public function getSubscriberData($subscriber)
    {
        return UserApi::fetch()
            ->token($subscriber['data']['access_token'])
            ->get()
            ->wait();
    }

    public function CreateOrUpdateSubscriber($subscriberData, $token): Result
    {
        $result = null;
        $messages = [];
        $code = null;

        try {
            $url = Str::replace('@ftpporto.com', '', $subscriberData['data']['email']);

            $result = Subscriber::updateOrCreate(
                ['email' => $subscriberData['data']['email']],
                [
                    'name' => $subscriberData['data']['name'],
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

    public function getSubscriber(string $url): Result
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

    public function getSubscriberName(SubscriberRepository $repository, string $url): string
    {
        $result = $repository->getSubscriberOnDb($url);

        return $result['data']['name'];
    }

    public function getLogo(SubscriberRepository $repository, string $url): string
    {
        $result = $repository->getSubscriberOnDb($url);

        if ($result['data']) {
            return $result['data']['logo'] ?? $result['data']['default_logo'];
        }

        return asset('images/favicon.png');

    }

    public function getLoginImage(SubscriberRepository $repository, string $url): string
    {
        $result = $repository->getSubscriberOnDb($url);

        if ($result['data']) {
            return $result['data']['login_image'] ?? $result['data']['default_login_image'];
        }

        return asset('images/auth-image.jpg');

    }
}
