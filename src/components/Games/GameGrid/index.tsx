import { SimpleGrid, Text } from "@chakra-ui/react";
import { compact as _compact } from "lodash";
import { GameCard, GameCardSkeleton } from "@/components";
import { useGames } from "@/hooks";
import { ApiGameFiltersQuery } from "@/typing/api";
import { ArrayUtils } from "@/utils";

interface Props {
  filters?: ApiGameFiltersQuery;
}

const GameGrid = ({ filters }: Props) => {
  const sanitizedFilters = {
    genres: _compact(filters?.genres ?? []),
    platforms: _compact(filters?.platforms ?? []),
  };

  const { games, loading, error } = useGames({ filters: sanitizedFilters });
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
