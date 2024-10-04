import styled from 'styled-components';
import backgroundimage from '../assets/images/startbackground.png';
import kakao from '../assets/images/kakaotalk.png';
import google from '../assets/images/google.png';
import naver from '../assets/images/naver.png';
import { useNavigate } from 'react-router-dom';

function J100S(){
    const navigate = useNavigate();

    const handleStartNewClick = () => {
        navigate('/J210S'); // Replace '/next-page' with the actual path of the next page
    };
    return(
        <Screen>
            <Text>
                <Welcome>환영해요!</Welcome>
                <Description>지금 바로 새로운 모험에 뛰어드세요</Description>
            </Text>
            <StartNew onClick={handleStartNewClick}>새로 시작하기
            </StartNew>
            <QuikStart> 3초만에 시작하기
                <socialLogin>
                    <img src={kakao} alt="kakao" />
                    <img src={google} alt="google" />
                    <img src={naver} alt="naver" />
                </socialLogin>
            </QuikStart>
            <Login>
                이미 계정이 있나요?
            </Login>
        </Screen>
    )
}

export default J100S;

const Screen = styled.div`
    width: 360px;
    height: 800px;
    background-image: url(${backgroundimage});
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;
const Text = styled.div`
    display: flex;
    flex-direction: column;
    `;

const Welcome = styled.h1`
    color: #FFF;
    text-align: center;
    font-family: Paperlogy-7;
    font-size: 24px;
    font-style: normal;
    line-height: normal;
    `;

const Description = styled.p`
    color: #FBFBFB;
    text-align: center;
    font-family: Paperlogy-6;
    font-size: 16px;
    font-style: normal;
    line-height: normal;
    `;

const StartNew = styled.button`
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
    background-color: #97C793;
    margin-bottom: 20px;
    margin-top: 100px;
    cursor: pointer;
    }
`;

const QuikStart = styled.button`
    border-radius: 100px;
    color: black;
    font-size: 17px;
    font-family: Paperlogy-6;
    border: none;
    height: 84px;
    width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
    margin-bottom: 50px;
`;

const SocialLogin = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;  

const Login = styled.span`
    color: #FFF;
    font-size: 13px;
    font-family: Paperlogy-4;
    margin-bottom: 20px;
`;