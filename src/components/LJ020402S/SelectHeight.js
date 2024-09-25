import React from 'react';
import '../../styles.css';

const SelectHeight = () => {
    return (
        <div style={{width: 331.88, height: 188.90, left: 24, top: 402, position: 'absolute'}}>
            <div style={{width: 331, height: 44, left: 0, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                <div style={{width: 331, height: 44, paddingLeft: 16, paddingRight: 16, background: '#E7F9F8', borderRadius: 100, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                    <div style={{textAlign: 'center', color: '#222222', fontSize: 13, fontFamily: 'Amiko', fontWeight: '700', wordWrap: 'break-word'}}>“산 최고봉 높이는                                   가 적당하겠어.”</div>
                </div>
            </div>
            <div style={{width: 138, height: 180.90, left: 105, top: 8, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5.40, display: 'inline-flex'}}>
                <div style={{width: 124, height: 27, paddingLeft: 10.80, paddingRight: 10.80, paddingTop: 7.20, paddingBottom: 7.20, background: 'white', borderRadius: 5.40, justifyContent: 'flex-start', alignItems: 'center', gap: 9, display: 'inline-flex'}}>
                    <div style={{flex: '1 1 0', color: '#0F172A', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>정상 고도 선택</div>
                    <div style={{width: 14.40, height: 14.40, position: 'relative'}}>
                        <div style={{width: 7.20, height: 3.60, left: 3.60, top: 5.40, position: 'absolute', border: '1.20px #94A3B8 solid'}}></div>
                    </div>
                </div>
                <div style={{width: 138, boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.09)', borderRadius: 5.40, overflow: 'hidden', border: '0.90px #F1F5F9 solid', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{flex: '1 1 0', opacity: 0.30, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{alignSelf: 'stretch', height: 148.50, paddingBottom: 4.50, paddingLeft: 4.50, paddingRight: 4.50, background: 'white', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                            <div style={{alignSelf: 'stretch', paddingTop: 5.40, paddingBottom: 5.40, paddingLeft: 28.80, paddingRight: 7.20, background: 'white', justifyContent: 'flex-start', alignItems: 'center', gap: 7.20, display: 'inline-flex'}}>
                                <div style={{flex: '1 1 0', color: '#334155', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word'}}>200m 이하</div>
                            </div>
                            <div style={{alignSelf: 'stretch', paddingTop: 5.40, paddingBottom: 5.40, paddingLeft: 28.80, paddingRight: 7.20, background: 'white', justifyContent: 'flex-start', alignItems: 'center', gap: 7.20, display: 'inline-flex'}}>
                                <div style={{flex: '1 1 0', color: '#334155', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word'}}>200-500m</div>
                            </div>
                            <div style={{alignSelf: 'stretch', paddingTop: 5.40, paddingBottom: 5.40, paddingLeft: 28.80, paddingRight: 7.20, background: 'white', justifyContent: 'flex-start', alignItems: 'center', gap: 7.20, display: 'inline-flex'}}>
                                <div style={{flex: '1 1 0', color: '#334155', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word'}}>500-800m</div>
                            </div>
                            <div style={{alignSelf: 'stretch', paddingLeft: 7.20, paddingRight: 7.20, paddingTop: 5.40, paddingBottom: 5.40, background: '#F1F5F9', borderRadius: 5.40, justifyContent: 'flex-start', alignItems: 'center', gap: 7.20, display: 'inline-flex'}}>
                                <div style={{width: 14.40, height: 14.40, position: 'relative'}}>
                                    <div style={{width: 9.60, height: 6.60, left: 2.40, top: 3.60, position: 'absolute', border: '1.80px #334155 solid'}}></div>
                                </div>
                                <div style={{flex: '1 1 0', color: '#334155', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word'}}>900-1200m</div>
                            </div>
                            <div style={{alignSelf: 'stretch', paddingTop: 5.40, paddingBottom: 5.40, paddingLeft: 28.80, paddingRight: 7.20, background: 'white', justifyContent: 'flex-start', alignItems: 'center', gap: 7.20, display: 'inline-flex'}}>
                                <div style={{flex: '1 1 0', color: '#334155', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word'}}>1300m 이상</div>
                            </div>
                        </div>
                        <div style={{alignSelf: 'stretch', height: 0, border: '0.90px #F1F5F9 solid'}}></div>
                        <div style={{alignSelf: 'stretch', height: 0, border: '0.90px #F1F5F9 solid'}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectHeight;
