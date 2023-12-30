import {
  ExpandableText,
  GameAttributes,
  GameScreenShoots,
  GameTrailer,
} from "@/components";
import { useGame } from "@/hooks";
import { Grid, GridItem, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const URLParams = useParams();
  const slug = URLParams.slug;

  /**
   * The `!` signifies our confidence that `slug` is a string.
   * We can't reach this stage without a non-null string parameter.
   */
  const { game, loading, error } = useGame(slug!);

  if (error) throw error;

  return (
    <>
      {loading && <Spinner />}
      {game && (
        <Grid
          templateAreas={{
            base: `"left" "right"`,
            md: `"left right"`,
          }}
        >
          <GridItem area="left">
            <Heading>{game.name}</Heading>
            <ExpandableText>{game.description_raw}</ExpandableText>
            <GameAttributes game={game} />
          </GridItem>
          <GridItem area="right">
            <GameTrailer slug={game.slug} />
            <GameScreenShoots slug={game.slug} />
          </GridItem>
        </Grid>
      )}
    </>
  );
};

export default GameDetailPage;
