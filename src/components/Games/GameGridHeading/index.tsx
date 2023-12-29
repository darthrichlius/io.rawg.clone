import { useGameQueryStore } from "@/stores";
import { Heading } from "@chakra-ui/react";

const GameGridHeading = () => {
  const { platform, genre } = useGameQueryStore((s) => ({
    platform: s.filters.parent_platform,
    genre: s.filters.genre,
  }));
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginTop={10} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameGridHeading;
