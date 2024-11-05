import styled from "styled-components";

import pin from "../../assets/home/search-pin.svg";
import filter from "../../assets/home/search-filter.svg";

import { GlobalColor } from "../../GlobalStyles";

export default function SearchBox() {
  return (
    <Container>
      <div>
        <img src={pin} alt="pin" />
        <Input />
      </div>
      <img className="filter" src={filter} alt="filter" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 16px;
  align-items: center;
  gap: 10px;

  border-radius: 8px;
  border: 1.5px solid ${GlobalColor.Main.main};
  background: ${GlobalColor.white};

  .filter: {
    margin: 10px;
  }
`;

const Input = styled.input.attrs({
  type: "text",
  placeholder: "등산로 검색하기",
})`
  width: 245px;
  margin-left: 10px;
  border: none;

  color: ${GlobalColor.GrayScale[50]};
  font-feature-settings: "liga" off, "clig" off;
  font-family: Pretendard-4;
  font-size: 16px;
  line-height: 150%; /* 24px */
  letter-spacing: -0.2px;

  &::placeholder {
    color: ${GlobalColor.GrayScale[50]};
  }
`;

// 상자 높이 .
// 인풋 선택했을 때 border
// 필터 버튼 설정
