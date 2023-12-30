import { Grid, HStack, Image, Text } from "@chakra-ui/react";
import logo from "@assets/logo.webp";
import ConfigApp from "@config/app";
import { ColorModeSwitch, SearchInput } from "@/components";
import { useGameQueryStore } from "@/stores";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { onSearch } = useGameQueryStore((s) => ({
    onSearch: s.setSearch,
  }));

  return (
    <Grid
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      paddingY={10}
    >
      <HStack>
        <Image src={logo} boxSize={"60px"} />
        <Link to="/">
          <Text>{ConfigApp.app_name}</Text>
        </Link>
      </HStack>
      <HStack justifyContent={"space-between"} paddingX={10}>
        <SearchInput onSearch={onSearch} placeholder="Search Games" />
        <ColorModeSwitch />
      </HStack>
    </Grid>
  );
};

export default NavBar;
