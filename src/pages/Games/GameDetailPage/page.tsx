import { ExpandableText } from "@/components";
import { useGame } from "@/hooks";
import { Heading, Spinner } from "@chakra-ui/react";
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
        <>
          <Heading>{game.name}</Heading>
          <ExpandableText>{game.description_raw}</ExpandableText>
        </>
      )}
    </>
  );
};

export default GameDetailPage;
