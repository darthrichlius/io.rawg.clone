import { useGameScreenShoots } from "@/hooks";
import { Box, Heading, Image, SimpleGrid, Spinner } from "@chakra-ui/react";

interface Props {
  slug: string;
}

const GameScreenShoots = ({ slug }: Props) => {
  const { images, loading, error } = useGameScreenShoots(slug);

  if (loading) return <Spinner />;

  if (error) throw error;

  if (!images) return <p>No Screenshot</p>;

  return (
    <Box>
      <Heading as="h3">Screenshots</Heading>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
        }}
        spacing={8}
      >
        {images.map((s) => (
          <Image key={s.id} src={s.image} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GameScreenShoots;
