import { styled } from "styled-components";

export default function FilterButtons() {
  const options = ["+", "오르락 추천순", "난이도순", "인기순", "거리순"];

  return (
    <>
      {options.map((text, index) => (
        <>
          <OptionButton>{text}</OptionButton>
        </>
      ))}
    </>
  );
}

const OptionButton = styled.button`
  display: flex;
  padding: 6.159px 10px;
  justify-content: center;
  align-items: center;
  gap: 2.431px;

  border-radius: 15.398px;
  border: 0.405px solid #4d6162;
  background: rgba(255, 255, 255, 0.9);

  color: #2b3737;
  font-family: Paperlogy-4;
  font-size: 10.779px;
  font-style: normal;
  line-height: 15.398px; /* 142.857% */
  letter-spacing: 0.062px;
`;
