import React from 'react';
import '../../styles.css';

const Subtitle = () => {
    return (
        <div style={{width: '100%', height: '100%', paddingTop: 7.50, paddingBottom: 36, paddingRight: 150, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
            <div style={{width: 285, height: 6, left: 0, top: 7.50, position: 'absolute', opacity: 0.20, background: '#97C793', borderRadius: 150}} />
            <div style={{width: 300, height: 6, position: 'relative', background: 'rgba(214, 237, 254, 0)', borderRadius: 150}}>
                <div style={{width: 18, height: 18, left: 51, top: -5.50, position: 'absolute'}}>
                    <div style={{width: 18, height: 18, left: 0, top: 0, position: 'absolute'}}>
                        <div style={{width: 18, height: 18, left: 0, top: 0, position: 'absolute'}}>
                            <div style={{width: 16.50, height: 16.50, left: 0.75, top: 0.75, position: 'absolute', background: '#97C793'}}></div>
                            <div style={{width: 10.50, height: 10.50, left: 3.75, top: 3.75, position: 'absolute', background: '#97C793', borderRadius: 9999, border: '1.12px #97C793 solid'}} />
                        </div>
                    </div>
                    <div style={{width: 39, height: 36, left: -10.50, top: -40.50, position: 'absolute', borderRadius: 6}}>
                        <img style={{width: 39, height: 35.39, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/39x35" />
                        <div style={{left: 8.25, top: 4.50, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>20</div>
                    </div>
                </div>
            </div>
            <div style={{width: 285, height: 12, left: 0, top: 25.50, position: 'absolute', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
                <div style={{width: 1.50, height: 6, position: 'relative', opacity: 0.20, background: 'black', borderRadius: 1.50}}>
                    <div style={{left: -3, top: 9, position: 'absolute', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>0</div>
                </div>
                <div style={{width: 1.50, height: 6, position: 'relative', opacity: 0.20, background: 'black', borderRadius: 1.50}} />
                <div style={{width: 1.50, height: 6, position: 'relative', opacity: 0.20, background: 'black', borderRadius: 1.50}}>
                    <div style={{left: -6, top: 9, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>20</div>
                </div>
                <div style={{width: 1.50, height: 6, position: 'relative', opacity: 0.20, background: 'black', borderRadius: 1.50}} />
                <div style={{width: 1.50, height: 6, position: 'relative', opacity: 0.20, background: 'black', borderRadius: 1.50}}>
                    <div style={{left: -6, top: 9, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>40</div>
                </div>
                <div style={{width: 1.50, height: 6, position: 'relative', opacity: 0.20, background: 'black', borderRadius: 1.50}} />
                <div style={{width: 1.50, height: 6, position: 'relative', opacity: 0.20, background: 'black', borderRadius: 1.50}}>
                    <div style={{left: -6, top: 9, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>60</div>
                </div>
                <div style={{width: 1.50, height: 6, position: 'relative', opacity: 0.20, background: 'black', borderRadius: 1.50}} />
                <div style={{width: 1.50, height: 6, position: 'relative', opacity: 0.20, background: 'black', borderRadius: 1.50}}>
                    <div style={{left: -6, top: 9, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>80</div>
                </div>
                <div style={{width: 1.50, height: 6, position: 'relative', opacity: 0.20, background: 'black', borderRadius: 1.50}} />
                <div style={{width: 1.50, height: 6, position: 'relative', opacity: 0.20, background: 'black', borderRadius: 1.50}}>
                    <div style={{left: -3, top: 9, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>0</div>
                </div>
            </div>
        </div>
    );
};

export default Subtitle;