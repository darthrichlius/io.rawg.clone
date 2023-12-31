import {
  ExpandableText,
  GameAttributes,
  GameScreenShoots,
  GameTrailer,
} from "@/components";
import { useGame } from "@/hooks";
import { Container, Grid, GridItem, Heading, Spinner } from "@chakra-ui/react";
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
    <Container maxW='8xl'>
      {loading && <Spinner />}
      {game && (
        <Grid
          templateAreas={{
            base: `
            "game-detail-desc" 
            "game-detail-attr" 
            "game-detail-trailer" 
            "game-detail-images"
            `,
            md: `
            "game-detail-desc game-detail-trailer" 
            "game-detail-attr game-detail-images"
            `,
          }}
          gap={8}
        >
          <GridItem area="game-detail-desc">
            <Heading as="h3" marginBottom={4}>
              {game.name}
            </Heading>
            <ExpandableText>{game.description_raw}</ExpandableText>
          </GridItem>
          <GridItem area="game-detail-attr">
            <GameAttributes game={game} />
          </GridItem>
          <GridItem area="game-detail-trailer">
            <GameTrailer slug={game.slug} />
          </GridItem>
          <GridItem area="game-detail-images">
            <Heading as="h3" marginBottom={4}>
              Screenshots
            </Heading>
            <GameScreenShoots slug={game.slug} />
          </GridItem>
        </Grid>
      )}
    </Container>
  );
};

export default GameDetailPage;
