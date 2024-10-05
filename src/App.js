import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { styled } from "styled-components";

import { GlobalStyles, GlobalFonts } from "./GlobalStyles.js";
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
  // 후에 반응형으로 바꿀 때 쓸 코드
  // max-width: 500px;
  // height: 100%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
`;

export default App;
