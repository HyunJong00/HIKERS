import React from 'react';
import '../../styles.css';

const Subtitle = () => {
    return (
        <span style={{width: 360, paddingTop: 14, paddingLeft: 20, paddingRight: 20, left: 0, top: 139, position: 'absolute', background: 'white', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
            <div style={{flex: '1 1 0', color: '#666666', fontSize: 15, fontFamily: 'Amiko', fontWeight: '400', wordWrap: 'break-word'}}>프로필에 표시되는 이름이에요.</div>
        </span>
    );
};

export default Subtitle;
