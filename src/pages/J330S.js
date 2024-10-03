import styled from "styled-components";
import completeBackground from '../assets/images/complete.png';

function J330S() {
    return (
        <Screen>
            <ContentContainer>
                <IconContainer>
                    <RotatingIcon>
                        <IconInner />
                        <IconOuter />
                    </RotatingIcon>
                </IconContainer>
                <Title>로그인 완료!</Title>
                <Subtitle>다 쉬었지? 이제 다시 산타러 가자.</Subtitle>
            </ContentContainer>
        </Screen>
    );
}

export default J330S;

// Styled-components
const Screen = styled.div`
    width: 360px;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${completeBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    width: 335px;
    text-align: center;
    color: #222222;
    font-size: 23px;
    font-family: Paperlogy-7;
    margin-top: 30px;
`;

const Subtitle = styled.div`
    width: 335px;
    text-align: center;
    color: #222222;
    font-size: 15px;
    font-family: Paperlogy-6;
    margin-top: 40px;
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

const RotatingIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 50px;
    height: 50px;
`;

const IconInner = styled.div`
    width: 10px;
    height: 10px;
    border: 5px rgba(225, 28, 106, 0.7) solid;
    transform: rotate(2deg); /* 살짝 기울기 */
`;

const IconOuter = styled.div`
    width: 40px;
    height: 40px;
    border: 5px rgba(225, 28, 106, 0.7) solid;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    transform: rotate(60deg); /* outer가 빙글빙글 돌고 inner와 중심 정렬 */
    transform-origin: center;
`;
