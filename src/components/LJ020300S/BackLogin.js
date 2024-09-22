import React from 'react';
import '../../styles.css';

const BackLogin = () => {
    return (
        <div style={{height: 36, paddingTop: 10, paddingBottom: 10, left: 228, top: 453, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 3, display: 'inline-flex'}}>
                <div style={{justifyContent: 'center', alignItems: 'center', gap: 6, display: 'inline-flex'}}>
                    <div style={{textAlign: 'center', color: '#858585', fontSize: 13, fontFamily: 'Amiko', fontWeight: '700', wordWrap: 'break-word'}}>로그인으로 돌아가기</div>
                </div>
            </div>
        </div>
    );
};

export default BackLogin;
