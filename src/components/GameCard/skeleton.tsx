import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import { UI_CONFIG } from "@/config/ui";

const GamecardSkeleton = () => {
  return (
    <Card
      width={UI_CONFIG.gameCard.sizes.lg.width}
      height={UI_CONFIG.gameCard.sizes.lg.height}
      borderRadius={UI_CONFIG.gameCard.borderRadius}
      overflow={"hidden"}
    >
      <Skeleton height={"195px"} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GamecardSkeleton;
