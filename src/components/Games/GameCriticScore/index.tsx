import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const GameCriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      display={"inline-flex"}
      fontSize={"14px"}
      paddingX={2}
      borderRadius={"4px"}
      /* ColorScheme is a set of colors, when changing colorScheme, 
        It automatically handles changes related to color, foregroundColors, backgroundColor, ...
        This is a powerful tool as it keep consistency over the design 
       */
      colorScheme={color}
    >
      {score}
    </Badge>
  );
};

export default GameCriticScore;
