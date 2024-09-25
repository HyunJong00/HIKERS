import React from 'react';
import '../../styles.css';

const Subtitle = () => {
    return (
        <div style={{width: 360, paddingTop: 14, paddingLeft: 20, paddingRight: 20, left: 0, top: 139, position: 'absolute', background: 'white', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
            <div style={{flex: '1 1 0', color: '#666666', fontSize: 14.30, fontFamily: 'Paperlogy', fontWeight: '250', wordWrap: 'break-word'}}>허위/중복 가입을 막고, 악성 사용자를 제재하는 데 사용해요. 입력한 번호는 절대 공개되지 않아요.</div>
        </div>
    );
};

export default Subtitle;
