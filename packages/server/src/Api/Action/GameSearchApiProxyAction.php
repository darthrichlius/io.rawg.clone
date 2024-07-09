<?php

namespace App\Api\Action;

use App\Service\GameApiProviderService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Attribute\AsController;

#[AsController]
class GameSearchApiProxyAction extends AbstractController
{
    private $gameApiProviderService;

    public function __construct(GameApiProviderService $gameApiProviderService)
    {
        $this->gameApiProviderService = $gameApiProviderService;
    }

    public function __invoke(Request $req): JsonResponse
    {
        $queryParams = [
            'search' => $req->query->get('search'),
            'ordering' => $req->query->get('ordering'),
            'genres' => $req->query->get('genres'),
            'page_size' => $req->query->get('page_size'),
            'page' => $req->query->get('page'),
            'parent_platforms' => $req->query->get('parent_platforms'),
        ];

        // Remove all undefined parameters
        $queryParams = array_filter($queryParams, fn ($value) => !is_null($value) && $value !== '');

        // @todo Check in the cache or the locale database (Depends on the TTL or any other cache rule)

        $gameData = $this->gameApiProviderService->searchGames($queryParams);

        // @todo Persist data

        return $this->json($gameData);
    }
}
