import { Grid, HStack, Icon, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { FaGamepad as AppLogo } from "react-icons/fa6";

import ConfigApp from "@config/app";
import { ColorModeSwitch, SearchInput } from "@/components";
import { useGameQueryStore } from "@/stores";

const NavBar = () => {
  const { onSearch } = useGameQueryStore((s) => ({
    onSearch: s.setSearch,
  }));
  const navigate = useNavigate();

  const handleSearch = (t: string) => {
    onSearch(t);
    navigate("/");
  };

  return (
    <Grid
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      className="window-x-space window-y-space"
    >
      <HStack
        justifyContent={{
          base: "center",
          md: "left",
        }}
      >
        <Link to="/">
          <Icon as={AppLogo} w={8} h={8} />
        </Link>
        <Link to="/">
          <Text fontWeight={"bold"} fontSize={"x-large"}>
            {ConfigApp.app_name}
          </Text>
        </Link>
      </HStack>
      <HStack
        justifyContent={"space-between"}
        marginTop={{
          base: 5,
          lg: 0,
        }}
      >
        <SearchInput onSearch={handleSearch} placeholder="Search Games" />
        <ColorModeSwitch />
      </HStack>
    </Grid>
  );
};

export default NavBar;
