import React from "react";
import completeBackground from '../assets/images/complete.jpg';
import StatusBar from "../components/common/StatusBar";
import ClapImage from "../components/LJ020600S/ClapImage";
import Subtitle from "../components/LJ020600S/Subtitle";
import Title from "../components/LJ020600S/Title";
import BottomBar from "../components/common/BottomBar";

const LJ020600S = () => {
    return (
        <div style={{width: '100%', height: '100%', position: 'relative', backgroundImage: `url(${completeBackground})`}}>
            <StatusBar />
            <ClapImage />
            <Subtitle />
            <Title />
            <BottomBar />
        </div>
    );
};

export default LJ020600S;