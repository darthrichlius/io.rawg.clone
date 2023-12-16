import { GameGrid, GenreList, NavBar, PlatformSelector } from "@/components";
import { ApiGameFiltersQuery } from "@/typing/api";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [gameFilters, setGameFilters] = useState<ApiGameFiltersQuery>({});

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
            onSelectedGenre={(genre) =>
              setGameFilters({ ...gameFilters, genres: [genre] })
            }
            selectedGenre={
              gameFilters?.genres ? gameFilters.genres[0] : undefined // gameFilters?.platforms if exists is necessarely an Array
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main" bg="transparent">
        <PlatformSelector
          selectedPlatform={
            gameFilters?.platforms ? gameFilters.platforms[0] : undefined // gameFilters?.platforms if exists is necessarely an Array
          }
          onSelectedPlatform={(platform) =>
            setGameFilters({ ...gameFilters, platforms: [platform] })
          }
        />
        <GameGrid filters={gameFilters} />
      </GridItem>
    </Grid>
  );
}

export default App;
