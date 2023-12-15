import { useGames } from "@/hooks";
import { Text } from "@chakra-ui/react";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {games && (
        <ul>
          {games.map((game) => (
            <li key={game.id}>{game.name}</li>
          ))}
        </ul>
      )}
      {error && <Text>{error}</Text>}
    </>
  );
};

export default GameGrid;
