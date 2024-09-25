import React from 'react';

const BackButton = () => {
    return (
        <div style={{width: 360, height: 48, left: 0, top: 44, position: 'absolute', background: 'white'}}>
            <div style={{width: 20, height: 20, left: 20, top: 14, position: 'absolute'}}>
                <div style={{width: 8, height: 16, left: 1, top: 2, position: 'absolute', border: '1.50px #222222 solid'}}></div>
            </div>
        </div>
    );
};

export default BackButton;
