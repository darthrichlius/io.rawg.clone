import { GenreList } from "@/components";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const DefaultContentLayout = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`, // We are responsive-first
        lg: `"aside main"`, //min: 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" bg="transparent">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main" bg="transparent">
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default DefaultContentLayout;
