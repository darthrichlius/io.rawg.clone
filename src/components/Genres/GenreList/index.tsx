import useGenres from "@/hooks/data/useGenres";
import { ApiImage } from "@/services";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { genres, loading, errors } = useGenres();

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
