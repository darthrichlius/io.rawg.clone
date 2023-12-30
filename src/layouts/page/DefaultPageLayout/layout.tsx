import { NavBar } from "@/components";
import { Outlet } from "react-router-dom";

const DefaulPageLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default DefaulPageLayout;
