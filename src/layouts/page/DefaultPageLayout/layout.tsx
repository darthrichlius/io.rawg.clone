import { Analytics } from "@vercel/analytics/react";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import { NavBar } from "@/components";

const DefaulPageLayout = () => {
  return (
    <>
      <NavBar />
      <Box className="window-x-space">
        <Outlet />
      </Box>
      <Analytics />
    </>
  );
};

export default DefaulPageLayout;
