import { map as _map } from "lodash";
import { GamePlatformList } from "@/components";
import { ApiGame } from "@/typing/api";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: ApiGame;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        {game && game.parent_platforms && (
          <GamePlatformList
            platforms={_map(game.parent_platforms, "platform")}
          />
        )}
      </CardBody>
    </Card>
  );
};

export default GameCard;
