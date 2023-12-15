import { GamePlatformIcon } from "@/components";
import { ApiGamePlatform } from "@/typing/api";
import { HStack } from "@chakra-ui/react";

interface Props {
  platforms: ApiGamePlatform[];
}

const GamePlatformList = ({ platforms }: Props) => {
  return (
    <HStack marginY={1}>
      {platforms &&
        platforms.map((platform) => <GamePlatformIcon slug={platform.slug} />)}
    </HStack>
  );
};

export default GamePlatformList;
