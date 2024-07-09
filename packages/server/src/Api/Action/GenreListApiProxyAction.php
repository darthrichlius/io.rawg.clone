<?php

namespace App\Api\Action;

use App\Service\GameApiProviderService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Attribute\AsController;

#[AsController]
class GenreListApiProxyAction extends AbstractController
{
    private $gameApiProviderService;

    public function __construct(GameApiProviderService $gameApiProviderService)
    {
        $this->gameApiProviderService = $gameApiProviderService;
    }

    public function __invoke(): JsonResponse
    {
        // @todo Search from cache

        $genreData = $this->gameApiProviderService->listGenres();

        // @todo Persist of update the list of Genre 

        return $this->json($genreData);
    }
}
