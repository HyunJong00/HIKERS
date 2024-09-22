import React from 'react';
import '../../styles.css';
import kakaotalkImage from '../../assets/images/kakaotalk.png';
import googleImage from '../../assets/images/google.png';
import naverImage from '../../assets/images/naver.png';

const QuickStart = () => {
    return (
        <div style={{width: 320, height: 84, left: 20, top: 632, position: 'absolute', background: 'white', borderRadius: 100, border: '1px black solid'}}>
            <div style={{width: 118, padding: 10, left: 101, top: 7, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                <div style={{textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Paperlogy', fontWeight: '600', wordWrap: 'break-word'}}>3초만에 시작하기</div>
            </div>
            <div style={{width: 121, left: 98, top: 34, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <img style={{width: 33.25, height: 35}} src={kakaotalkImage} />
                <img style={{width: 36, height: 35}} src={googleImage} />
                <img style={{width: 36, height: 33}} src={naverImage} />
            </div>
        </div>
    );
};

export default QuickStart;