import React from 'react';
import xbuttonimage from '../../../assets/images/xbutton.png';

const InputSpaceing = () => {
    return (
        <div style={{height: 35, left: 20, top: 239, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', height: 35, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div style={{flex: '1 1 0', color: '#222222', fontSize: 19, fontFamily: 'Amiko', fontWeight: '700', wordWrap: 'break-word'}}>9601</div>
                    <div style={{width: 20, height: 20, position: 'relative'}}>
                        <img style={{width: 18.33, height: 18.33, left: 0.83, top: 0.83, position: 'absolute'}} src={xbuttonimage} />
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', height: 2, background: '#CCCCCC'}} />
            </div>
        </div>
    );
};

export default InputSpaceing;

