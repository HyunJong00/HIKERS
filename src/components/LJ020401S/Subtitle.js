import React from 'react';
import '../../styles.css';

const Subtitle = () => {
    return (
        <div style={{width: 360, paddingTop: 14, paddingLeft: 20, paddingRight: 20, left: 0, top: 139, position: 'absolute', background: 'white', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
            <div style={{flex: '1 1 0', color: '#666666', fontSize: 15, fontFamily: 'Amiko', fontWeight: '400', wordWrap: 'break-word'}}>입력한 나이은 등산일지에서 다른 등산러들과 실적을 비교하고 교류하는 데 도움이 돼요. </div>
        </div>
    );
};

export default Subtitle;
