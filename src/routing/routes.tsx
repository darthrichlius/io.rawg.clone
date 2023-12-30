import { DefaulPageLayout, DefaultContentLayout } from "@/layouts";
import { GameDetailPage, GameListPage } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <DefaulPageLayout />,
    children: [
      {
        element: <DefaultContentLayout />,
        children: [{ index: true, element: <GameListPage /> }],
      },
      { path: "games/:id", element: <GameDetailPage /> },
    ],
  },
]);

export default routes;
