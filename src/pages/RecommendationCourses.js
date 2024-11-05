import styled from "styled-components";

import location from "../assets/home/Location.svg";

import FilterButtons from "../components/home/FilterButtons";
import RecommendationCourseBox from "../components/home/RecommendationCourseBox";

export default function RecommendationCourses() {
  return (
    <Container>
      {/* 첫 "+" 버튼은 따로 만들어야 할 듯 */}
      <div className="filter">
        <FilterButtons /> {/* 아직 기능 없음 */}
      </div>

      <div className="containedContent">
        <div className="head">
          <span className="title">오르락 사장님 추천코스</span>
          <div className="location">
            <img src={location} alt="location" />
            {/* 임시 텍스트 */}
            <span className="locationText">익산시, 신동</span>
          </div>
        </div>
        <div className="subtitle">
          유저님을 위해 오르락 멤버들이 손수 모아봤어요!
          <br />
          1:1 맞춤형 등산로 포트폴리오
        </div>

        <div className="courses">
          <RecommendationCourseBox />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .filter {
    border-radius: 10px;

    height: 18px;
    padding: 13.537px 11.732px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: linear-gradient(to right, #ddfdff, #fbf4ff);

    :first-child {
      color: #4d6162;
      font-size: 16.168px;
    }
  }

  .containedContent {
    margin: 0 16.52px;
    margin-top: 13.93px;
    overflow: auto;
  }

  .head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4.6px;
  }

  .title {
    color: #2c3624;
    font-family: Paperlogy-6;
    font-size: 20.891px;
    font-style: normal;
    line-height: normal;
  }

  .location {
    display: flex;
    align-items: center;
  }

  .locationText {
    display: flex;
    padding: 1.741px 4.353px;
    align-items: center;
    gap: 4.89px;
    margin-left: 8px;

    border-radius: 4.353px;
    background: #f3f3f3;

    color: #717171;
    font-family: Paperlogy-4;
    font-size: 11.002px;
    font-style: normal;
    line-height: 150%; /* 16.502px */
  }

  .subtitle {
    color: #6f726c;
    font-family: Paperlogy-5;
    font-size: 11.316px;
    font-style: normal;
    line-height: normal;
    margin-bottom: 26.74px;
  }

  .courses {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
