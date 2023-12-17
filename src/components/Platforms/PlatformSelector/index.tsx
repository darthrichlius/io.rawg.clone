import { usePlatforms } from "@/hooks";
import { ApiGamePlatform } from "@/typing/api";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedPlatform?: ApiGamePlatform;
  onSelectedPlatform: (genre: ApiGamePlatform) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectedPlatform }: Props) => {
  const { platforms, loading, error } = usePlatforms();
  if (loading || error) return;
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
