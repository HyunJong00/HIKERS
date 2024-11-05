import React from 'react';
import Footer from '../components/common/Footer.jsx';
import gameImage from '../assets/images/game/game.svg';

function Game() {
    return (
        <div>
            <img src={gameImage} alt="game" />
            <Footer activeItem={'mount'} />
        </div>
    )
}
export default Game;