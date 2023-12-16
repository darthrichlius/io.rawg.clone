import useGenres from "@/hooks/data/useGenres";
import { ApiImage } from "@/services";
import { ApiGenre } from "@/typing/api";
import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
} from "@chakra-ui/react";

interface Props {
  onSelectedGenre: (genre: ApiGenre) => void;
}

const GenreList = ({ onSelectedGenre }: Props) => {
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
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={ApiImage.getCroppedGameImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => onSelectedGenre(genre)}
                fontSize={"lg"}
                variant={"link"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
    </List>
  );
};

export default GenreList;
