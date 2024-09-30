import React from "react";
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
import ContinueButton from "../components/common/ContinueButton";

const LJ020402S = () => {
    return (
        <div style={{width: '360px', height: '800px', position: 'relative', background: 'white'}}>
            <BackButton />
            <Title />
            <Subtitle />
            <SelectDifficulty />
            <SelectTime />
            <SelectStone />
            <SelectHeight />
            <SelectAccessibility />
            <Hashtag_1 />
            <Hashtag_2 />
            <Hashtag_3 />
            <BottomText />
            <ContinueButton />
            {/*
            */}
        </div>
    );
};

export default LJ020402S;