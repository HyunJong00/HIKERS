import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logoIcon from '../assets/images/logo.svg'; 
import kakaoIcon from '../assets/images/kakaotalk.svg';
import googleIcon from '../assets/images/google.svg'; 
import naverIcon from '../assets/images/naver.svg';

function J100S() {
  const navigate = useNavigate();

  const onContinue = () => {
    navigate("/J220S"); // 회원가입 페이지로 이동
  };

  const onLogin = () => {
    navigate("/J310S"); // 로그인 페이지로 이동
  };

  return (
    <Screen>
      <MainContent>
        <Logo>
          <img src={logoIcon} alt="Logo" />
        </Logo>
        <Title>지금 바로<br />새로운 모험에 뛰어드세요</Title>
      </MainContent>

      <Footer>
        <StartButton onClick={onContinue}>새로 시작하기</StartButton>
        <SNSDescription>또는 SNS로 3초만에 시작하기</SNSDescription>
        <SNSButtons>
            <SNSButton><img src={kakaoIcon} alt="Kakao" /></SNSButton>
            <SNSButton><img src={googleIcon} alt="Google" /></SNSButton>
            <SNSButton><img src={naverIcon} alt="Naver" /></SNSButton>
        </SNSButtons>
        <ExistingAccountButton onClick={onLogin}>이미 계정이 있나요?</ExistingAccountButton>
      </Footer>
    </Screen>
  );
}

export default J100S;

// Styled-components
const Screen = styled.div`
    width: 360px;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 44px 34px;
`;

const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
`;

const Logo = styled.div`
    img {
        width: 50px;
        height: 50px;
    }
`;

const Title = styled.h2`
    font-size: 20px;
    font-family: 'Pretendard-6';
    color: #333;
    text-align: center;
`;

const Footer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
`;

const StartButton = styled.button`
    height: 48px;
    width: 343px;
    background-color: #5AC563;
    color: white;
    font-size: 16px;
    font-family: 'Pretendard-6';
    border: none;
    border-radius: 10px;
    cursor: pointer;
`;

const SNSDescription = styled.p`
    height: 21px;
    width: 343px;
    font-size: 14px;
    color: #666;
    margin-top: 16px;
    margin-bottom: 16px;
    font-family: 'Pretendard-4';
    text-align: center;
`;

const SNSButtons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 343px; /* 최대 너비 설정 */
`;

const SNSButton = styled.button`
    width: 107px;
    height: 48px;
    background-color: #f1f1f5;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 24px;
        height: 24px;
    }
`;

const ExistingAccountButton = styled.button`
    height: 48px;
    width: 343px;
    background-color: #f1f1f5;
    color: #666;
    font-size: 14px;
    font-family: 'Pretendard-4';
    border: none;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;
    margin-top: 10px;
`;
