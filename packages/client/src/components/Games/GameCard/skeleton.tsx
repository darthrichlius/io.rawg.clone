import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import { UI_CONFIG } from "@/config/ui";

const GamecardSkeleton = () => {
  return (
    <Card
      maxWidth={UI_CONFIG.gameCard.sizes.lg.maxWidth}
      maxHeight={UI_CONFIG.gameCard.sizes.lg.maxHeight}
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
