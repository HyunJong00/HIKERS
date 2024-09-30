import React from "react";
import completeBackground from '../assets/images/complete.jpg';
import ClapImage from "../components/LJ020600S/ClapImage";
import Subtitle from "../components/LJ020600S/Subtitle";
import Title from "../components/LJ020600S/Title";

const LJ020600S = () => {
    return (
        <div style={{ width: '360px', height: '800px', position: 'relative', backgroundImage: `url(${completeBackground})`}}>
            <ClapImage />
            <Subtitle />
            <Title />
        </div>
    );
};

export default LJ020600S;