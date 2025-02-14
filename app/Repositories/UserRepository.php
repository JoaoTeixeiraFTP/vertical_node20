<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Models\Api\Vertical;
use App\Models\User;
use App\Shared\Repositories\Repository;
use App\Shared\Result;
use Exception;
use Throwable;

final class UserRepository extends Repository
{
    public function __construct()
    {
        parent::__construct();

        $this->datalink = new DatalinkRepository();
    }

    public function CreateOrUpdateUser($userData, $subscriber, $url): Result
    {
        $result = null;
        $messages = [];
        $code = null;

        try {

            $result = User::updateOrCreate(
                ['email' => $userData['email']],
                [
                    'no' => $userData['no'],
                    'name' => $userData['nome'],
                    'password' => bcrypt($userData['password'] ?? 'default'),
                    'subscriber' => $url,
                ]);
            $result->subscriber()->associate($subscriber);

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

    public function login($subscriber, $url, $email, $password, $no): Result
    {
        $result = null;
        $messages = [];
        $code = null;

        try {
            // TODO CONFIRMAR COM TEIXEIRA
            $response = Vertical::query()
                ->token($subscriber->access_token)
                ->get()
                ->wait();

            if ($response['errorMessages'] === 'Token Expired') {
                throw new Exception('Token do usuário Expirados.');
            }

            if (! isset($response['data']) || ! is_array($response['data'])) {
                throw new Exception('Dados de usuário inválidos retornados pela API.');
            }

            $userData = collect($response['data'])->first(function ($user) use ($no, $email, $password) {
                return $user['email'] === $email && $user['pwautent'] === $password && $user['no'] === $no;
            });

            if (! $userData) {
                throw new Exception('Usuário com o e-mail '.$email.' e senha fornecida não encontrado nos dados retornados pela API.');
            }
            $respondeDb = $this->CreateOrUpdateUser($userData, $subscriber, $url);
            $result = $respondeDb['data'];

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

    public function getUser(string $name): Result
    {
        $result = null;
        $messages = [];
        $code = null;

        try {

            $result = User::where('subscriber', $name)->first();
            $code = 200;

        } catch (Throwable $e) {
            report($e);
            $messages[] = $e;
            $code = 404;
        }

        return new Result([
            'data' => $result,
            'errorMessages' => $messages,
            'status' => $code,
        ]);
    }
}
