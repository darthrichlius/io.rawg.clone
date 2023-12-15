import { useGames } from "@/hooks";
import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameCard } from "..";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {games && (
        <SimpleGrid
          columns={{
            sm: 1,
            md: 2,
            lg: 3,
          }}
          padding={10}
          spacing={10}
        >
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </SimpleGrid>
      )}
      {error && <Text>{error}</Text>}
    </>
  );
};

export default GameGrid;
