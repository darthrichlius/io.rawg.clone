import { NavBar } from "@/components";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const DefaulPageLayout = () => {
  return (
    <>
      <NavBar />
      <Box className="window-x-space">
        <Outlet />
      </Box>
    </>
  );
};

export default DefaulPageLayout;
