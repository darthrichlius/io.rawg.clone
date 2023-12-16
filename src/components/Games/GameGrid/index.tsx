import { useGames } from "@/hooks";
import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameCard, GameCardSkeleton } from "@/components";
import { ArrayUtils } from "@/utils";
import { ApiGenre } from "@/typing/api";

interface Props {
  selectedGenre: ApiGenre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const filters = selectedGenre ? { genres: [selectedGenre] } : undefined;

  const { games, loading, error } = useGames({ filters: filters });
  const skeletons = ArrayUtils.newRandomArray(6);

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
      {error && <Text>{error}</Text>}
    </>
  );
};

export default GameGrid;
