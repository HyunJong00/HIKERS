import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import backIcon from '../assets/images/backbutton.svg'; 
import checkboxyes from '../assets/images/checkboxyes.svg';
import checkboxno from '../assets/images/checkboxno.svg';
import rightarrow from '../assets/images/rightarrow.svg';

function J210S() {
  const navigate = useNavigate();
  const onBack = () => navigate(-1);
  const [allChecked, setAllChecked] = useState(false);
  const [agreements, setAgreements] = useState([
    { id: 1, text: "이용약관 (필수)", checked: false, required: true },
    { id: 2, text: "개인정보 수집 및 이용 (필수)", checked: false, required: true },
    { id: 3, text: "마케팅 정보 수신 (선택)", checked: false, required: false },
  ]);

  const handleAllCheck = () => {
    const newCheckedState = !allChecked;
    setAllChecked(newCheckedState);
    setAgreements(agreements.map(agreement => ({ ...agreement, checked: newCheckedState })));
  };

  const handleIndividualCheck = (id) => {
    const updatedAgreements = agreements.map(agreement =>
      agreement.id === id ? { ...agreement, checked: !agreement.checked } : agreement
    );
    setAgreements(updatedAgreements);
    setAllChecked(updatedAgreements.every(agreement => agreement.checked));
  };

  const canContinue = agreements.every(agreement => agreement.required ? agreement.checked : true);

  return (
    <Screen>
      <Header>
        <BackButton onClick={onBack}>
          <img src={backIcon} alt="Back" />
        </BackButton>
      </Header>

      <MainContent>
        <Title>오르락을 시작하려면 동의가 필요해요</Title>
        <AgreementContainer>
          <AllAgreement onClick={handleAllCheck} checked={allChecked}>
            <Checkbox checked={allChecked} />
            <AgreementText>전체 동의</AgreementText>
          </AllAgreement>
          <Separator />
          {agreements.map((agreement) => (
            <AgreementItem key={agreement.id} onClick={() => handleIndividualCheck(agreement.id)} checked={agreement.checked}>
              <Checkbox checked={agreement.checked} />
              <AgreementText>{agreement.text}</AgreementText>
              <Arrow />
            </AgreementItem>
          ))}
        </AgreementContainer>
      </MainContent>
      
      <Footer>
        <ContinueButton 
          disabled={!canContinue} 
          onClick={() => navigate("/J260S")}
          canContinue={canContinue}
        >
          계속하기
        </ContinueButton>
      </Footer>
    </Screen>
  );
}

export default J210S;

// Styled-components
const Screen = styled.div`
  width: 360px;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 44px 34px;
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
    font-size: 21px;
    font-family: Pretendard-7;
    text-align: left;  
    margin-top: 20px; 
`;

const AgreementContainer = styled.div`
  margin-top: 20px;
`;

const AllAgreement = styled.div`
  background-color: #f5f5f7;
  border-radius: 10px;
  padding: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const AgreementItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  cursor: pointer;
`;

const Checkbox = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 12px;
  background-image: url(${({ checked }) => (checked ? checkboxyes : checkboxno)});
  background-size: cover;
`;

const AgreementText = styled.span`
  font-size: 15px;
  font-family: Pretendard-5;
  color: #333;
  flex-grow: 1;
`;

const Arrow = styled.div`
  width: 12px;
  height: 12px;
  background-image: url(${rightarrow});
  background-size: cover;
`;

const Separator = styled.div`
  height: 1px;
  background-color: #e0e0e0;
  margin: 8px 0;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
  background-color: ${({ canContinue }) => (canContinue ? "#5AC563" : "#e0e0e0")};
  transition: background-color 0.3s ease;
`;
