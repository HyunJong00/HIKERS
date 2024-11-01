import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import backIcon from '../assets/images/backbutton.png';

function J242S() {
    const navigate = useNavigate();
    const [age, setAge] = useState(null); // 초기값을 null로 설정

    const onBack = () => navigate(-1);

    const onContinue = () => {
        if (age !== null) {
            navigate("/J241S");
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
                <Title>연령대를 선택해 주세요</Title>
                <SubTitle>
                    입력한 나이는 등산일지에서 다른 등산러들과 실적을 비교하고 교류하는 데 도움이 돼요.
                </SubTitle>

                {/* 나이가 선택되지 않았으면 '____대'로 표시 */}
                <AgeDisplay>{age === null ? "__ 대" : `${age} 대`}</AgeDisplay>

                <SliderContainer>
                    <Slider
                        type="range"
                        min="0"
                        max="80"
                        step="10"
                        value={age}
                        onChange={(e) => setAge(Number(e.target.value))}
                    />
                    {/* 눈금 표시 */}
                    <SliderTicks>
                        <span>0</span>
                        <span>20</span>
                        <span>40</span>
                        <span>60</span>
                        <span>80</span>
                    </SliderTicks>
                </SliderContainer>
            </MainContent>

            <Footer>
                {/* 나이가 선택되지 않았을 때는 비활성화 */}
                <ContinueButton onClick={onContinue} disabled={age === null}>
                    계속하기
                </ContinueButton>
            </Footer>
        </Screen>
    );
}

export default J242S;

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

////MainContent부분(나이 선택하는 부분)////
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

const AgeDisplay = styled.div`
    width: 130px;
    height: 56px;
    font-size: 20px;
    font-family: Paperlogy-5;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EAF4E99E;
    border-radius: 25px;
    color: black;
    margin-top: 82px;
`;


//// 슬라이더 및 눈금 스타일 ////
const SliderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 70px;
    position: relative;
`;

const Slider = styled.input`
    width: 100%;
    -webkit-appearance: none;
    height: 6px;
    background: #EAF4E99E;
    outline: none;
    opacity: 0.7;
    transition: opacity 0.2s;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        background: white;
        border: 3px solid #5AC563;
        cursor: pointer;
        border-radius: 50%;
    }

    &::-moz-range-thumb {
        width: 20px;
        height: 20px;
        background: white;
        border: 3px solid #5AC563;
        cursor: pointer;
        border-radius: 50%;
    }
`;

//// 눈금 스타일 ////
const SliderTicks = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    position: relative;

    span {
        font-size: 12px;
        font-family: Paperlogy-3;
        color: black;
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
    background-color: #5AC563;
    transition: background-color 0.3s ease;
    
    &:disabled {
        background-color: #d3d3d3;
    }
`;
