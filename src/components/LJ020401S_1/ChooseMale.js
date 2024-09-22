import React from 'react';
import '../../styles.css';

const ChooseMale = () => {
    return (
        <div style={{width: 320, height: 54, paddingLeft: 20, paddingRight: 20, paddingTop: 17, paddingBottom: 17, left: 20, top: 241, position: 'absolute', borderRadius: 10, border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{flex: '1 1 0', color: '#222222', fontSize: 17, fontFamily: 'Amiko', fontWeight: '700', wordWrap: 'break-word'}}>남성</div>
            <div style={{width: 24, height: 24, position: 'relative'}}>
                <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute'}}>
                    <div style={{width: 22, height: 22, left: 1, top: 1, position: 'absolute', background: '#CCCCCC'}}></div>
                </div>
            </div>
        </div>
    );
};

export default ChooseMale;