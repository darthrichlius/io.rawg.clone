import { Grid, HStack, Image, Text } from "@chakra-ui/react";
import logo from "@assets/logo.webp";
import ConfigApp from "@config/app";
import { ColorModeSwitch, SearchInput } from "@/components";
import { useGameQueryStore } from "@/stores";
import { Link, useNavigate } from "react-router-dom";

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
          <Image src={logo} boxSize={"50px"} />
        </Link>
        <Link to="/">
          <Text fontWeight={"bold"} fontSize={"x-large"}>{ConfigApp.app_name}</Text>
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
