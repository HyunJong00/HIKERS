import React from 'react';
import '../../styles.css';

const SelectStone = () => {
    return (
        <div style={{width: 312, height: 95, left: 5, top: 340, position: 'absolute'}}>
            <div style={{width: 312, height: 44, left: 0, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                <div style={{width: 312, height: 44, paddingLeft: 16, paddingRight: 16, background: '#E7F9F8', borderRadius: 100, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                    <div style={{textAlign: 'center', color: '#222222', fontSize: 13, fontFamily: 'Amiko', fontWeight: '700', wordWrap: 'break-word'}}>“산행의 화룡점정! 정상석은 반드시                         “</div>
                </div>
            </div>
            <div style={{width: 108, height: 87, left: 204, top: 8, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4.80, display: 'inline-flex'}}>
                <div style={{width: 85.60, height: 27, paddingLeft: 9.60, paddingRight: 9.60, paddingTop: 6.40, paddingBottom: 6.40, background: 'white', borderRadius: 4.80, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                    <div style={{flex: '1 1 0', color: '#0F172A', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>유무 선택</div>
                    <div style={{width: 12.80, height: 12.80, position: 'relative'}}>
                        <div style={{width: 6.40, height: 3.20, left: 3.20, top: 4.80, position: 'absolute', border: '1.07px #94A3B8 solid'}}></div>
                    </div>
                </div>
                <div style={{width: 108, boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.09)', borderRadius: 4.80, overflow: 'hidden', border: '0.80px #F1F5F9 solid', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{flex: '1 1 0', opacity: 0.30, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{alignSelf: 'stretch', height: 55.20, paddingBottom: 4, paddingLeft: 4, paddingRight: 4, background: 'white', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                            <div style={{alignSelf: 'stretch', paddingTop: 4.80, paddingBottom: 4.80, paddingLeft: 25.60, paddingRight: 6.40, background: 'white', justifyContent: 'flex-start', alignItems: 'center', gap: 6.40, display: 'inline-flex'}}>
                                <div style={{flex: '1 1 0', color: '#334155', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word'}}>있어야 해!</div>
                            </div>
                            <div style={{alignSelf: 'stretch', paddingLeft: 6.40, paddingRight: 6.40, paddingTop: 4.80, paddingBottom: 4.80, background: '#F1F5F9', borderRadius: 4.80, justifyContent: 'flex-start', alignItems: 'center', gap: 6.40, display: 'inline-flex'}}>
                                <div style={{width: 12.80, height: 12.80, position: 'relative'}}>
                                    <div style={{width: 8.53, height: 5.87, left: 2.13, top: 3.20, position: 'absolute', border: '1.60px #334155 solid'}}></div>
                                </div>
                                <div style={{flex: '1 1 0', color: '#334155', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word'}}>없어도 돼.</div>
                            </div>
                        </div>
                        <div style={{alignSelf: 'stretch', height: 0, border: '0.80px #F1F5F9 solid'}}></div>
                        <div style={{alignSelf: 'stretch', height: 0, border: '0.80px #F1F5F9 solid'}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectStone;