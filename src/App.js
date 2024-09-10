import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main";
import Gender from "./pages/Gender";
import Interest from "./pages/Interest";
import NickName from "./pages/NickName";
import Final from "./pages/Final";

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
