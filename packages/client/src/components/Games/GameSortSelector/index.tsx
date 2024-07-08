import { useGameQueryStore } from "@/stores";
import { ApiGameGameSort } from "@/types/api";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const GameSortSelector = () => {
  const { selectedGameSort, onSelectedGameSort } = useGameQueryStore((s) => ({
    onSelectedGameSort: s.setOrdering,
    selectedGameSort: s.ordering,
  }));

  /**
   * @todo Decide if we put this part as part of the configuration or we let it here
   */
  const gameSorts: Array<ApiGameGameSort> = [
    { slug: "", name: "Relevance" },
    { slug: "name", name: "Name" },
    { slug: "-released", name: "Release date" }, // We show the newest first
    { slug: "-added", name: "Date added" }, // We show the newest first
    { slug: "-rating", name: "Popularity" },
    { slug: "-metacritic", name: "Average rating" },
  ];

  /**
   * @todo Don't render the component as long as we don't have the game data to prevent the user to perform an action
   */
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        OrderBy: {selectedGameSort?.name || "Relevance"}
      </MenuButton>
      {gameSorts && (
        <MenuList>
          {gameSorts.map((gameSort) => (
            <MenuItem
              key={gameSort.slug}
              onClick={() => onSelectedGameSort(gameSort)}
            >
              {gameSort.name}
            </MenuItem>
          ))}
        </MenuList>
      )}
    </Menu>
  );
};

export default GameSortSelector;
