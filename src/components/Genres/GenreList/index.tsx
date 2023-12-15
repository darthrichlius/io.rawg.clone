import useGenres from "@/hooks/data/useGenres";
import { Text } from "@chakra-ui/react";

const GenreList = () => {
  const { genres, loading, errors } = useGenres();
  return (
    <div>
      <ul>{genres && genres.map((genre) => <Text>{genre.name}</Text>)}</ul>
    </div>
  );
};

export default GenreList;
