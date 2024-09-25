import React from 'react';
import '../../styles.css';

const ContinueButton = () => {
    return (
        <div style={{width: 335, height: 54, left: 20, top: 317, position: 'absolute', borderRadius: 100, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
            <div style={{flex: '1 1 0', alignSelf: 'stretch', paddingLeft: 18, paddingRight: 18, paddingTop: 10, paddingBottom: 10, background: '#E6E6E6', borderRadius: 100, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 3, display: 'inline-flex'}}>
                    <div style={{justifyContent: 'center', alignItems: 'center', gap: 6, display: 'inline-flex'}}>
                        <div style={{textAlign: 'center', color: 'white', fontSize: 17, fontFamily: 'Amiko', fontWeight: '700', wordWrap: 'break-word'}}>계속하기</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContinueButton;

