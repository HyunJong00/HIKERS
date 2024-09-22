import React from 'react';
import '../../styles.css';

const ChangeNumber = () => {
    return (
        <div style={{width: 136, height: 36, left: 20, top: 417, position: 'absolute'}}>
            <div style={{left: 0, top: 10, position: 'absolute', color: 'black', fontSize: 13, fontFamily: 'Amiko', fontWeight: '700', wordWrap: 'break-word'}}>1012345679</div>
            <div style={{width: 48, height: 36, paddingTop: 10, paddingBottom: 10, left: 88, top: 0, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 3, display: 'inline-flex'}}>
                    <div style={{justifyContent: 'center', alignItems: 'center', gap: 6, display: 'inline-flex'}}>
                        <div style={{textAlign: 'center', color: '#858585', fontSize: 13, fontFamily: 'Amiko', fontWeight: '700', wordWrap: 'break-word'}}>수정하기</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangeNumber;
