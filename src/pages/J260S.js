import styled from "styled-components";
import clapImage from '../assets/images/clap.png';
import completeBackground from '../assets/images/complete.png';

function J260S() {
    return (
        <Screen>
            <ClapImage src={clapImage} alt="Clap" />
            <TextSmall>가입이 완료되셨네요!</TextSmall>
            <TextLarge>오르락과 함께 등산해볼까요?</TextLarge>
        </Screen>
    );
}

export default J260S;

// Styled-components
const Screen = styled.div`
    width: 360px;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center; /* 가운데 정렬 */
    align-items: center;
    padding: 0;
    background-image: url(${completeBackground});
    background-size: cover; /* 배경 이미지가 화면에 꽉 차게 설정 */
    background-position: center; /* 배경 이미지가 가운데에 위치하도록 설정 */
    background-repeat: no-repeat; /* 배경 이미지가 반복되지 않도록 설정 */
    overflow: hidden; /* 화면을 벗어나는 부분을 숨김 */
`;

const ClapImage = styled.img`
    width: 257px;
    height: 262px;
    margin-bottom: 20px; /* 이미지와 텍스트 사이 간격 조정 */
    margin-left: -20px; /* 이미지를 왼쪽으로 이동 */
`;

const TextSmall = styled.span`
    margin-top: 10px; /* 위아래 간격 조정 */
    text-align: center;
    color: #222222;
    font-size: 17px;
    font-family: Paperlogy-7;
    word-wrap: break-word;
`;

const TextLarge = styled.span`
    margin-top: 10px; /* 위아래 간격 조정 */
    text-align: center;
    color: #222222;
    font-size: 23px;
    font-family: Paperlogy-7;
    word-wrap: break-word;
`;
