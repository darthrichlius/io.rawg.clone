<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\GenreRepository;
use Doctrine\ORM\Mapping as ORM;
use App\Api\Action\GenreListApiProxyAction;
use Doctrine\DBAL\Types\Types;

#[ApiResource(
    operations: [
        new GetCollection(
            uriTemplate: '/genres',
            controller: GenreListApiProxyAction::class,
            name: 'app_api_proxy_list_genres'
        )
    ]
)]
#[ORM\Entity(repositoryClass: GenreRepository::class)]
#[ORM\Table(name: 'genres')]
class Genre
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: Types::INTEGER)]
    private int $id;

    #[ORM\Column(type: Types::INTEGER)]
    private int $apiId;

    #[ORM\Column(type: Types::STRING, length: 255)]
    private string $name;

    #[ORM\Column(type: Types::STRING, length: 255)]
    private string $slug;

    #[ORM\Column(type: Types::INTEGER)]
    private int $games_count = 0;

    #[ORM\Column(type: Types::STRING, length: 255)]
    private string $image_background;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getApiId(): int
    {
        return $this->apiId;
    }

    public function setApiId(int $apiId): static
    {
        $this->apiId = $apiId;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): static
    {
        $this->slug = $slug;

        return $this;
    }

    public function getGamesCount(): ?int
    {
        return $this->games_count;
    }

    public function setGamesCount(int $games_count): static
    {
        $this->games_count = $games_count;

        return $this;
    }

    public function getImageBackground(): ?string
    {
        return $this->image_background;
    }

    public function setImageBackground(string $image_background): static
    {
        $this->image_background = $image_background;

        return $this;
    }
}
