import {
  GameGrid,
  GameGridHeading,
  GameSortSelector,
  GenreList,
  NavBar,
  PlatformSelector,
} from "@/components";
import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";

function App() {
  return (
    /** @see https://chakra-ui.com/docs/styled-system/responsive-styles */
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // We are responsive-first
        lg: `"nav nav" "aside main"`, //min: 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav" bg="transparent">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="transparent" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main" bg="transparent">
        <HStack paddingX={10} spacing={5}>
          <PlatformSelector />
          <GameSortSelector />
        </HStack>
        <Box paddingX={10}>
          <GameGridHeading />
          <GameGrid />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
