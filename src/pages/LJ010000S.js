import React from 'react';
import mountainImage from '../assets/images/mountain.jpg';
import StatusBar from '../components/common/StatusBar';
import Title from '../components/LJ010000S/Title';
import Subtitle from '../components/LJ010000S/Subtitle';
import NewStart from '../components/LJ010000S/NewStart';
import QuickStart from '../components/LJ010000S/QuickStart';
import BottomBar from '../components/common/BottomBar';

const LJ010000S = () => {
    return (
        <div style={{width: '100%', height: '100%', position: 'relative', backgroundImage: `url(${mountainImage})`}}>
            <StatusBar />
            <Title />
            <Subtitle />
            <NewStart />
            <QuickStart />
            <BottomBar />
        </div>
    );
};

export default LJ010000S;