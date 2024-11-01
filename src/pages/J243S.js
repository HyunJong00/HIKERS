import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import backIcon from '../assets/images/backbutton.png';
import downIcon from '../assets/images/downbutton.png';

function LJ243S() {
  const navigate = useNavigate();

  const [difficulty, setDifficulty] = useState("");
  const [time, setTime] = useState("");
  const [summit, setSummit] = useState("");
  const [height, setHeight] = useState("");
  const [access, setAccess] = useState("");

  const onBack = () => navigate(-1);
  const onSkip = () => navigate("/J244S");
  
  // 계속하기 버튼이 모든 항목이 선택되었는지 확인
  const isAllSelected = difficulty && time && summit && height && access;

  const onContinue = () => {
    if (isAllSelected) {
      navigate("/J244S");
    }
  };

  return (
    <Screen>
      <Header>
        <BackButton onClick={onBack}>
          <img src={backIcon} alt="Back" />
        </BackButton>
      </Header>

      <MainContent>
        <Title>자신의 등산취향을 소개해 주세요</Title>
        <SubTitle>
          완성한 문장으로 본인에게 꼭 맞는 등산로를 추천해드려요. 맨 아래 키워드는 최소 2개 이상 선택해 주세요.
        </SubTitle>

        <SelectContainer>
          <SelectBox>
            <span>“내 실력이면 등산로가</span>
            <CustomSelect onChange={(e) => setDifficulty(e.target.value)}>
              <option value="">난이도 선택</option>
              <option value="쉬움">쉬움</option>
              <option value="중간">중간</option>
              <option value="어려움">어려움</option>
            </CustomSelect>
            좋을 것 같아.”
          </SelectBox>

          <SelectBox>
            <span>“하산까지의 소요시간은</span>
            <CustomSelect onChange={(e) => setTime(e.target.value)}>
              <option value="">시간 선택</option>
              <option value="1시간">1시간</option>
              <option value="2시간">2시간</option>
              <option value="3시간">3시간</option>
            </CustomSelect>
            정도면 적당할듯!?”
          </SelectBox>

          <SelectBox>
            <span>“산행의 화룡점정! 정상석은 반드시</span>
            <CustomSelect onChange={(e) => setSummit(e.target.value)}>
              <option value="">유무 선택</option>
              <option value="있어야 함">있어야 함</option>
              <option value="없어도 됨">없어도 됨</option>
            </CustomSelect>
            ”
          </SelectBox>

          <SelectBox>
            <span>“산 최고봉 높이는</span>
            <CustomSelect onChange={(e) => setHeight(e.target.value)}>
              <option value="">정상 고도 선택</option>
              <option value="200m 이하">200m 이하</option>
              <option value="500m 이하">500m 이하</option>
              <option value="1000m 이상">1000m 이상</option>
            </CustomSelect>
            가 적당하겠어.”
          </SelectBox>

          <SelectBox>
            <span>“등산길부터 교통시설까지</span>
            <CustomSelect onChange={(e) => setAccess(e.target.value)}>
              <option value="">접근성 선택</option>
              <option value="짧음">짧음</option>
              <option value="보통">보통</option>
              <option value="김">김</option>
            </CustomSelect>
            은 돼야 해!”
          </SelectBox>
        </SelectContainer>
      </MainContent>

      <HashtagContainer>
          {["#정상뷰_맛집", "#연계_산행", "#한적함", "#제철축제", "#꽃놀이", "#방문객_많음", "#인기구조물", "#꼭대기엔_평지", "#주변맛집", "#연박_탐험", "#아름다운_절"].map((element) => (
            <HashtagBox key={element}>{element}</HashtagBox>
          ))}
      </HashtagContainer>

      <Footer>
        <FooterText>나중에 변경할 수 있어요. 편하게 입력해 주세요.</FooterText>
        <ButtonContainer>
          <ContinueButton onClick={onContinue} disabled={!isAllSelected}>
            계속하기
          </ContinueButton>
          <SkipButton onClick={onSkip}>건너뛰기</SkipButton>
        </ButtonContainer>
      </Footer>
    </Screen>
  );
}

export default LJ243S;

const Screen = styled.div`
    width: 360px;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 44px 34px;
`;

/////Header부분(뒤로가기 버튼)/////

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

/////MainContent부분(취향 선택하는 부분)/////

const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: flex-start;
    margin-left: 19.8px; 
    margin-right: 19.8px;
`;

const Title = styled.h3`
    width: 100%;
    height: 27px;
    font-size: 23px;
    font-family: Paperlogy-7;
    text-align: left;
    margin-top: 20px;
`;

const SubTitle = styled.p`
    width: auto;
    height: 20px;
    font-size: 15px;
    font-family: Paperlogy-3;
    text-align: left;
    margin-top: 0px;
    box-sizing: border-box;
`;

const SelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`;

const SelectBox = styled.div`
    background-color: #e7f9f8;
    border-radius: 100px;
    padding: 5px 15px;  /* 높이를 줄이기 위해 padding 조정 */
    font-size: 13px;
    font-family: Paperlogy-7;
    text-align: center;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;  /* 텍스트와 select가 수직으로 정렬되도록 유지 */
    height: 35px;  /* SelectBox의 고정 높이 설정 */
    width: auto; /* 너비를 자동으로 설정 */
`;

const CustomSelect = styled.select`
    appearance: none;  /* 기본 드롭다운 아이콘 숨기기 */
    border: none;  /* 테두리 없애기 */
    background: white url(${downIcon}) no-repeat right 10px center;  /* 배경 흰색, 아이콘을 우측에 배치 */
    background-size: 15px;  /* 아이콘 크기 조절 */
    padding: 5px 30px 5px 10px;  /* 위아래 패딩을 줄여서 높이 감소 */
    font-family: Paperlogy-4;
    font-size: 13px;
    border-radius: 4px;
    height: 25px;  /* 높이를 명확하게 설정 */
    width: auto;  /* 드롭다운 너비 설정 */
    box-sizing: border-box;
    vertical-align: middle;  /* 텍스트와 select 요소의 높이를 맞춤 */
`;

const HashtagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
`;

const HashtagBox = styled.div`
    background: linear-gradient(to right, #adf5ed, #fce7ff);
    border-radius: 8px;
    padding: 5px 10px;
    margin: 5px;
    font-size: 9.9px;
    font-family: Paperlogy-7;
`;

/////Footer부분(건너뛰기, 계속하기 버튼)/////

const Footer = styled.div`
  text-align: center;
`;

const FooterText = styled.p`
  color: #6d6d6d;
  font-size: 13px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    gap: 30px; /* 버튼 사이의 간격 추가 */
`;

const SkipButton = styled.button`
    background-color: #5AC563; /* 색상 변경 */
    color: white;
    padding: 15px 40px; /* 버튼 좌우로 길어지게 변경 */
    border-radius: 50px;
    border: none;
    font-size: 17px;
    font-family: Paperlogy-7;
`;

const ContinueButton = styled.button`
    background-color: ${(props) => (props.disabled ? "#E6E6E6" : "#5AC563")};
    color: white;
    padding: 15px 40px; /* 버튼 좌우로 길어지게 변경 */
    border-radius: 50px;
    border: none;
    font-size: 17px;
    font-family: Paperlogy-7;
    transition: background-color 0.3s ease;
`;

