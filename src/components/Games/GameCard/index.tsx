import { Card, CardBody, HStack, Heading, Image, Box } from "@chakra-ui/react";
import { map as _map } from "lodash";
import { ApiImage } from "@/services";
import { GameCardEmoji, GameCriticScore, GamePlatformList } from "@/components";
import { ApiGame } from "@/typing/api";
import { UI_CONFIG } from "@/config/ui";
import NoImagePlaceHolder from "@/assets/no-image-placeholder.webp";

interface Props {
  game: ApiGame;
}

const GameCard = ({ game }: Props) => {
  const croppedImage = game.background_image
    ? ApiImage.getCroppedGameImageUrl(game.background_image)
    : NoImagePlaceHolder;
  return (
    <Card
      borderRadius={UI_CONFIG.gameCard.borderRadius}
      overflow={"hidden"}
      maxWidth={UI_CONFIG.gameCard.sizes.lg.maxWidth}
    >
      <Image src={croppedImage} />
      <CardBody alignContent={"space-around"}>
        <Heading fontSize={"xl"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          {/* Having to map "platform" is a consequence of the BackEnd API faulty design */}
          {game.parent_platforms && (
            <GamePlatformList
              platforms={_map(game.parent_platforms, "platform")}
            />
          )}
          <GameCriticScore score={game.metacritic} />
        </HStack>
        {/* The design is not ideal but this is just for POC */}
        <Box>
          <GameCardEmoji rating={game.rating_top} />
        </Box>
      </CardBody>
    </Card>
  );
};

export default GameCard;
