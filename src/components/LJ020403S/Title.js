import React from 'react';
import '../../styles.css';

const Title = () => {
    return (
        <span style={{width: 360, paddingTop: 20, paddingLeft: 20, paddingRight: 20, left: 0, top: 92, position: 'absolute', background: 'white', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
            <div style={{flex: '1 1 0', color: '#222222', fontSize: 23, fontFamily: 'Amiko', fontWeight: '700', wordWrap: 'break-word'}}>멋진 별명을 만들어볼까요?</div>
        </span>
    );
};

export default Title;
