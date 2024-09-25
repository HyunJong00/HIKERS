import React from 'react';
import StatusBar from '../components/common/StatusBar';
import Background from '../components/LJ020100S/Background';
import ConsentPopup from '../components/LJ020100S/ConsentPopup';
import BottomBar from '../components/common/BottomBar';

const LJ020000S = () => {
    return (
        <div style={{width: '100%', height: '100%', position: 'relative', background: 'rgba(0, 0, 0, 0.70)'}}>
            <StatusBar />
            <Background />
            <ConsentPopup />
            <BottomBar />
        </div>
    );
};

export default LJ020000S;