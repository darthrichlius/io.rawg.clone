import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar, GameGrid, GenreList, PlatformSelector } from "@/components";
import { useState } from "react";
import { ApiGamePlatform, ApiGenre } from "@/typing/api";

function App() {
  const [selectedGenre, setSlectedGenre] = useState<ApiGenre | null>(null);
  const [selectedPlatform, setSlectedPlatform] =
    useState<ApiGamePlatform | null>(null);

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
          <GenreList
            onSelectedGenre={(genre) => setSlectedGenre(genre)}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem area="main" bg="transparent">
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          onSelectedPlatform={(platform) => setSlectedPlatform(platform)}
        />
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
