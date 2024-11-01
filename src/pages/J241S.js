import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import backIcon from '../assets/images/backbutton.png';

function J241S() {
    const navigate = useNavigate();
    const [selectedGender, setSelectedGender] = useState(null);

    const onBack = () => navigate(-1);

    const onContinue = () => {
        if (selectedGender) {
            navigate("/J243S");
        } else {
            alert("성별을 선택해 주세요.");
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
                <Title>성별을 선택해 주세요</Title>
                <SubTitle>
                    입력한 성별은 등산일지에서 다른 등산러들과 실적을 비교하고 교류하는 데 도움이 돼요.
                </SubTitle>

                <GenderOptions>
                    <RadioInput
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        checked={selectedGender === "male"}
                        onChange={() => setSelectedGender("male")}
                    />
                    <Label htmlFor="male">
                        <div className="label-text">남성</div>
                        <CustomRadio />
                    </Label>

                    <RadioInput
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        checked={selectedGender === "female"}
                        onChange={() => setSelectedGender("female")}
                    />
                    <Label htmlFor="female">
                        <div className="label-text">여성</div>
                        <CustomRadio />
                    </Label>

                    <RadioInput
                        type="radio"
                        id="other"
                        name="gender"
                        value="other"
                        checked={selectedGender === "other"}
                        onChange={() => setSelectedGender("other")}
                    />
                    <Label htmlFor="other">
                        <div className="label-text">Other</div>
                        <CustomRadio />
                    </Label>
                </GenderOptions>
            </MainContent>

            <Footer>
                <ContinueButton
                    disabled={!selectedGender}  // 성별이 선택되지 않았을 때 버튼 비활성화
                    onClick={onContinue}
                    selectedGender={selectedGender}
                >
                    계속하기
                </ContinueButton>
            </Footer>
        </Screen>
    );
}

export default J241S;

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

////MainContent부분(성별 선택하는 부분)////

const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-left: 19.8px; 
    margin-right: 19.8px;
    justify-content: flex-start;
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

const GenderOptions = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 36px;
`;

const RadioInput = styled.input`
    display: none;
`;

const Label = styled.label`
    display: flex;
    width: 320px;
    height: 56px;
    align-items: center;
    padding: 10px 20px;
    margin: 10px auto;
    border: 2px solid #ccc;
    border-radius: 10px;
    cursor: pointer;
    transition: border-color 0.3s ease;
    font-family: Paperlogy-7;
    box-sizing: border-box;
    justify-content: space-between;
    text-align: center;

    ${RadioInput}:checked + & {
        border-color: #8fc48f;
    }
`;

const CustomRadio = styled.div`
    width: 20px;
    height: 20px;
    border: 2px solid #ccc;
    border-radius: 50%;
    margin-right: 5px;
    position: relative;
    flex-shrink: 0;

    ${RadioInput}:checked + ${Label} & {
        border-color: #8fc48f;

        &::before {
            content: "";
            width: 15px;
            height: 15px;
            background-color: #8fc48f;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
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
    font-family: Paperlogy-6;
    border: none;
    height: 54px;
    width: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => (props.disabled ? "#E6E6E6" : "#5AC563")}; // 상태에 따른 색 변경
    transition: background-color 0.3s ease;
`;
