import React from 'react';
import StatusBar from '../components/common/StatusBar';
import BackButton from '../components/common/BackButton';
import Title from '../components/LJ020300S/Title';
import Subtitle from '../components/LJ020300S/Subtitle';
import InputSpace from '../components/LJ020300S/InputSpace';
import ContinueButton from '../components/LJ020300S/ContinueButton';
import ChangeNumber from '../components/LJ020300S/ChangeNumber';
import CodeBack from '../components/LJ020300S/CodeBack';
import BackLogin from '../components/LJ020300S/BackLogin';
import NumberPad from '../components/common/NumberPad';
// extra imports
// import InputSpaceing from '../components/LJ020300S/extra/InputSpaceing'; // 입력하고있는 상태의 input space
import WarningMessage from '../components/LJ020300S/extra/WarningMessage'; // 인증번호가 틀렸을 때 뜨는 메시지

const LJ020300S = () => {
    return (
        <div style={{width: '100%', height: '100%', position: 'relative', background: 'white'}}>
            <StatusBar />
            <BackButton />
            <Title />
            <Subtitle />
            <InputSpace />
            <ContinueButton />
            <ChangeNumber />
            <CodeBack />
            <BackLogin />
            <NumberPad />
            {/* extra components */}
            <WarningMessage />
        </div>
    );
};

export default LJ020300S;