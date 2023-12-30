import { useGameTrailers } from "@/hooks";
import { Spinner } from "@chakra-ui/react";

interface Props {
  slug: string;
}

const GameTrailer = ({ slug }: Props) => {
  const { trailers, loading, error } = useGameTrailers(slug!);
  const firstTrailer = trailers[0];

  if (loading) return <Spinner />;

  if (error) throw error;

  if (!firstTrailer) return <p>No trailer</p>;
  
  return (
    <video
      src={firstTrailer.data[480]}
      poster={firstTrailer.preview}
      controls
    />
  );
};

export default GameTrailer;
