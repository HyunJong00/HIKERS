import React from "react";
import StatusBar from "../components/common/StatusBar";
import BackButton from "../components/common/BackButton";
import Title from "../components/LJ020402S/Title";
import Subtitle from "../components/LJ020402S/Subtitle";
import SelectDifficulty from "../components/LJ020402S/SelectDifficulty";
import SelectTime from "../components/LJ020402S/SelectTime";
import SelectStone from "../components/LJ020402S/SelectStone";
import SelectHeight from "../components/LJ020402S/SelectHeight";
import SelectAccessibility from "../components/LJ020402S/SelectAccessibility";
import Hashtag_1 from "../components/LJ020402S/Hashtag_1";
import Hashtag_2 from "../components/LJ020402S/Hashtag_2";
import Hashtag_3 from "../components/LJ020402S/Hashtag_3";
import BottomText from "../components/LJ020402S/BottomText";
import ContinueButton from "../components/LJ020402S/ContinueButton";
import BottomBar from "../components/common/BottomBar";

const LJ020402S = () => {
    return (
        <div style={{width: '100%', height: '100%', position: 'relative', background: 'white'}}>
            <StatusBar />
            <BackButton />
            <Title />
            <Subtitle />
            <Hashtag_1 />
            <Hashtag_2 />
            <Hashtag_3 />
            <BottomText />
            <ContinueButton />
            <BottomBar />
            {/*
            <SelectDifficulty />
            <SelectTime />
            <SelectStone />
            <SelectHeight />
            <SelectAccessibility />
            */}
        </div>
    );
};

export default LJ020402S;