import { styled } from "styled-components";
import { useState } from "react";

import { GlobalColor } from "../../GlobalStyles";

export default function MainTab() {
  const [cur, setCur] = useState(1);
  const options = ["오르락 추천 코스", "테마별 코스", "지도 뷰"];

  return (
    <Container>
      {options.map((txt, index) => (
        <span
          onClick={() => setCur(index)}
          style={{
            color:
              cur === index ? GlobalColor.Main[80] : GlobalColor.GrayScale[50],
          }}
        >
          {txt}
        </span>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 12px 16px;
  align-items: center;
  gap: 16px;

  border-bottom: 1px solid ${GlobalColor.GrayScale[30]};

  span {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    overflow: hidden;
    font-feature-settings: "liga" off, "clig" off;
    text-overflow: ellipsis;
    font-family: Pretendard-7;
    font-size: 16px;
    line-height: 150%; /* 24px */
    letter-spacing: -0.2px;
  }
`;
