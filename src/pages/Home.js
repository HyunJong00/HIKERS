import { styled } from "styled-components";

import icons from "../assets/home/icons.svg";
import profile from "../assets/home/profile.png";
import mainBg from "../assets/home/main.png";

import Menu from "../components/menubar/MenuBar.js";
import AdvertiseBox from "../components/home/AdvertiseBox.js";
import MainTab from "../components/home/MainTab.js";

import RecommendationCourses from "./RecommendationCourses.js";

export default function Home() {
  return (
    <>
      <Main>
        <div className="contents">
          <div className="head">
            <span className="title">오르락</span>
            <div className="iconContainer">
              <img className="icons" src={icons} alt="icons" />
              <img className="profile" src={profile} alt="profile" />
            </div>
          </div>
          <AdvertiseBox />
          <MainTab />
        </div>
      </Main>

      <Body>
        <div className="content">
          <RecommendationCourses />
        </div>
      </Body>

      <Menu />
    </>
  );
}

const Main = styled.div`
  width: 100%;
  height: 274px;
  /* flex: 1; */
  /* background-color: #b5e3b1; */
  background-image: url(${mainBg});
  background-size: cover;

  .contents {
    margin: 0 13.37px;
  }

  .head {
    margin: 36.5px 0 15.5px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 6.63px;

    color: #fff;
    font-family: Paperlogy-6;
    font-size: 29.248px;
    font-style: normal;
    line-height: 140%; /* 40.947px */
  }

  .iconContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icons {
    margin-right: 6.63px;
  }

  .profile {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid white;
    margin: 0 6.63px;
  }
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: #fff;

  .content {
    margin: 0 13.37px;
    border-radius: 10px;
    border: 1px solid #aca8a8;
    background: #fff;
    margin-top: 10px;
  }
`;
