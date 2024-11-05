import styled from "styled-components";
import { useNavigate } from "react-router-dom";


import logo from "../../assets/OrurakLogo.png";
import { ReactComponent as Favorite } from "../../assets/home/Favorite.svg";
import notice from "../../assets/home/Notice.svg";

import { GlobalColor } from "../../GlobalStyles";

export default function Header() {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate('/R00S'); // 지정된 경로로 이동
  };



  return (
    <Head>
      <Title>
        <img className="logo" src={logo} alt="logo" />
        오르락
      </Title>
      <IconContainer>
        <Favorite fill="none" stroke="black" />
        <img src={notice} alt="notice" />
        {/* 임시 사용자 프로필 */}
        <div className="profile" onClick={handleNavigation} style = {{cursor:'pointer'}}>에이든</div>
      </IconContainer>
    </Head>
  );
}

const Head = styled.div`
  margin: 47px 0 15.5px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  .logo {
    width: 30.69px;
    height: 30.15px;
    margin-right: 5px;
  }
`;

const Title = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: ${GlobalColor.Main[100]};
  font-family: Pretendard-7;
  font-size: 24px;
  font-style: normal;
  font-feature-settings: "liga" off, "clig" off;
  line-height: 150%; /* 36px */
  letter-spacing: -0.3px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
    margin: 0 6px;
  }

  // 임시코드
  .profile {
    display: flex;
    justify-content: center;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    align-items: center;
    margin: 0 6px;

    background-color: green;
    color: #fff;

    text-align: center;
    font-feature-settings: "liga" off, "clig" off;
    font-family: Pretendard-7;
    font-size: 10px;
    line-height: 150%; /* 15px */
    letter-spacing: -0.125px;
  }
`;
