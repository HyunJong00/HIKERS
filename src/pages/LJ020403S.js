import React from "react";
import StatusBar from "../components/common/StatusBar";
import BackButton from "../components/common/BackButton";
import Title from "../components/LJ020403S/Title";
import Subtitle from "../components/LJ020403S/Subtitle";
import InputSpace from "../components/LJ020403S/InputSpace";
import BottomText from "../components/LJ020403S/BottomText";
import ContinueButton from "../components/LJ020403S/ContinueButton";
import KeyPad from "../components/common/KeyPad";
// extra imports
// import InputSpaceing from '../components/LJ020403S/extra/InputSpaceing'; // 입력하고있는 상태의 input space
// import WarningMessage from "../components/LJ020403S/extra/WarningMessage";

const LJ020403S = () => {
    return (
        <div style={{width: '100%', height: '100%', position: 'relative', background: 'white'}}>
            <StatusBar />
            <BackButton />
            <Title />
            <Subtitle />
            <InputSpace />
            {/* <WarningMessage /> */}
            <BottomText />
            <ContinueButton />
            <KeyPad />
        </div>
    );
};

export default LJ020403S;