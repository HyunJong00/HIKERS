import React from 'react';
import StatusBar from '../components/common/StatusBar';
import BackButton from '../components/common/BackButton';
import Title from '../components/LJ020200S/Title';
import Subtitle from '../components/LJ020200S/Subtitle';
import InputSpace from '../components/LJ020200S/InputSpace';
import ContinueButton from '../components/LJ020200S/ContinueButton';
import HeaderBackground from '../components/LJ020200S/HeaderBackground';
import BottomBar from '../components/common/BottomBar';
// extra imports
import WarningMessage from '../components/LJ020200S/extra/WarningMessage';
// import InputSpaceing from '../components/LJ020200S/extra/InputSpaceing'; // 입력하고있는 상태의 input space
// import ContinueButtoning from '../components/LJ020200S/extra/ContinueButtoning'; // 마우스를 올려놓은 상태의 계속하기 버튼 (키패드 올라와있는 위치)

const LJ020200S = () => {
    return (
        <div style={{width: '100%', height: '100%', position: 'relative', background: 'white'}}>
            <StatusBar />
            <BackButton />
            <Title />
            <Subtitle />
            <InputSpace />
            <ContinueButton />
            <HeaderBackground />
            <BottomBar />
            {/* extra components */}
            <WarningMessage />
        </div>
    );
};

export default LJ020200S;