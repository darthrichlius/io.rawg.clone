import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "@assets/logo.webp";
import ConfigApp from "@config/app";
import { ColorModeSwitch } from "@/components";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <HStack>
        <Image src={logo} boxSize={"60px"} />
        <Text>{ConfigApp.app_name}</Text>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
