import { useGameTrailers } from "@/hooks";
import { Box, Spinner, Circle, Text } from "@chakra-ui/react";
import { FaHeartBroken } from "react-icons/fa";

interface Props {
  slug: string;
}

const GameTrailer = ({ slug }: Props) => {
  const { trailers, loading, error } = useGameTrailers(slug);
  const firstTrailer = trailers[0];

  if (loading) return <Spinner />;

  if (error) throw error;

  if (!firstTrailer)
    return (
      <Circle
        bgGradient={[
          "linear(to-tr, teal.300, yellow.400)",
          "linear(to-t, blue.200, teal.500)",
          "linear(to-b, orange.100, purple.300)",
        ]}
        paddingY={10}
        borderRadius={24}
        fontWeight="bold"
        fontSize={"xl"}
      >
        <Text marginRight={2}>No trailer</Text>
        <FaHeartBroken />
      </Circle>
    );

  return (
    <Box>
      <video
        src={firstTrailer.data[480]}
        poster={firstTrailer.preview}
        controls
      />
    </Box>
  );
};

export default GameTrailer;
