import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import backIcon from '../assets/images/backbutton.svg'; 
import xbuttonimage from '../assets/images/xbutton.svg';

function J230S() {
  const [authCode, setAuthCode] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [isFocused, setIsFocused] = useState(false); // 입력창 포커스 상태 추가
  const navigate = useNavigate();

  const correctAuthCode = "000000"; // 임시 인증번호 설정

  const onBack = () => navigate(-1);

  const onChange = (e) => {
    const input = e.target.value;
    const regex = /^[0-9\b]+$/; // 숫자만 입력하도록 허용
    if (input === "" || regex.test(input)) {
      setAuthCode(input);
      setIsInvalid(false); // 인증번호 입력 시 경고 초기화
    }
  };

  const onDelete = () => setAuthCode("");
  
  const onContinue = () => {
    if (authCode !== correctAuthCode) {
      setIsInvalid(true); // 인증번호가 다르면 경고 표시
    } else {
      setIsInvalid(false);
      navigate("/J242S"); // 성공 시 이동할 경로
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
          <Title>인증번호를 입력해 주세요</Title>
          <SubTitle>인증번호가 전송됐어요. 받은 번호를 입력하면 인증이 완료돼요.</SubTitle>

          <InputContainer isFocused={isFocused} authCode={authCode}>
            <AuthCodeInput
                type="text"
                maxLength={6} // 최대 6자리
                value={authCode}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}  // 입력창 포커스 핸들러
                onBlur={() => setIsFocused(false)}  // 입력창 블러 핸들러
                placeholder="6자리 숫자"
            />
            {authCode && (
                <DeleteButton onClick={onDelete}>
                <img src={xbuttonimage} alt="Clear" />
                </DeleteButton>
            )}
          </InputContainer>

          {isInvalid && ( // 인증번호가 다를 때만 경고문구 표시
            <Warning>올바르지 않은 인증번호입니다. 다시 입력해 주세요.</Warning>
          )}
        </MainContent>
        
        <Footer>
            <ContinueButton
                disabled={!authCode}
                onClick={onContinue}
                authCode={authCode}
            >
                계속하기
            </ContinueButton>
        </Footer>
    </Screen>
  );
}

export default J230S;

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

////Header부분(뒤로가기 버튼)////

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

////MainContent부분(인증번호 입력하는 부분)////

const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: flex-start;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 10px; /* input 공간을 더 위로 이동 */
`;

const Title = styled.h3`
    width: 100%; 
    font-size: 23px;
    font-family: Pretendard-7;
    text-align: left;  
    margin-top: 3px;
`;

const SubTitle = styled.p`
    width: 100%; 
    font-size: 15px;
    font-family: Pretendard-3;
    text-align: left;  
    margin-top: 0px;
`;

const InputContainer = styled.div`
    width: 100%; 
    height: 32px; 
    margin-top: 35px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid ${({ isFocused, authCode }) => isFocused || authCode ? "#5AC563" : "#ccc"}; /* 포커스 혹은 입력 중일 때 초록색 */
    padding-bottom: 5px;
    transition: border-bottom 0.3s ease;
`;

const AuthCodeInput = styled.input`
    border: none;
    font-size: 19px;
    font-family: Pretendard-3;
    outline: none;
    padding-left: 10px; /* 왼쪽 여백 추가 */
    flex-grow: 1; /* 입력 필드가 남은 공간을 차지하도록 설정 */
    
    ::placeholder {
        font-family: Pretendard-2; 
        color: #ccc;
    }
`;

const DeleteButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;

    img {
        width: 20px;
        height: 20px;
    }
`;

const Warning = styled.p`
    color: #ee434e;
    font-size: 12px;
    font-family: Pretendard-4;
    text-align: left; 
    margin-top: 10px;
`;

////Footer부분(계속하기 버튼)////

const Footer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContinueButton = styled.button`
    border-radius: 25px;
    color: white;
    font-size: 17px;
    font-family: Pretendard-6;
    border: none;
    height: 54px;
    width: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ authCode }) => authCode ? "#5AC563" : "#E6E6E6"}; /* 입력되면 초록색 */
    transition: background-color 0.3s ease;
`;
