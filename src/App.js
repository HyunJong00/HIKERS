import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { styled } from "styled-components";

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
    <MainScreen>
      <RouterProvider router={router} />
      <GlobalFonts />
      <GlobalStyles />
    </MainScreen>
  );
}

const MainScreen = styled.div`
  width: 360px;
  height: 800px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
`;

export default App;
