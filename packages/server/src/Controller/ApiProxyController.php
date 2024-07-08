<?php

namespace App\Controller;

use App\Entity\Game;
use App\Repository\GameRepository;
use App\Service\GameApiProviderService;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ApiProxyController extends AbstractController
{
    private $gameApiProviderService;
    private $logger;

    public function __construct(GameApiProviderService $gameApiProviderService, LoggerInterface $logger)
    {
        $this->gameApiProviderService = $gameApiProviderService;
        $this->logger = $logger;
    }

    #[Route('/api/games', name: 'app_api_proxy_search', methods: ['GET'])]
    public function search(Request $request): JsonResponse
    {
        $queryParams = [
            'search' => $request->query->get('search'),
            'ordering' => $request->query->get('ordering'),
            'page_size' => $request->query->get('page_size'),
            'genres' => $request->query->get('genres'),
            'parent_platforms' => $request->query->get('parent_platforms'),
        ];

        // Remove all undefined parameters 
        $queryParams = array_filter($queryParams, fn ($value) => !is_null($value) && $value !== '');

        // @todo Check in the cache if the data exist and didn't exceed TTL

        $gamesData = $this->gameApiProviderService->searchGames($queryParams);

        // @todo Persist data

        return $this->json($gamesData);
    }
}
