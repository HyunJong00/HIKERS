import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { styled } from "styled-components";
import { GlobalStyles, GlobalFonts } from "./GlobalStyles.js";
import J100S from "./pages/J100S.js";
import J220S from "./pages/J220S.js";
import J230S from "./pages/J230S.js";
import J242S from "./pages/J242S.js";
import J241S from "./pages/J241S.js"; 
import J243S from "./pages/J243S.js";
import J244S from "./pages/J244S.js";
import J210S from "./pages/J210S.js";
import J260S from "./pages/J260S.js";
import J310S from "./pages/J310S.js";
import J320S from "./pages/J320S.js";
import J330S from "./pages/J330S.js";
import S100S from "./pages/S100S.jsx";
import TestPage from "./pages/TestPage.jsx";
import C300S from "./pages/C300S.jsx";

const router = createBrowserRouter(
  [
    { path: "/", element: <S100S /> },
    { path: "/S100S", element: <S100S /> },
    { path: "/J100S", element: <J100S /> },
    { path: "/J210S", element: <J210S /> },
    { path: "/J220S", element: <J220S /> },
    { path: "/J230S", element: <J230S /> },
    { path: "/J242S", element: <J242S /> },
    { path: "/J241S", element: <J241S /> },
    { path: "/J243S", element: <J243S /> },
    { path: "/J244S", element: <J244S /> },
    { path: "/J260S", element: <J260S /> },
    { path: "/J310S", element: <J310S /> },
    { path: "/J320S", element: <J320S /> },
    { path: "/J330S", element: <J330S /> },
    { path: "/C300S", element: <C300S /> },
    { path: "/test", element: <TestPage /> }
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
  max-width: calc(100vh * 480/800);
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
`;

export default App;