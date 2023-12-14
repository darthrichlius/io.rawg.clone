import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

/**
 * ! IMPORTANT
 * * Make sure to store it as "config"
 * @see https://chakra-ui.com/docs/styled-system/color-mode
 */
const defaultTheme = extendTheme({ config });

export default defaultTheme;
