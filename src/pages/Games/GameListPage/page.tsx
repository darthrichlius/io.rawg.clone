import { Box, HStack } from "@chakra-ui/react";
import {
  GameGrid,
  GameGridHeading,
  GameSortSelector,
  PlatformSelector,
} from "@/components";

const GameListPage = () => {
  return (
    <>
      <HStack spacing={5}>
        <PlatformSelector />
        <GameSortSelector />
      </HStack>
      <Box>
        <GameGridHeading />
        <GameGrid />
      </Box>
    </>
  );
};

export default GameListPage;
