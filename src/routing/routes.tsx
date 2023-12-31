import { DefaulPageLayout, DefaultContentLayout } from "@/layouts";
import {
  GameDetailPage,
  GameListPage,
  ErrorPage,
  TestErrorPage,
} from "@/pages";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <DefaulPageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "_/",
        children: [{ path: "test_error_log", element: <TestErrorPage /> }],
      },
      {
        element: <DefaultContentLayout />,
        children: [{ index: true, element: <GameListPage /> }],
      },
      { path: "games/:slug", element: <GameDetailPage /> },
    ],
  },
]);

export default routes;
