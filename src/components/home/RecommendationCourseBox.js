// 임시 코드

import styled from "styled-components";

import mountainImage from "../../assets/home/MountainImage.jpg";
import { ReactComponent as RightArrow } from "../../assets/home/RightArrow.svg";

const mountainData = [
  {
    name: "응봉산",
    courses: ["팔각정 코스"],
    image: mountainImage,
  },
  {
    name: "아차산",
    courses: ["정상길 코스", "용마산-망우산 연계산행코스"],
    image: mountainImage,
  },
  {
    name: "불암산",
    courses: ["정상길 코스", "용마산-망우산 연계산행코스"],
    image: mountainImage,
  },
  {
    name: "북한산",
    courses: ["정상길 코스", "용마산-망우산 연계산행코스"],
    image: mountainImage,
  },
];

export default function RecommendationCourseBox() {
  return mountainData.map((element) => (
    <Box>
      <img src={element.image} alt="mountain" />
      <Title>{element.name}</Title>
      {element.courses.map((course) => (
        <Course>
          {course} <RightArrow />
        </Course>
      ))}
    </Box>
  ));
}

const Box = styled.div`
  padding: 10px;
  margin-bottom: 10px;

  border-radius: 10.231px;
  border: 0.853px solid var(--background, #efeff0);
  background: var(--white, #fff);
  box-shadow: 0px 2.558px 3.41px 0px rgba(0, 0, 0, 0.25);

  img {
    width: 120px;
    height: 80px;
    flex-shrink: 0;

    border-radius: 6.821px;
    border: 1.705px solid var(--subtle-light, #afb1b6);
    background: url(<path-to-image>) lightgray 50% / cover no-repeat;
  }
`;

const Title = styled.div`
  color: var(--color-foundation-grey-normal-active, #242424);
  font-family: Paperlogy-7;
  font-size: 13.642px;
  font-style: normal;
  line-height: 150%; /* 20.462px */
`;

const Course = styled.div`
  color: #686868;
  font-family: Paperlogy-7;
  font-size: 10.231px;
  font-style: normal;
  line-height: 150%; /* 15.347px */

  display: flex;
  align-items: center;
`;
