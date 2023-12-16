import { ApiGameGameSort, ApiGameGameSortSlug } from "@/typing/api";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedGameSort?: ApiGameGameSort;
  onSelectedGameSort: (gamesort: ApiGameGameSort) => void;
}

const GameSortSelector = ({
  onSelectedGameSort,
  selectedGameSort = undefined,
}: Props) => {
  /**
   * @todo Decide if we put this part as part of the configuration or we let it here
   */
  const gamesorts: Array<ApiGameGameSort> = [
    { slug: "", name: "Relevance" },
    { slug: "name", name: "Name" },
    { slug: "-released", name: "Release date" }, // We show the newest first
    { slug: "-added", name: "Date added" }, // We show the newest first
    { slug: "rating", name: "Popularity" },
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
      {gamesorts && (
        <MenuList>
          {gamesorts.map((gamesort) => (
            <MenuItem
              key={gamesort.slug}
              onClick={() => onSelectedGameSort(gamesort)}
            >
              {gamesort.name}
            </MenuItem>
          ))}
        </MenuList>
      )}
    </Menu>
  );
};

export default GameSortSelector;
