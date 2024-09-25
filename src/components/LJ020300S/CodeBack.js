import React from 'react';
import '../../styles.css';

const CodeBack = () => {
    return (
        <div style={{height: 36, paddingTop: 10, paddingBottom: 10, left: 20, top: 453, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 3, display: 'inline-flex'}}>
                <div style={{justifyContent: 'center', alignItems: 'center', gap: 6, display: 'inline-flex'}}>
                    <div style={{textAlign: 'center', color: '#858585', fontSize: 13, fontFamily: 'Amiko', fontWeight: '700', wordWrap: 'break-word'}}>인증번호 다시 받기</div>
                </div>
            </div>
        </div>
    );
};

export default CodeBack;
