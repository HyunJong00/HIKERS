import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalFonts from "./styles/GlobalFonts.js";
import Home from "./pages/Home.js";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
  ],
  { basename: process.env.PUBLIC_URL }
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <GlobalFonts />
    </>
  );
}

export default App;
