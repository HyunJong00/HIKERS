import React from 'react';
import '../../styles.css';

const Subtitle = () => {
    return (
        <div style={{width: 360, paddingTop: 14, paddingLeft: 20, paddingRight: 20, left: 0, top: 139, position: 'absolute', background: 'white', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
            <div style={{flex: '1 1 0', color: '#666666', fontSize: 15, fontFamily: 'Amiko', fontWeight: '400', wordWrap: 'break-word'}}>인증 번호가 전송됐어요. 받은 번호를 입력하면 인증이 완료돼요.</div>
        </div>
    );
};

export default Subtitle;
