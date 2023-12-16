import { compact as _compact } from "lodash";
import { useGames } from "@/hooks";
import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameCard, GameCardSkeleton } from "@/components";
import { ArrayUtils } from "@/utils";
import { ApiGamePlatform, ApiGenre } from "@/typing/api";

interface Props {
  selectedGenre: ApiGenre | null;
  selectedPlatform: ApiGamePlatform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const filters = {
    genres: _compact([selectedGenre]),
    platforms: _compact([selectedPlatform]),
  };

  const { games, loading, error } = useGames({ filters: filters });
  const skeletons = ArrayUtils.newRandomArray(6);

  if (error) null;

  return (
    <>
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
        }}
        padding={10}
        spacing={10}
      >
        {loading && skeletons.map((i) => <GameCardSkeleton key={i} />)}
        {!loading &&
          games &&
          games.map((game) => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
      {error && <Text>{error.message}</Text>}
    </>
  );
};

export default GameGrid;
