import React from 'react';
import '../../styles.css';

const ContinueButton = () => {
    return (
        <div style={{ width: 360, height: 74, left: 1, top: 692, position: 'absolute' }}>
            <div style={{ width: 360, height: 74, paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, left: 0, top: 0, position: 'absolute', background: 'white', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', zIndex: 1 }}>
                <button className="continue-button">
                    <span className="button-text">계속하기</span>
                </button>
            </div>
        </div>
    );
};

export default ContinueButton;
