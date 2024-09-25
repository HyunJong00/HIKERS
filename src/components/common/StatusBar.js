import React from 'react';
import '../../styles.css';
import signalImage from '../../assets/images/signal.png';
import wifiImage from '../../assets/images/wifi.png';

const StatusBar = () => {
    return (
        <div style={{width: 360, height: 38, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.03) 27%, rgba(102, 102, 102, 0.01) 100%)', backdropFilter: 'blur(48px)'}}>
            <div style={{width: 360, height: 33, left: 0, top: -1, position: 'absolute', background: 'rgba(21, 21, 21, 0)'}}>
                <div style={{width: 66.66, height: 11.34, left: 278.67, top: 17.33, position: 'absolute'}}>
                    <div style={{width: 24.33, height: 11.33, left: 42.33, top: 0, position: 'absolute'}}>
                        <div style={{width: 22, height: 11.33, left: 0, top: 0, position: 'absolute', opacity: 0.35, borderRadius: 2.67, border: '1px black solid'}}></div>
                        <div style={{width: 1.33, height: 4, left: 23, top: 3.67, position: 'absolute', opacity: 0.40, background: 'black'}}></div>
                        <div style={{width: 18, height: 7.33, left: 2, top: 2, position: 'absolute', background: 'black', borderRadius: 1.33}}></div>
                    </div>
                    <img style={{width: 15.27, height: 10.97, left: 22.03, top: 0, position: 'absolute'}} src={signalImage} />
                    <img style={{width: 17, height: 10.67, left: 0, top: 0.34, position: 'absolute'}} src={wifiImage} />
                </div>
                <div style={{width: 54, height: 21, left: 21, top: 12, position: 'absolute', borderRadius: 32}}>
                    <div style={{width: 28.43, height: 11.09, left: 12.45, top: 5.17, position: 'absolute',  textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Paperlogy', fontWeight: '250', wordWrap: 'break-word'}}>9:41</div>
                </div>
            </div>
        </div>
    );
};

export default StatusBar;
