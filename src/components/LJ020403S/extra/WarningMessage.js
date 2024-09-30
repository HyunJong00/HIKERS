import React from 'react';
import '../../../styles.css';

const WarningMessage = () => {
    return (
        <p style={{ width: 335, margin: '10px 0', color: '#EE434E', fontSize: 12, fontFamily: 'Amiko', fontWeight: '400', wordWrap: 'break-word' }} aria-live="polite">
            중복된 닉네임이에요. 다시 입력해 주세요.
        </p>
    );
};

export default WarningMessage;
