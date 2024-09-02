import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main";
import Gender from "./component/Gender";
import Interest from "./component/Interest";
import NickName from "./component/NickName";
import Final from "./component/Final";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/login/gender",
      element: <Gender />,
    },
    {
      path: "/login/interest",
      element: <Interest />,
    },
    {
      path: "/login/nickname",
      element: <NickName />,
    },
    {
      path: "/login/final",
      element: <Final />,
    },
  ],
  { basename: process.env.PUBLIC_URL }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
