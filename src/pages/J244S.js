import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import backIcon from '../assets/images/backbutton.png'; 
import xbuttonimage from '../assets/images/xbutton.png';

function J244S() {
  const [nickname, setNickname] = useState("");
  const [isExist, setIsExist] = useState(false); 
  const navigate = useNavigate();

  const onBack = () => navigate(-1);
  const onChange = (e) => setNickname(e.target.value);
  const onDelete = () => setNickname("");
  const onContinue = () => {
    if (nickname === "aa") {
      setIsExist(true);
      onDelete();
    } else {
      navigate("/J210S");
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
          <Title>멋진 별명을 만들어볼까요?</Title>
          <SubTitle>프로필에 표시되는 이름이에요.</SubTitle>

          <InputContainer nickname={nickname}>
              <NicknameInput
                type="text"
                placeholder="최대 10자"
                maxLength={10}
                value={nickname}
                onChange={onChange}
              />
              {nickname && (
                <DeleteButton onClick={onDelete}>
                  <img src={xbuttonimage} alt="Clear" />
                </DeleteButton>
              )}
          </InputContainer>

          <Warning isExist={isExist}>
              중복된 닉네임이에요. 다시 입력해 주세요.
          </Warning>
        </MainContent>
        
        <Footer>
            <FooterText>나중에 변경할 수 있어요. 편하게 입력해 주세요.</FooterText>
            <ContinueButton
                disabled={!nickname}
                onClick={onContinue}
                nickname={nickname}
            >
                계속하기
            </ContinueButton>
        </Footer>
    </Screen>
  );
}

export default J244S;

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
    width: 360px;
    height: 48px;
    align-items: center;
`;

const BackButton = styled.button`
    background: none;
    border: none;
    padding: 0;
    padding-left: 19.8px;
    cursor: pointer;

    img {
        width: 20px;
        height: 20px;
    }
`;

////MainContent부분(닉네임 입력하는 부분)////

const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;  /* 빈 공간을 채워서 Footer가 아래로 고정되도록 함 */
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
    width: 100%; 
    height: 20px; 
    font-size: 15px;
    font-family: Paperlogy-3;
    text-align: left;  
    margin-top: 1px; 
`;

const InputContainer = styled.div`
    width: 320px; 
    height: 32px; 
    margin-top: 30px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid ${(props) => (props.nickname ? "#5AC563" : "#ccc")}; 
    padding-bottom: 5px;
    transition: border-bottom 0.3s ease;
`;

const NicknameInput = styled.input`
    border: none;
    font-size: 19px;
    font-family: Paperlogy-3;
    outline: none;
    
    ::placeholder {
        font-family: Paperlogy-2; 
        color: #ccc;
    }
`;

const DeleteButton = styled.button`
    background: none;
    border: none;
    margin-left: 50px;
    cursor: pointer;

    img {
        width: 20px;
        height: 20px;
    }
`;

const Warning = styled.p`
    color: #ee434e;
    font-size: 12px;
    font-family: Paperlogy-4;
    text-align: left; 
    visibility: ${(props) => (props.isExist ? "visible" : "hidden")};
    margin-top: 10px;
`;

////Footer부분(계속하기 버튼)////

const Footer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FooterText = styled.p`
    font-size: 13px;
    font-family: Paperlogy-4;
    margin-bottom: 11px;
    text-align: center;
`;

const ContinueButton = styled.button`
    border-radius: 25px;
    color: white;
    font-size: 17px;
    font-family: Paperlogy-6;
    border: none;
    height: 54px;
    width: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => (props.nickname ? "#5AC563" : "#E6E6E6")};
    transition: background-color 0.3s ease;
`;
