import React from 'react';
import '../../styles.css';

const InputSpace = () => {
    return (
        <div style={{width: 320, left: 20, top: 221, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
            <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div style={{flex: '1 1 0', color: '#CCCCCC', fontSize: 19, fontFamily: 'Amiko', fontWeight: '700', wordWrap: 'break-word'}}>최대 10자</div>
                </div>
                <div style={{alignSelf: 'stretch', height: 2, background: '#CCCCCC'}} />
            </div>
        </div>
    );
};

export default InputSpace;

