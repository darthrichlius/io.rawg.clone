import useGenres from "@/hooks/data/useGenres";
import { ApiImage } from "@/services";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { genres, loading, error } = useGenres();

  if (loading) return <Spinner />;

  /**
   * As of now, no need to go any further.
   * This implementation is sufficient and doesn't degrade the UX.
   */
  if (error) return;

  return (
    <List>
      {genres &&
        genres.map((genre) => (
          <ListItem paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={ApiImage.getCroppedGameImageUrl(genre.image_background)}
              />
              <Text fontSize={"lg"}>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
    </List>
  );
};

export default GenreList;
