import React from 'react';
import '../../styles.css';

const ContinueButton = () => {
    return (
        <div style={{width: 360, height: 74, left: -0.20, top: 692, position: 'absolute'}}>
            <div style={{width: 182.40, height: 74, left: 177.60, top: 0, position: 'absolute', background: 'white'}}>
                <div style={{width: 140, height: 54, left: 21, top: 10, position: 'absolute', borderRadius: 100, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{flex: '1 1 0', alignSelf: 'stretch', paddingLeft: 18, paddingRight: 18, paddingTop: 10, paddingBottom: 10, background: '#97C793', borderRadius: 100, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                        <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 3, display: 'inline-flex'}}>
                            <div style={{justifyContent: 'center', alignItems: 'center', gap: 6, display: 'inline-flex'}}>
                                <div style={{textAlign: 'center', color: 'white', fontSize: 17, fontFamily: 'Amiko', fontWeight: '700', wordWrap: 'break-word'}}>계속하기</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: 177.60, height: 74, left: 0, top: 0, position: 'absolute'}}>
                <div style={{width: 141, height: 54, left: 20, top: 10, position: 'absolute', borderRadius: 100, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{flex: '1 1 0', alignSelf: 'stretch', paddingLeft: 18, paddingRight: 18, paddingTop: 10, paddingBottom: 10, background: '#E6E6E6', borderRadius: 100, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                        <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 3, display: 'inline-flex'}}>
                            <div style={{justifyContent: 'center', alignItems: 'center', gap: 6, display: 'inline-flex'}}>
                                <div style={{textAlign: 'center', color: 'white', fontSize: 17, fontFamily: 'Amiko', fontWeight: '700', wordWrap: 'break-word'}}>계속하기</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContinueButton;