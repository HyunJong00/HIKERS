import styled from 'styled-components';
import backgroundimage from '../assets/images/J210SBackgroundImage.png';
import checkbox from '../assets/images/checkboxEmpty.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import agree from '../assets/images/J210SAgree.png';
import backIcon from '../assets/images/backbutton.png';
import checkboxChecked from '../assets/images/checkboxChecked.png';
import { AiOutlineCheckCircle } from "react-icons/ai";


function J200S(){
    const navigate = useNavigate();
    const [terms, setTerms] = useState(false);
    const [privacy, setPrivacy] = useState(false);
    const [marketing, setMarketing] = useState(false);
    const handleContinue = () => {
        navigate('/J220S');
    };
    const handleTerms = () => {
        setTerms(!terms);
    }
    const onBack = () => navigate(-1);

    return(
        
        <Screen>
            <Header>
                <BackButton onClick={onBack}> </BackButton>
            </Header>
            <Modal>
                <Title>오르락을 시작하려면 동의가 필요해요</Title>
                <Agreement> 
                    <AgreeAll>
                        <span> 전체 동의 </span>
                        <button />
                    </AgreeAll>
                    <Condition onClick={handleTerms} 
                    >
                       {/* <AiOutlineCheckCircle/> */}
                        
                        <button />
                        <p> 이용 약관 (필수) </p>
                        <Details/>
                    </Condition>
                    <Condition>
                        <button />
                        <p> 개인정보 수집 및 이용 (필수) </p>
                        <Details/>
                    </Condition>
                    <Condition>
                        <button />
                        <p> 마케팅 정보 수집 (선택) </p>
                        <Details/>
                    </Condition>
                    <hr/>
                </Agreement>
                <FooterContainer>
                    <ContinueButton 
                    onClick={handleContinue}
                    disabled={false}
                    >
                        계속하기
                    </ContinueButton>
                </FooterContainer>
            </Modal>
        </Screen>
    )
}
export default J200S;

const Screen = styled.div`
  width: 360px;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 44px;
  background-image: url(${backgroundimage});
  background-position: center;
  background-size: 360px 800px;
  background-repeat: no-repeat;
`;

const Header = styled.div`
    display: flex;
    height: 48px;
    width: 100%;
    align-items: center;

`
const BackButton = styled.button`
    background:none;
    border: none;
    background-image: url(${backIcon});
    background-size: cover;
    width: 24px;
    height: 24px;
    margin-left: 19.8px;
    background-color: none;
    cursor: pointer;
    `;

const Modal = styled.div`
    width: 360px;
    height: 378px;  
    border-radius:  24px 24px 0px 0px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    hr{
    border: 2px solid #CCCCCC;
    width: 100%;
    margin: 20px 0;">}
    `
const Title = styled.h3`
    margin-top: 40px;
    font-family: paperlogy-6;
    font-size: 19px;
    `;  
const Agreement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    `;
const AgreeAll = styled.div`
    display: flex;
    width: 312px;
    height: 48px;
    align-items: center;
    justify-content: space-between;
        span{
            font-family: paperlogy-5;
            font-size: 18px;
            color: #B6B6B6;
            }
        button{
            background: none;
            background-image: url(${checkbox});
            background-size: cover;
            width: 24px;
            height: 24px;
            border: none;
        }
    `;
const Condition = styled.div`
    display: flex;
    width: 312px;
    height: 48px;
    align-items: center;
    p{
        font-family: paperlogy-4;
        font-size: 15px;
        color: #222222;
        width: 300px;
        }

    button{
        background: none;
        background-image: url(${checkbox});
        background-size: cover;
        width: 24px;
        height: 24px;
        border: none;
        margin-right: 10px;
    `;
const Details = styled.span`
    background: none;
    border: none;
    height: 16px;
    width: 16px;
    background-image: url(${agree});
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
    `;

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
    background-color: ${({ phoneNumber }) => phoneNumber ? "#97C793" : "#E6E6E6"}; /* 입력되면 초록색 */
    transition: background-color 0.3s ease;
`;
