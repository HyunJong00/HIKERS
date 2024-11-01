import { createGlobalStyle } from "styled-components";

const GlobalColor = {
  Main: {
    100: "#276C2D",
    90: "#34823A",
    80: "#489E4F",
    70: "#5AC563", // main
    main: "#5AC563",
    60: "#7BD182",
    50: "#9CDCA1",
    40: "#BDE8C1",
    30: "#CDEED0",
    20: "#DEF3E0",
    10: "#EEF9EF",
  },
  GrayScale: {
    130: "#011327", // main
    main: "#011327",
    120: "#292e41",
    110: "#373f57",
    100: "#475067",
    90: "#5c667b",
    80: "#67738e",
    70: "#8491a7",
    60: "#96a0b5",
    50: "#b4c0d3",
    40: "#d7dce5",
    30: "#eaedf4", // border
    border: "#eaedf4",
    20: "#f4f6fa",
    10: "#f8fafc",
  },
  System: {
    ERROR: "#F04452",
    SUCCESS: "#5AC563",
    INFO: "#4A7FF7",
  },
  black: "#000000",
  white: "#ffffff",
  red: "#F04452",
  green: "#F04452",
  blue: "#4A7FF7",
};

const GlobalStyles = createGlobalStyle`
  body {
    background-color: rgb(255, 252, 230);
    -webkit-user-select: none;
    user-select: none;
    margin: 0px
  }
`;

const GlobalFonts = createGlobalStyle`
@font-face {
  font-family: 'Pretendard-1';
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Thin.woff') format('woff');
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard-2';
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraLight.woff') format('woff');
  font-weight: 200;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard-3';
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff') format('woff');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard-4';
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard-5';
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard-6';
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard-7';
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard-8';
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraBold.woff') format('woff');
  font-weight: 800;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard-9';
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Black.woff') format('woff');
  font-weight: 900;
  font-style: normal;
}
`;

export { GlobalStyles, GlobalFonts, GlobalColor };
