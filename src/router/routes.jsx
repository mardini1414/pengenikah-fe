import App from "../App";
import NotFound from "../pages/404";
import Home from "../pages/Home";
import Invitation from "../pages/Invitation";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:slug",
        element: <Invitation />,
      },
    ],
  },
];

export default routes;
