import React from 'react';
import StatusBar from '../components/common/StatusBar';
import Title from '../components/SP010000S/Title';
import Subtitle from '../components/SP010000S/Subtitle';
import BottomBar from '../components/common/BottomBar';

const SP010000S = () => {
    return (
        <div style={{ width: '100%', height: '100%', background: '#97C793', position: 'relative' }}>
            <StatusBar />
            <Title />
            <Subtitle />
            <BottomBar />
        </div>
    );
};

export default SP010000S;