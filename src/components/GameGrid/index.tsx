import { ApiClient } from "@/services";
import { ApiDefaultResponse, ApiGame } from "@/typing/api";
import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const GameGrid = () => {
  const [games, setGames] = useState<ApiGame[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    ApiClient.get<ApiDefaultResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });
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
