<?php

declare(strict_types=1);

namespace App\Shared\Services;

use App\Shared\DatalinkRoutes;
use App\Shared\Exceptions\ApiRequestException;
use App\Shared\Result;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Promise\PromiseInterface;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Log;
use Psr\Http\Message\ResponseInterface;

final class RequestBuilder
{
    private Client $client;

    private string $endpoint;

    private array $query = [];

    private array $headers = [];

    public function __construct($endpoint)
    {
        $this->client = new Client([
            'base_uri' => (new DatalinkRoutes)::DATALINK, // URL base da API
            'timeout' => 10.0,
        ]);

        $this->endpoint = $endpoint;
    }

    public function __call($method, $parameters)
    {
        $value = $parameters[0] ?? null;
        $this->query[$method] = $value;

        return $this;
    }

    public function token($token): self
    {
        $this->headers = [
            'Authorization' => 'Bearer '.$token,
            'Content-Type' => 'application/json',
            'Accept' => 'application/json',
        ];

        return $this;
    }

    public function args(): self
    {
        $this->headers = [
            'Content-Type' => 'application/json',
            'Accept' => 'application/json',
        ];

        return $this;
    }

    /**
     * Paginação
     *
     * @throws ApiRequestException
     */
    public function paginate(int $page = 1, int $perPage = 15): PromiseInterface
    {
        $this->query['limit'] = $perPage;
        $this->query['page'] = $page;

        return $this->get();
    }

    /**
     * Executa a consulta (GET)
     *
     * @throws ApiRequestException
     */
    public function get(): PromiseInterface
    {
        try {
            // Faz a requisição assíncrona
            //            dd($this->endpoint, $this->query);
            $promise = $this->client->requestAsync(
                method: 'GET',
                uri: $this->endpoint,
                options: [
                    'headers' => $this->headers,
                    'query' => $this->query,
                ]
            );

            // Trata o resultado quando a promise for resolvida
            return $promise->then(
                function (ResponseInterface $response) {
                    $body = json_decode($response->getBody()->getContents(), true);

                    // Retorna os dados em formato JSON
                    if (isset($this->query['limit']) || isset($this->query['page'])) {
                        $result = [];
                        if (count($body['data']) > $this->query['limit']) {
                            $result = array_slice($body['data'], ($this->query['page'] - 1) * $this->query['limit'], $this->query['limit']);
                        } else {
                            $result = $body['data'];
                        }

                        return new LengthAwarePaginator(
                            items: collect($result ?? []),                            // Dados da resposta
                            total: $body['meta']['total'] ?? count($body['data']),          // Total de registros
                            perPage: $body['meta']['per_page'] ?? $this->query['limit'],      // Registros por página
                            currentPage: $body['meta']['current_page'] ?? $this->query['page'],   // Página atual
                            options: [
                                'path' => request()->url(),
                                'query' => request()->query(),
                            ]
                        );
                    }

                    return new Result([
                        'data' => $body['data'],
                        'errorMessages' => [],
                        'status' => $body['status_code'],
                    ]);
                }
            )->otherwise(
                function ($exception) {
                    // Captura erros de requisição e registra no log
                    Log::error('Erro ao fazer requisição para a API', [
                        'endpoint' => $this->endpoint,
                        'query' => $this->query,
                        'error' => $exception->getMessage(),
                        'status_code' => $exception->getCode(),
                    ]);

                    throw new ApiRequestException('Erro ao fazer requisição para a API: '.$exception->getMessage(), $exception->getCode(), $exception);
                }
            );
        } catch (GuzzleException $e) {
            // Captura erros de requisição e registra no log
            Log::error('Erro ao fazer requisição para a API', [
                'endpoint' => $this->endpoint,
                'query' => $this->query,
                'error' => $e->getMessage(),
                'status_code' => $e->getCode(),
            ]);

            throw new ApiRequestException('Erro ao fazer requisição para a API: '.$e->getMessage(), $e->getCode(), $e);
        }
    }

    /**
     * Executa a consulta (POST)
     *
     * @throws ApiRequestException
     */
    public function post(): Result
    {
        try {
            // Faz a requisição
            $response = $this->client->request(
                method: 'POST',
                uri: $this->endpoint,
                options: [
                    'headers' => $this->headers,
                    'query' => $this->query,
                ]);

            // Retorna os dados em formato JSON
            return new Result([
                'data' => json_decode($response->getBody()->getContents(), true),
                'errorMessages' => [],
                'status' => 200,
            ]);
        } catch (RequestException $exception) {
            // Captura erros de requisição e registra no log
            Log::error('Erro ao fazer requisição para a API', [
                'endpoint' => $this->endpoint,
                'query' => $this->query,
                'error' => $exception->getMessage(),
                'status_code' => $exception->getCode(),
            ]);

            // Re-throw para tratar em outros níveis, se necessário
            throw new ApiRequestException('Erro ao fazer requisição para a API: '.$exception->getMessage(), $exception->getCode(), $exception);
        } catch (GuzzleException $e) {
            // Captura erros de requisição e registra no log
            Log::error('Erro ao fazer requisição para a API', [
                'endpoint' => $this->endpoint,
                'query' => $this->query,
                'error' => $e->getMessage(),
                'status_code' => $e->getCode(),
            ]);

            throw new ApiRequestException('Erro ao fazer requisição para a API: '.$e->getMessage(), $e->getCode(), $e);
        }
    }
}
