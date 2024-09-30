import React from "react";
import BackButton from "../components/common/BackButton";
import Title from "../components/LJ020403S/Title";
import Subtitle from "../components/LJ020403S/Subtitle";
import InputSpace from "../components/LJ020403S/InputSpace";
import BottomText from "../components/LJ020403S/BottomText";
import ContinueButton from "../components/common/ContinueButton";
// extra imports
// import WarningMessage from "../components/LJ020403S/extra/WarningMessage";

const LJ020403S = () => {
    return (
        <div style={{width: '360px', height: '800px', position: 'relative', background: 'white'}}>
            <BackButton />
            <Title />
            <Subtitle />
            <InputSpace />
            {/* <WarningMessage /> */}
            <BottomText />
            <ContinueButton />
        </div>
    );
};

export default LJ020403S;