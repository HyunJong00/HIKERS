import { styled } from "styled-components";
import { useState } from "react";

import search from "../../assets/home/Search.svg";

export default function MainTab() {
  const [cur, setCur] = useState(1);
  const options = [
    `지도 뷰 <img src=${search} alt='s' />`,
    "오르락 추천코스",
    "테마별 코스",
  ];

  return (
    <Container>
      {options.map((txt, index) => (
        <span
          onClick={() => setCur(index)}
          dangerouslySetInnerHTML={{ __html: txt }}
          style={{ color: cur === index ? "#000" : "#3C6270" }}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 34px;
  padding: 3px;
  align-items: center;
  margin-top: 8.5px;
  justify-content: space-evenly;

  border-radius: 10px;
  border: 0.8px solid #a1bfce;
  background: #fff;
  box-shadow: 0px 0.8px 3.2px 0px rgba(0, 0, 0, 0.25);

  span {
    color: #3c6270;
    text-align: center;
    font-feature-settings: "liga" off, "clig" off;
    font-family: Paperlogy-6;
    font-size: 13.057px;
    font-style: normal;
    line-height: 16.713px; /* 128% */
    display: flex;
    align-items: center;
  }

  img {
    width: 13.928px;
    height: 13.928px;
    flex-shrink: 0;
  }
`;
