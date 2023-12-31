import { HStack, Tag, TagLabel, Text, TagCloseButton } from "@chakra-ui/react";
import { useGameQueryStore } from "@/stores";

const GameSelectedFilterTags = () => {
  const { platform, genre, setPlatformsFilter, setGenresFilter } =
    useGameQueryStore((s) => ({
      platform: s.filters.parent_platform,
      genre: s.filters.genre,
      setPlatformsFilter: s.setPlatformsFilter,
      setGenresFilter: s.setGenresFilter,
    }));

  return (
    <HStack marginTop={8} spacing={4}>
      {!platform && !genre && <Text color="grey">No filter selected</Text>}
      {platform && (
        <FilterTag
          label={platform.name}
          color={"green"}
          onClick={() => setPlatformsFilter(null)}
        />
      )}
      {genre && (
        <FilterTag
          label={genre.name}
          color={"purple"}
          onClick={() => setGenresFilter(null)}
        />
      )}
    </HStack>
  );
};

interface FilterTagProps {
  color: string;
  label: string;
  onClick: () => void;
}

const FilterTag = ({ color, label, onClick }: FilterTagProps) => {
  return (
    <Tag
      size={"md"}
      key={"md"}
      borderRadius="full"
      variant="outline"
      colorScheme={color}
      paddingX={4}
      paddingY={1}
      fontWeight={"bold"}
    >
      <TagLabel>{label}</TagLabel>
      <TagCloseButton onClick={onClick} />
    </Tag>
  );
};

export default GameSelectedFilterTags;
