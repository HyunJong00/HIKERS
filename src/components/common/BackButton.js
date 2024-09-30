import React from 'react';
import backIcon from '../../assets/images/backbutton.png'; 

const BackButton = () => {
    return (
        <div style={{ width: 360, height: 48, left: 0, top: 44, position: 'absolute', background: 'white' }}>
            {/* 이미지로 뒤로가기 버튼 */}
            <div style={{ width: 20, height: 20, left: 20, top: 14, position: 'absolute' }}>
                <img 
                    src={backIcon} 
                    alt="Back" 
                    style={{ width: '100%', height: '100%' }} 
                />
            </div>
        </div>
    );
};

export default BackButton;
