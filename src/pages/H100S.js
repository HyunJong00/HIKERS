import { styled } from "styled-components";

import location from "../assets/home/Location.svg";
import arrow from "../assets/home/Arrow.svg";

import Header from "../components/header/Header.js";
import Footer from "../components/common/Footer.jsx";
import AdvertiseBox from "../components/home/AdvertiseBox.js";
import MainTab from "../components/home/MainTab.js";
import SearchBox from "../components/home/SearchBox.js";
import RecommendationCourseBox from "../components/home/RecommendationCourseBox.js";
import { GlobalColor } from "../GlobalStyles.js";

export default function Home() {
  return (
    <>
      <Main>
        <div className="contents">
          <Header />
          <AdvertiseBox />
        </div>
        <MainTab />
      </Main>

      <Body>
        <div className="content">
          <SearchBox />
          <HeadContainer>
            <div>
              <div className="title">사용자 맞춤 추천 코스</div>
              <div className="location">
                <img src={location} alt="location" /> 전라북도 익산시, 신동
              </div>
            </div>
            <div className="sorting">
              정렬 순서 <img src={arrow} alt="arrow" />
            </div>
          </HeadContainer>
          <div className="courses">
            <RecommendationCourseBox />
          </div>
        </div>
      </Body>

      <Footer activeItem={"home"} />
    </>
  );
}

const Main = styled.div`
  width: 100%;

  .contents {
    margin: 0 16px;
  }
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: #fff;

  .content {
    margin: 0 16px;
    margin-top: 16px;

    .courses {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
`;

const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0 20px 0;

  div {
    flex-direction: column;
  }

  .title {
    color: ${GlobalColor.GrayScale[130]};
    font-feature-settings: "liga" off, "clig" off;
    font-family: Pretendard-7;
    font-size: 18px;
    line-height: 150%; /* 27px */
    letter-spacing: -0.225px;
  }

  .location {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 6px;

    img {
      width: 14px;
      height: 14px;

      margin-right: 4px;
    }

    color: ${GlobalColor.GrayScale[70]};
    font-feature-settings: "liga" off, "clig" off;
    font-family: Pretendard-5;
    font-size: 14px;
    line-height: 100%; /* 14px */
    letter-spacing: -0.175px;
  }

  .sorting {
    display: flex;
    flex-direction: row;
    align-items: center;

    color: ${GlobalColor.GrayScale[60]};
    font-feature-settings: "liga" off, "clig" off;
    font-family: Pretendard-5;
    font-size: 14px;
    line-height: 150%; /* 21px */
    letter-spacing: -0.175px;

    img {
      margin-left: 4px;
      width: 16px;
      height: 16px;
      // transform: rotate(90deg);
    }
  }
`;
