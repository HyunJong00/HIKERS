import React from 'react';
import '../../../styles.css';

const WarningMessage = () => {
    return (
        <div style={{width: 335, left: 21, top: 286, position: 'absolute', color: '#EE434E', fontSize: 12, fontFamily: 'Amiko', fontWeight: '400', wordWrap: 'break-word'}}>
            중복된 닉네임이에요. 다시 입력해 주세요.
        </div>
    );
};

export default WarningMessage;