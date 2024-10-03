import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import backIcon from '../assets/images/backbutton.png';
import xbuttonimage from '../assets/images/xbutton.png';

function J310S() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [isFocused, setIsFocused] = useState(false); // 입력창 포커스 상태 추가
  const navigate = useNavigate();

  const validPhoneNumber = "01012345678"; // 임시로 지정된 전화번호

  const onBack = () => navigate(-1);
  const onChange = (e) => {
    const input = e.target.value;
    const regex = /^[0-9\b]+$/; // 숫자만 입력하도록 허용
    if (input === "" || regex.test(input)) {
      setPhoneNumber(input);
      setIsInvalid(false); // 전화번호 입력 시 경고 초기화
    }
  };

  const onDelete = () => setPhoneNumber("");

  const onContinue = () => {
    // 지정된 전화번호와 일치하는지 확인
    if (phoneNumber !== validPhoneNumber) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
      navigate("/J320S"); // 일치하면 다음 화면으로 이동
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
        <Title>휴대폰 번호로 로그인해 주세요</Title>
        <SubTitle>
          허위/중복 가입을 막고, 악성 사용자를 제재하는 데 사용해요. 입력한 번호는 절대 공개되지 않아요.
        </SubTitle>

        <InputContainer isFocused={isFocused} phoneNumber={phoneNumber}>
          <PhoneNumberInput
            type="text"
            maxLength={11} // 최대 11자리 (하이픈 제외)
            value={phoneNumber}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}  // 포커스 핸들러
            onBlur={() => setIsFocused(false)}  // 포커스 해제 핸들러
          />
          {phoneNumber && (
            <DeleteButton onClick={onDelete}>
              <img src={xbuttonimage} alt="Clear" />
            </DeleteButton>
          )}
        </InputContainer>

        {isInvalid && ( // 전화번호가 잘못되었을 때만 경고문구 표시
          <WarningContainer>
            <Warning>가입되어 있지 않은 번호입니다. 번호를 다시 입력해주세요.</Warning>
            <EmailPrompt>등록해 놓은 이메일이 있나요?</EmailPrompt>
          </WarningContainer>
        )}
      </MainContent>

      <FooterContainer>
        <ContinueButton
          disabled={!phoneNumber}
          onClick={onContinue}
          isFilled={!!phoneNumber} // 입력된 번호가 있으면 true
        >
          계속하기
        </ContinueButton>
      </FooterContainer>
    </Screen>
  );
}

export default J310S;

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

////MainContent부분(전화번호 입력하는 부분)////

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-start;
  margin-left: 20px; /* 화면 좌우에 여백 추가 */
  margin-right: 20px;
  margin-top: 10px; /* input 공간을 더 위로 이동 */
`;

const Title = styled.h3`
  width: 100%;
  font-size: 23px;
  font-family: Paperlogy-7;
  text-align: left;
  margin-top: 3px;
`;

const SubTitle = styled.p`
  width: 100%;
  font-size: 15px;
  font-family: Paperlogy-3;
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
  border-bottom: 2px solid
    ${({ isFocused, phoneNumber }) =>
      isFocused || phoneNumber ? "#97C793" : "#ccc"}; /* 포커스 또는 입력 중일 때 초록색 */
  padding-bottom: 5px;
  transition: border-bottom 0.3s ease;
`;

const PhoneNumberInput = styled.input`
  border: none;
  font-size: 19px;
  font-family: Paperlogy-3;
  outline: none;
  padding-left: 10px; /* 왼쪽 여백 추가 */
  flex-grow: 1; /* 입력 필드가 남은 공간을 차지하도록 설정 */

  ::placeholder {
    font-family: Paperlogy-2;
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

const WarningContainer = styled.div`
  margin-top: 10px;
  text-align: left;
`;

const Warning = styled.p`
  color: #ee434e;
  font-size: 12px;
  font-family: Paperlogy-4;
`;

const EmailPrompt = styled.p`
  font-size: 12px;
  font-family: Paperlogy-3;
  margin-top: 50px; /* 경고문구 아래 이메일 관련 문구 더 아래로 이동 */
`;

////Footer부분(계속하기 버튼)////

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  background-color: ${({ isFilled }) =>
    isFilled ? "#97C793" : "#E6E6E6"}; /* 입력되면 초록색 */
  transition: background-color 0.3s ease;
`;
