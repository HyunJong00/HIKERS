import React from 'react';
import '../../styles.css';
import checkboximage from '../../assets/images/checkbox.png';

const ConsentPopup = () => {
    return (
        <div style={{width: 360, height: 378, left: 0, top: 422, position: 'absolute'}}>
        <div style={{width: 360, height: 378, paddingTop: 12, paddingBottom: 24, paddingLeft: 10, paddingRight: 10, left: 0, top: 0, position: 'absolute', background: 'white', borderTopLeftRadius: 24, borderTopRightRadius: 24}} />
        <div style={{width: 360, height: 312, padding: 20, left: 0, top: 66, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 15, display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', height: 141, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 15, display: 'flex'}}>
                <div style={{alignSelf: 'stretch', height: 24, paddingLeft: 20, paddingRight: 20, paddingTop: 17, paddingBottom: 17, borderRadius: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div style={{flex: '1 1 0', color: '#B6B6B6', fontSize: 18, fontFamily: 'Paperlogy', fontWeight: '500', wordWrap: 'break-word'}}>전체 동의</div>
                    <div style={{width: 24, height: 24, position: 'relative'}}>
                        <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute'}}>
                            <img style={{width: 22, height: 22, left: 1, top: 1, position: 'absolute'}} src={checkboximage} />
                        </div>
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{height: 24, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex'}}>
                        <div style={{width: 24, height: 24, position: 'relative'}}>
                            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute'}}>
                                <img style={{width: 22, height: 22, left: 1, top: 1, position: 'absolute'}} src={checkboximage} />
                            </div>
                        </div>
                        <div style={{flex: '1 1 0', color: '#222222', fontSize: 15, fontFamily: 'Paperlogy', fontWeight: '400', wordWrap: 'break-word'}}>이용약관 (필수)</div>
                    </div>
                    <div style={{width: 16, height: 16, position: 'relative'}}>
                        <div style={{width: 8.67, height: 15.33, left: 3.67, top: 0.33, position: 'absolute', background: '#858585'}}></div>
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{height: 24, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex'}}>
                        <div style={{width: 24, height: 24, position: 'relative'}}>
                            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute'}}>
                                <img style={{width: 22, height: 22, left: 1, top: 1, position: 'absolute'}} src={checkboximage} />
                            </div>
                        </div>
                        <div style={{flex: '1 1 0', color: '#222222', fontSize: 15, fontFamily: 'Paperlogy', fontWeight: '400', wordWrap: 'break-word'}}>개인정보 수집 및 이용 (필수)</div>
                    </div>
                    <div style={{width: 16, height: 16, position: 'relative'}}>
                        <div style={{width: 8.67, height: 15.33, left: 3.67, top: 0.33, position: 'absolute', background: '#858585'}}></div>
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{height: 24, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex'}}>
                        <div style={{width: 24, height: 24, position: 'relative'}}>
                            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute'}}>
                                <img style={{width: 22, height: 22, left: 1, top: 1, position: 'absolute'}} src={checkboximage} />
                            </div>
                        </div>
                        <div style={{flex: '1 1 0', color: '#222222', fontSize: 15, fontFamily: 'Paperlogy', fontWeight: '400', wordWrap: 'break-word'}}>마케팅 정보 수신 (선택)</div>
                    </div>
                    <div style={{width: 16, height: 16, position: 'relative'}}>
                        <div style={{width: 8.67, height: 15.33, left: 3.67, top: 0.33, position: 'absolute', background: '#858585'}}></div>
                    </div>
                </div>
            </div>
            <div style={{alignSelf: 'stretch', height: 2, background: '#CCCCCC'}} />
        </div>
        <div style={{width: 324, height: 54, left: 20, top: 287.73, position: 'absolute', background: '#97C793', borderRadius: 100, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
        {/* paddingLeft: 18, paddingRight: 18, paddingTop: 10, paddingBottom: 10  */}   
            <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 3, display: 'inline-flex'}}>
                <div style={{justifyContent: 'center', alignItems: 'center', gap: 6, display: 'inline-flex'}}>
                    <div style={{textAlign: 'center', color: 'white', fontSize: 17, fontFamily: 'Paperlogy', fontWeight: '600', wordWrap: 'break-word'}}>계속하기</div>
                </div>
            </div>
        </div>
        <div style={{width: 296, height: 26.85, left: 27, top: 41.88, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 19, fontFamily: 'Paperlogy', fontWeight: '600', wordWrap: 'break-word'}}>오르락을 시작하려면 동의가 필요해요</div>
    </div>
    );
};

export default ConsentPopup;



