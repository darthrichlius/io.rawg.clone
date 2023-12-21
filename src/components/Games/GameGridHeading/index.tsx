import { Heading } from "@chakra-ui/react";
import { ApiGameQuery } from "@/typing/api";

interface Props {
  query: ApiGameQuery;
}

const GameGridHeading = ({ query }: Props) => {
  const platform =
    query?.filters?.parent_platforms && Array.isArray(query?.filters?.parent_platforms)
      ? query?.filters?.parent_platforms[0].name
      : "";
  const genre =
    query?.filters?.genres && Array.isArray(query?.filters?.genres)
      ? query?.filters?.genres[0].name
      : "";

  const heading = `${platform} ${genre} Games`;
  return (
    <Heading as="h1" marginTop={10} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameGridHeading;
