import { useGenres } from "@/hooks/";
import { ApiImage } from "@/services";
import { ApiGameGenre } from "@/typing/api";
import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";

interface Props {
  onSelectedGenre: (genre: ApiGameGenre) => void;
  selectedGenre?: ApiGameGenre;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { genres, loading, error } = useGenres();

  if (loading) return <Spinner />;

  /**
   * As of now, no need to go any further.
   * This implementation is sufficient and doesn't degrade the UX.
   */
  if (error) return;

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={5}>
        Genres
      </Heading>
      <List>
        {genres &&
          genres.map((genre) => (
            <ListItem key={genre.id} paddingY={"5px"}>
              <HStack>
                <Button
                  leftIcon={<GenreButtonImage genre={genre} />}
                  paddingY={5}
                  fontSize={"lg"}
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
                  whiteSpace={"normal"}
                  textAlign={"left"}
                  variant={"ghost"}
                  textDecoration={"none"}
                  onClick={() => onSelectedGenre(genre)}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
      </List>
    </>
  );
};

const GenreButtonImage = ({ genre }: { genre: ApiGameGenre }) => {
  return (
    <Image
      boxSize={"32px"}
      objectFit={"cover"}
      borderRadius={8}
      marginRight={1}
      src={ApiImage.getCroppedGameImageUrl(genre.image_background)}
    />
  );
};

export default GenreList;
