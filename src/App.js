import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { styled } from "styled-components";
import { GlobalStyles, GlobalFonts } from "./GlobalStyles.js";

// 페이지 컴포넌트 import
import H100S from "./pages/H100S.js";
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
import R273C from "./pages/R273C.js";
import S100S from "./pages/S100S.jsx";
import TestPage from "./pages/TestPage.jsx";
import C300S from "./pages/C300S.jsx";
import Game from "./pages/Game.jsx";
import R00S from "./pages/R00S.jsx";
import M200C from "./pages/M200C.jsx";

function App() {
  return (
    <MainScreen>
      <HashRouter>
        <Routes>
          <Route path="/" element={<H100S />} />
          <Route path="/S100S" element={<S100S />} />
          <Route path="/J100S" element={<J100S />} />
          <Route path="/J210S" element={<J210S />} />
          <Route path="/J220S" element={<J220S />} />
          <Route path="/J230S" element={<J230S />} />
          <Route path="/J242S" element={<J242S />} />
          <Route path="/J241S" element={<J241S />} />
          <Route path="/J243S" element={<J243S />} />
          <Route path="/J244S" element={<J244S />} />
          <Route path="/J260S" element={<J260S />} />
          <Route path="/J310S" element={<J310S />} />
          <Route path="/J320S" element={<J320S />} />
          <Route path="/J330S" element={<J330S />} />
          <Route path="/C300S" element={<C300S />} />
          <Route path="/R273C" element={<R273C />} />
          <Route path="/game" element={<Game />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/H100S" element={<H100S />} />
          <Route path="/R00S" element={<R00S />} />
          <Route path="/M200C" element={<M200C />} />
        </Routes>
      </HashRouter>
      <GlobalFonts />
      <GlobalStyles />
    </MainScreen>
  );
}

const MainScreen = styled.div`
  //max-width: calc(100vh * 36 / 80);
  max-width: calc(100vh * 480 / 800);
  height: 100%;
  //width:360px;
  //height: 800px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
`;

export default App;