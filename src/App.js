import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalFonts from "./styles/GlobalFonts.js";
import GlobalStyles from "./styles/GlobalStyles.js";
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
      <GlobalStyles />
    </>
  );
}

export default App;
