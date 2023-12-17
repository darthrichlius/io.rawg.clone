import { Image, ImageProps } from "@chakra-ui/react";
import bullEye from "@/assets/bulls-eye.webp";
import meh from "@/assets/meh.webp";
import thumbsUp from "@/assets/thumbs-up.webp";

interface Props {
  rating: number;
}

const GameCardEmoji = ({ rating }: Props) => {
  const emojiMap: {
    [key: number]: ImageProps;
  } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullEye, alt: "exceptional", boxSize: "32px" },
  };
  return <Image {...emojiMap[rating]} />;
};

export default GameCardEmoji;
