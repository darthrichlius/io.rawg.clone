import { DefaulPageLayout, DefaultContentLayout } from "@/layouts";
import { GameDetailPage, GameListPage, ErrorPage } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <DefaulPageLayout />,
    errorElement: <ErrorPage />,
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
