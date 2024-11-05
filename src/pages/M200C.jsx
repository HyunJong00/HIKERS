import { styled } from "styled-components";

import InfoSection from "../components/navi/InfoSection.js";
import MapSection from "../components/navi/MapSection.js";

import Footer from "../components/common/Footer.jsx";

export default function Navi() {
    return (
        <>
        <Container>
            <MapSection />
            <InfoSection />
        </Container>
        <Footer activeItem={"navi"} />
        </>
    );
}

const Container = styled.div`
    width: 100%;
    height: 880px;

`;