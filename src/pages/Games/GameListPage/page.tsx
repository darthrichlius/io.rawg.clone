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
      <HStack paddingX={10} spacing={5}>
        <PlatformSelector />
        <GameSortSelector />
      </HStack>
      <Box paddingX={10}>
        <GameGridHeading />
        <GameGrid />
      </Box>
    </>
  );
};

export default GameListPage;
