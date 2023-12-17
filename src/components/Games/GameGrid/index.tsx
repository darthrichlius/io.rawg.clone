import { GameCard, GameCardSkeleton } from "@/components";
import { useGames } from "@/hooks";
import { ApiGameQuery } from "@/typing/api";
import { ArrayUtils } from "@/utils";
import { SimpleGrid, useToast } from "@chakra-ui/react";
import { compact as _compact } from "lodash";

const GameGrid = ({ filters, ordering, search }: ApiGameQuery) => {
  const skeletons = ArrayUtils.newRandomArray(8);
  const { games, loading, error } = useGames({
    filters: {
      genres: _compact(filters?.genres ?? []),
      platforms: _compact(filters?.platforms ?? []),
    },
    ordering,
    search,
  });
  const toast = useToast();

  if (error) {
    toast({
      title: error.response?.status !== 500 ? "Error" : "Internal Error",
      description: error.message,
      status: "error",
      duration: 5000,
      isClosable: true,
    });
    return null;
  }

  return (
    <SimpleGrid
      columns={{
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
      }}
      marginTop={10}
      spacing={10}
    >
      {loading && skeletons.map((i) => <GameCardSkeleton key={i} />)}
      {!loading &&
        games &&
        games.map((game) => <GameCard key={game.id} game={game} />)}
    </SimpleGrid>
  );
};

export default GameGrid;
