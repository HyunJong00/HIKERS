import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import backIcon from '../assets/images/backbutton.svg'; 
import profileIcon from '../assets/images/profileicon.svg'; 
import leagueIcon from '../assets/images/leagueicon.svg'; 
import levelIcon from '../assets/images/mountimage.svg';
import editIcon from '../assets/images/editicon.svg'; 
import informationFrame from '../assets/images/frame/informationframe.svg';
import postFrame from '../assets/images/frame/postframe.svg';
import chatFrame from '../assets/images/frame/chatframe.svg';

import Footer from '../components/common/Footer.jsx';

function R273C() {
    const navigate = useNavigate();
    const onBack = () => navigate(-1);
    const [activeTab, setActiveTab] = useState("등산 정보");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const goToLeague = () => navigate("/game");
    const goToGame = () => navigate("/game");

    const renderContent = () => {
        switch (activeTab) {
            case "등산 정보":
                return <img src={informationFrame} alt="Information Frame" />;
            case "게시글":
                return <img src={postFrame} alt="Post Frame" />;
            case "1:1 채팅":
                return <img src={chatFrame} alt="Chat Frame" />;
            default:
                return null;
        }
    };

    return (
        <Screen>
            <Header>
                <BackButton onClick={onBack}>
                    <img src={backIcon} alt="Back" />
                </BackButton>
                <Title>유저 프로필</Title>
                <EditButton>
                    <img src={editIcon} alt="Edit" />
                </EditButton>
            </Header>

            <MainContent>
                <UserInfo>
                    <ProfilePic>
                        <img src={profileIcon} alt="Profile" />
                    </ProfilePic>
                    <ProfileDetails>
                        <UserName>남딴이</UserName>
                        <UserStats>
                            <Badge>초보 등산가</Badge>
                            <Stat>완등 7회</Stat>
                        </UserStats>
                    </ProfileDetails>
                    <InfoEditButton>정보 수정</InfoEditButton>  
                </UserInfo>
                <UserRank>
                    <LeagueBox onClick={goToLeague}> 
                        <img src={leagueIcon} alt="League" />
                        <RankInfo>실버 League</RankInfo>
                        <RankPosition>5위</RankPosition>
                    </LeagueBox>
                    <GameBox onClick={goToGame}> 
                        <img src={levelIcon} alt="Level" />
                        <GameContent>
                            <GameInfoContainer>
                                <GameRankInfo>오르락 World</GameRankInfo>
                                <GameFollowers>팔로잉 25 팔로워 230</GameFollowers>
                            </GameInfoContainer>
                            <GameLevel>Lv.4</GameLevel>
                        </GameContent>
                    </GameBox>
                </UserRank>
            </MainContent>

            <Tabs>
                <Tab onClick={() => handleTabClick("등산 정보")} active={activeTab === "등산 정보"}>
                    등산 정보
                </Tab>
                <Tab onClick={() => handleTabClick("게시글")} active={activeTab === "게시글"}>
                    게시글
                </Tab>
                <Tab onClick={() => handleTabClick("1:1 채팅")} active={activeTab === "1:1 채팅"}>
                    1:1 채팅
                </Tab>
            </Tabs>
            
            <ContentContainer>
                <EmptyContent>
                    {renderContent()}
                </EmptyContent>
            </ContentContainer>

            <Footer activeItem={"inquiry"}/>
        </Screen>
    );
}

export default R273C;

// Styled-components
const Screen = styled.div`
    width: 360px;
    height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 44px 0;
`;

const Header = styled.div`
    display: flex;
    width: 100%;
    height: 48px;
    align-items: center;
`;

const BackButton = styled.button`
    background: none;
    border: none;
    padding-left: 19.8px;
    cursor: pointer;

    img {
        width: 20px;
        height: 20px;
    }
`;

const Title = styled.h2`
    font-size: 23px;
    font-family: Pretendard-7;
    padding-left: 6px;
`;

const EditButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
  margin-right: 6px;

  img {
    width: 33px;
    height: 33px;
  }
`;

const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 320px; 
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 26px;
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    width: 100%;
`;

const ProfilePic = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 12px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ProfileDetails = styled.div`
    display: flex;
    flex-direction: column;
`;

const UserName = styled.div`
    font-size: 18px;
    font-family: Pretendard-6;
    color: #333;
    margin-bottom: 7px;
`;

const UserStats = styled.div`
    display: flex;
    gap: 12px;
`;

const Badge = styled.div`
    background-color: #DEF3E0;
    border-radius: 10px;
    padding: 4px 8px;
    font-size: 11px;
    font-family: Pretendard-7;
    color: #489E4F;
`;

const Stat = styled.div`
    font-size: 14px;
    color: #888;
    font-family: Pretendard-4;
`;

const InfoEditButton = styled.button`
    background-color: #EAEDF4; 
    border: none;
    color: #333; 
    font-size: 13px;
    font-family: Pretendard-6;
    padding: 6px 12px;
    border-radius: 10px;
    cursor: pointer;
    margin-left: auto;
`;

const UserRank = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-bottom: 16px;
`;

const LeagueBox = styled.div`
  background-color: #ffffff;
  padding: 12px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 20px);
  margin-right: 10px;
  border: 1px solid #EAEDF4;

  img {
    width: 36px;  
    height: 36px;
    margin-right: 8px;
  }
`;

const RankInfo = styled.div`
  font-size: 15px;
  font-family: Pretendard-6;
  display: flex;
  align-items: center;
  color: #333;
  justify-content: flex-start;
`;

const RankPosition = styled.div`
  font-size: 15px;
  font-family: Pretendard-6;
  color: #333;
  margin-left: auto;
`;

const GameBox = styled.div`
  background-color: #EEF9EF;
  padding: 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  border: 1px solid #5AC563;
  width: calc(100% - 20px);
  margin-right: 10px;

  img {
    width: 36px; 
    height: 36px; 
  }
`;

const GameContent = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
`;

const GameInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 8px;
`;

const GameRankInfo = styled.div`
  font-size: 15px;
  font-family: Pretendard-6;
`;

const GameFollowers = styled.div`
  font-size: 13px;
  font-family: Pretendard-5;
  color: #888;
  margin-top: 4px;
`;

const GameLevel = styled.div`
  font-size: 15px;
  font-family: Pretendard-6;
  margin-left: auto;
`;

const Tabs = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  border-bottom: 1px solid #e0e0e0;
  margin-top: 8px;
`;

const Tab = styled.div`
  font-size: 16px;
  font-family: Pretendard-7;
  color: ${(props) => (props.active ? "#333" : "#888")};
  cursor: pointer;
  position: relative;
  padding: 8px 0;
  width: 33.33%;
  text-align: center;

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${(props) => (props.active ? "#333" : "#e0e0e0")};
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const ContentContainer = styled.div`
    flex-grow: 1;
    width: 100%;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const EmptyContent = styled.div`
    width: 100%;
    height: 270px; /* 원하는 높이로 제한 */
    display: flex;
    justify-content: center;
    align-items: center;
    color: #888;
    font-family: Pretendard-4;
    font-size: 14px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
