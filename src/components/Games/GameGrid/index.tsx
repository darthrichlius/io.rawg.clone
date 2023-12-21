import { Box, Button, SimpleGrid, useToast } from "@chakra-ui/react";
import { compact as _compact } from "lodash";
import { GameCard, GameCardSkeleton } from "@/components";
import { useGames } from "@/hooks";
import { ApiGameQuery } from "@/types/api";
import { ArrayUtils } from "@/utils";
import ApiConfig from "@/config/api";

const GameGrid = ({ filters, ordering, search }: ApiGameQuery) => {
  const toast = useToast();
  const skeletons = ArrayUtils.newRandomArray(
    ApiConfig.resources.games.default.limit || 8
  );

  const {
    games,
    loading,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames({
    filters: {
      genres: _compact(filters?.genres ?? []),
      parent_platforms: _compact(filters?.parent_platforms ?? []),
    },
    ordering,
    search,
  });

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
    <Box marginY={10}>
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        spacing={10}
      >
        {loading && skeletons.map((i) => <GameCardSkeleton key={i} />)}
        {!loading &&
          games &&
          games.map((game) => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
      <Box marginTop={10} onClick={() => fetchNextPage()}>
        {!loading && hasNextPage && (
          <Button isLoading={isFetchingNextPage}>
            Load More {isFetchingNextPage && "..."}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default GameGrid;
