import React from 'react';
import '../../styles.css';

const ChooseFemale = () => {
    return (
        <div style={{width: 320, height: 54, paddingLeft: 20, paddingRight: 20, paddingTop: 17, paddingBottom: 17, left: 20, top: 309, position: 'absolute', borderRadius: 10, border: '1px #97C793 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{flex: '1 1 0', color: '#222222', fontSize: 17, fontFamily: 'Amiko', fontWeight: '700', wordWrap: 'break-word'}}>여성</div>
            <div style={{width: 24, height: 24, position: 'relative'}}>
                <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute'}}>
                    <div style={{width: 22, height: 22, left: 1, top: 1, position: 'absolute', background: '#97C793'}}></div>
                    <div style={{width: 14, height: 14, left: 5, top: 5, position: 'absolute', background: '#97C793', borderRadius: 9999, border: '1.50px #97C793 solid'}} />
                </div>
            </div>
        </div>
    );
};

export default ChooseFemale;