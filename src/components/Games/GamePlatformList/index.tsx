import { GamePlatformIcon } from "@/components";
import { ApiGamePlatform } from "@/types/api";
import { HStack } from "@chakra-ui/react";

interface Props {
  platforms: ApiGamePlatform[];
}

const GamePlatformList = ({ platforms }: Props) => {
  return (
    <HStack marginY={1}>
      {platforms &&
        platforms.map((platform) =>
          platform.slug ? (
            <GamePlatformIcon key={platform.id} slug={platform.slug} />
          ) : null
        )}
    </HStack>
  );
};

export default GamePlatformList;
