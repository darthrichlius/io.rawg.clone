/**
 * This file serves to show another way we could have built the component
 * In the orignial version, we use a Generic Component provided by Chakra
 * But here we show that there is another way, more verbose but it exists
 *
 * ! IMPORTANT
 * In a real application (As, a reminder, this is a POC project)
 * We should never do that! This useless as it had orphan unused component
 * It is like pollution. We do that only because this is for POC
 */

import { ApiGamePlatformIcon } from "@/typing/api";
import {
  FaXbox as IconXbox,
  FaPlaystation as IconPlaystation,
  FaApple as IconApple,
  FaWindows as IconWindows,
  FaAndroid as IconAndroid,
  FaLinux as IconLinux,
} from "react-icons/fa"; // fa: Font Awesome
import { MdPhoneIphone as IconIoS } from "react-icons/md"; // md: Material Design
import { SiNintendo as IconNitendo } from "react-icons/si"; // si: ?
import { BsGlobe as IconWeb } from "react-icons/bs"; // si: Material Design

interface Props {
  slug: ApiGamePlatformIcon;
}

const GamePlatformIcon = ({ slug }: Props) => {
  return (
    <>
      {slug === ApiGamePlatformIcon.android && <IconAndroid />}
      {slug === ApiGamePlatformIcon.ios && <IconIoS />}
      {slug === ApiGamePlatformIcon.linux && <IconLinux />}
      {slug === ApiGamePlatformIcon.mac && <IconApple />}
      {slug === ApiGamePlatformIcon.nintendo && <IconNitendo />}
      {slug === ApiGamePlatformIcon.playstation && <IconPlaystation />}
      {slug === ApiGamePlatformIcon.pc && <IconWindows />}
      {slug === ApiGamePlatformIcon.web && <IconWeb />}
      {slug === ApiGamePlatformIcon.xbox && <IconXbox />}
      {slug}
    </>
  );
};

export default GamePlatformIcon;
