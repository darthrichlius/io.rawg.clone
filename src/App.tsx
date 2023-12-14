import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "@components/index";

function App() {
  return (
    /** @see https://chakra-ui.com/docs/styled-system/responsive-styles */
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // We are responsive-first
        lg: `"nav nav" "aside main"`, //min: 1024px
      }}
    >
      <GridItem area="nav" bg="transparent">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="transparent">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="transparent">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
