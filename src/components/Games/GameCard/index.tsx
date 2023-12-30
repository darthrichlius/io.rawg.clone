import { Card, CardBody, HStack, Heading, Image, Box } from "@chakra-ui/react";
import { map as _map } from "lodash";
import { ApiImage } from "@/services";
import { GameCardEmoji, GameCriticScore, GamePlatformList } from "@/components";
import { ApiGame } from "@/types/api";
import { UI_CONFIG } from "@/config/ui";
import NoImagePlaceHolder from "@/assets/no-image-placeholder.webp";
import { Link } from "react-router-dom";

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
      _hover={{
        transform: "scale(1.05)",
        transition: "transform .15s ease-in",
      }}
    >
      <Image src={croppedImage} />
      <CardBody alignContent={"space-around"}>
        <Heading fontSize={"xl"}>
          <Link to={`games/${game.slug}`}>{game.name}</Link>
        </Heading>
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
