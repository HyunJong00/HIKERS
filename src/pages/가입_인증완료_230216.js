import React from 'react';
import completeBackground from '../assets/images/complete.jpg';
import StatusBar from '../components/common/StatusBar';
import Title from '../components/가입_인증완료_230216/Title';
import IconOuter from '../components/가입_인증완료_230216/IconOuter';
import IconInner from '../components/가입_인증완료_230216/IconInner';
import BottomBar from '../components/common/BottomBar';

const 가입_인증완료_230216 = () => {
    return (
        <div style={{width: '100%', height: '100%', position: 'relative', backgroundImage: `url(${completeBackground})`}}>
            <StatusBar />
            <Title />
            <IconOuter />
            <IconInner />
            <BottomBar />
        </div>
    );
};

export default 가입_인증완료_230216;