import { useState } from "react";

import styled from "styled-components";

import mountainImage from "../../assets/home/MountainImage.jpg";
import { ReactComponent as Favorite } from "../../assets/home/Favorite.svg";
import { GlobalColor } from "../../GlobalStyles";

const mountainData = [
  {
    id: 1,
    name: "응봉산",
    course: "팔각정 코스",
    image: mountainImage,
  },
  {
    id: 2,
    name: "청계산",
    course: "원터골 입구 코스",
    image: mountainImage,
  },
  {
    id: 3,
    name: "불암산",
    course: "원터골 입구 코스",
    image: mountainImage,
  },
  {
    id: 4,
    name: "속리산",
    course: "문장대 코스",
    image: mountainImage,
  },
  {
    id: 5,
    name: "속리산",
    course: "문장대 코스",
    image: mountainImage,
  },
];

export default function RecommendationCourseBox() {
  const [userFavorites, setUserFavorites] = useState([]);

  const onClick = (id) => {
    if (userFavorites.includes(id)) {
      setUserFavorites(userFavorites.filter((element) => element !== id));
    } else setUserFavorites([...userFavorites, id]);
  };

  return mountainData.map((element) => (
    <Box style={{ backgroundImage: `url(${element.image})` }}>
      <div className="gradation" />
      <Title>{element.name}</Title>
      <Course>{element.course}</Course>
      <FavoriteButton onClick={() => onClick(element.id)}>
        {userFavorites.includes(element.id) ? (
          <Favorite fill="red" stroke="red" />
        ) : (
          <Favorite fill="none" stroke="white" />
        )}
      </FavoriteButton>
    </Box>
  ));
}

const Box = styled.div`
  aspect-ratio: 1; // 가로세로 비율
  width: calc(100% / 2 - 5px);
  z-index: 0;
  background-repeat: no-repeat;

  border-radius: 8px;
  background: #d9d9d9;
  margin-bottom: 10px;

  position: relative;

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: calc(100% * 0.8);
    flex-shrink: 0;
    z-index: -1;
    position: relative;
    // top: -24px;

    border-radius: 8px 8px 0px 0px;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }
`;

const Title = styled.div`
  position: absolute;
  top: 12px;
  left: 16px;

  color: ${GlobalColor.white};
  font-feature-settings: "liga" off, "clig" off;
  font-family: Pretendard-7;
  font-size: 16px;
  line-height: 150%; /* 24px */
  letter-spacing: -0.2px;
`;

const Course = styled.div`
  position: absolute;
  top: 38px;
  left: 16px;

  color: ${GlobalColor.white};
  font-feature-settings: "liga" off, "clig" off;
  font-family: Pretendard-5;
  font-size: 13px;
  line-height: 150%; /* 19.5px */
  letter-spacing: -0.162px;
`;

const FavoriteButton = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 10px;
  right: 10px;
`;
