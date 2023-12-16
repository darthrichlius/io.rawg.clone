import { Grid, HStack, Image, Text } from "@chakra-ui/react";
import logo from "@assets/logo.webp";
import ConfigApp from "@config/app";
import { ColorModeSwitch, SearchInput } from "@/components";

interface Props {
  onSearch: (searchInput: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
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
        <Text>{ConfigApp.app_name}</Text>
      </HStack>
      <HStack justifyContent={"space-between"} paddingX={10}>
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </Grid>
  );
};

export default NavBar;
