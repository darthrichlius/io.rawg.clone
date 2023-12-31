import { ApiGamePlatformIcon } from "@/types/api";
import {
  FaXbox,
  FaPlaystation,
  FaApple,
  FaWindows,
  FaAndroid,
  FaLinux,
} from "react-icons/fa"; // fa: Font Awesome
import { IconType } from "react-icons"; // md: Material Design
import { MdPhoneIphone } from "react-icons/md"; // md: Material Design
import { SiNintendo } from "react-icons/si"; // si: ?
import { BsGlobe } from "react-icons/bs"; // si: Material Design
import { Icon } from "@chakra-ui/react";

interface Props {
  slug: ApiGamePlatformIcon;
}

const GamePlatformIcon = ({ slug }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    android: FaAndroid,
    ios: MdPhoneIphone,
    linux: FaLinux,
    mac: FaApple,
    nintendo: SiNintendo,
    playstation: FaPlaystation,
    pc: FaWindows,
    web: BsGlobe,
    xbox: FaXbox,
  };

  return <>{slug && <Icon as={iconMap[slug]} color={"gray.500"} />}</>;
};

export default GamePlatformIcon;
