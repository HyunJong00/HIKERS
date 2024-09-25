import React from "react";
import StatusBar from "../components/common/StatusBar";
import BackButton from "../components/common/BackButton";
import Title from "../components/LJ020401S/Title";
import Subtitle from "../components/LJ020401S/Subtitle";
import OutputSpace from "../components/LJ020401S/OutpurSpace";
import Slide from "../components/LJ020401S/Slide";
import SkipButton from "../components/LJ020401S/SkipButton";
import ContinueButton from "../components/LJ020401S/ContinueButton";
import BottomBar from "../components/common/BottomBar";

const LJ020401S = () => {
    return (
        <div style={{width: '100%', height: '100%', position: 'relative', background: 'white'}}>
            <StatusBar />
            <BackButton />
            <Title />
            <Subtitle />
            <OutputSpace />
            <Slide />
            <SkipButton />
            <ContinueButton />
            <BottomBar />
        </div>
    );
};

export default LJ020401S;