import { ReactNode } from "react";
import { ApiGame } from "@/types/api";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import GameCriticScore from "../GameCriticScore";

interface Props {
  game: ApiGame;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} spacing={10} as="dl">
      <DescriptionItem title={"Platforms"}>
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DescriptionItem>
      <DescriptionItem title={"Metascore"}>
        <GameCriticScore score={game.metacritic} />
      </DescriptionItem>
      <DescriptionItem title={"Genres"}>
        {game.genres?.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DescriptionItem>
      <DescriptionItem title={"Publisher"}>
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DescriptionItem>
    </SimpleGrid>
  );
};

/**
 * This component is not currently used elsewhere in the app
 * Therefore, we don't see any motivation to create a new file for it
 * May change in the future
 */
const DescriptionItem = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode | ReactNode[];
}) => {
  return (
    <Box marginTop={8}>
      <Heading as="dt" fontSize="md" color="gray.600">
        {title}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default GameAttributes;
