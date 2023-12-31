import {
  GameGrid,
  GameGridHeading,
  GameSelectedFilterTags,
  GameSortSelector,
  PlatformSelector,
} from "@/components";
import { Box, HStack } from "@chakra-ui/react";

const GameListPage = () => {
  return (
    <>
      <HStack spacing={5}>
        <PlatformSelector />
        <GameSortSelector />
      </HStack>
      <GameSelectedFilterTags />
      <Box>
        <GameGridHeading />
        <GameGrid />
      </Box>
    </>
  );
};

export default GameListPage;
