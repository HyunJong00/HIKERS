import React from "react";
import StatusBar from "../components/common/StatusBar";
import BackButton from "../components/common/BackButton";
import Title from "../components/LJ020401S_1/Title";
import Subtitle from "../components/LJ020401S_1/Subtitle";
import ChooseMale from "../components/LJ020401S_1/ChooseMale";
import ChooseFemale from "../components/LJ020401S_1/ChooseFemale";
import ChooseOther from "../components/LJ020401S_1/ChooseOther";
import SkipButton from "../components/LJ020401S/SkipButton";
import ContinueButton from "../components/LJ020401S/ContinueButton";
import BottomBar from "../components/common/BottomBar";


const LJ020401S_1 = () => {
    return (
        <div style={{width: '100%', height: '100%', position: 'relative', background: 'white'}}>
            <StatusBar />
            <BackButton />
            <Title />
            <Subtitle />
            <ChooseMale />
            <ChooseFemale />
            <ChooseOther />
            <SkipButton />
            <ContinueButton />
            <BottomBar />
        </div>
    );
};

export default LJ020401S_1;