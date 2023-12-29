import { usePlatforms } from "@/hooks";
import { useGameQueryStore } from "@/stores";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  const { platforms, isLoading, error } = usePlatforms();

  const { selectedPlatform, onSelectedPlatform } = useGameQueryStore((s) => ({
    selectedPlatform: s.filters.parent_platform,
    onSelectedPlatform: s.setPlatformsFilter,
  }));

  if (isLoading || error) return;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      {platforms && (
        <MenuList>
          {platforms.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => onSelectedPlatform(platform)}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      )}
    </Menu>
  );
};

export default PlatformSelector;
