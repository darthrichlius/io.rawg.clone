<?php

namespace App\Service;

use Symfony\Contracts\HttpClient\HttpClientInterface;

class GameApiProviderService
{
    private $httpClient;
    private $apiKey;
    private $apiBaseUrl;

    public function __construct(HttpClientInterface $httpClient, string $apiKey, string $apiBaseUrl)
    {
        $this->httpClient = $httpClient;
        $this->apiKey = $apiKey;
        $this->apiBaseUrl = $apiBaseUrl;
    }

    public function searchGames(array $queryParams): array
    {
        $queryParams['key'] = $this->apiKey;
        $response = $this->httpClient->request('GET', $this->apiBaseUrl . '/games', [
            'query' => $queryParams,
        ]);

        return $response->toArray();
    }

    public function listGenres(): array
    {
        $queryParams = [];
        $queryParams['key'] = $this->apiKey;
        $response = $this->httpClient->request('GET', $this->apiBaseUrl . '/genres', [
            'query' => $queryParams,
        ]);

        return $response->toArray();
    }
}
