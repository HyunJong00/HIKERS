import React from 'react';
import '../../styles.css';

const NewStart = () => {
    return (
        <div style={{width: 320, height: 54, left: 20, top: 562, position: 'absolute', background: '#97C793', borderRadius: 100, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
        {/* paddingLeft: 16, paddingRight: 16, paddingTop: 21, paddingBottom: 21,  */}    
            <div style={{textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Paperlogy', fontWeight: '600', wordWrap: 'break-word'}}>새로 시작하기</div>
        </div>
    );
};

export default NewStart;