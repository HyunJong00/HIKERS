import React from 'react';

const OutputSpace = () => {
    return (
        <div style={{width: '100%', height: '100%', paddingLeft: 20, paddingRight: 20, paddingTop: 13, paddingBottom: 13, background: 'white', borderRadius: 20, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 5, display: 'inline-flex'}}>
            {/* background: 'rgba(234, 244, 233, 0.62)' */}
            <div style={{width: 53, height: 37, position: 'relative'}}>
                <div style={{width: 45, height: 0, left: 4, top: 32, position: 'absolute', border: '1px #728973 solid'}}></div>
            </div>
            <div style={{width: 13, textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>대</div>
        </div>
    );
};

export default OutputSpace;
