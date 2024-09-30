import React, { useState } from 'react';

const SelectHeight = () => {
    const [isOpen, setIsOpen] = useState(false); // 드롭다운 열림/닫힘 상태
    const [selectedHeight, setSelectedHeight] = useState('정상 고도 선택'); // 선택된 고도 상태

    const heightOptions = ['200m 이하', '200-500m', '500-800m', '900-1200m', '1300m 이상'];

    const toggleDropdown = () => {
        setIsOpen(!isOpen); // 드롭다운 열기/닫기
    };

    const selectHeight = (height) => {
        setSelectedHeight(height); // 선택된 고도로 상태 업데이트
        setIsOpen(false); // 선택 후 드롭다운 닫기
    };

    return (
        <div style={{ width: 331, position: 'absolute', left: 24, top: 402 }}>
            {/* 안내 문구 */}
            <div style={{
                width: '100%',
                padding: '0 16px',
                background: '#E7F9F8',
                borderRadius: 100,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                gap: '10px'
            }}>
                <p style={{
                    textAlign: 'center',
                    color: '#222222',
                    fontSize: 13,
                    fontFamily: 'Amiko',
                    fontWeight: '700',
                    margin: 0
                }}>
                    “산 최고봉 높이는
                </p>

                {/* 정상 고도 선택 버튼 */}
                <button
                    onClick={toggleDropdown}
                    style={{
                        padding: '4px 8px',
                        background: 'white',
                        borderRadius: 5,
                        border: '1px solid #F1F5F9',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                        fontSize: 13,
                        fontFamily: 'Inter',
                        fontWeight: '500',
                        color: '#0F172A'
                    }}>
                    {selectedHeight}
                    <div style={{ width: 12.8, height: 12.8, marginLeft: 5 }}>
                        <div style={{
                            width: 6.4,
                            height: 3.2,
                            border: '1px solid #94A3B8',
                            transform: isOpen ? 'rotate(-135deg)' : 'rotate(45deg)',
                            transition: 'transform 0.2s ease'
                        }} />
                    </div>
                </button>

                <p style={{
                    textAlign: 'center',
                    color: '#222222',
                    fontSize: 13,
                    fontFamily: 'Amiko',
                    fontWeight: '700',
                    margin: 0
                }}>
                    가 적당하겠어.”
                </p>
            </div>

            {/* 고도 선택 옵션 */}
            {isOpen && (
                <div style={{
                    width: 138,
                    marginTop: 5,
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.09)',
                    borderRadius: 5,
                    border: '1px solid #F1F5F9',
                    background: 'white',
                    margin: '0 auto'
                }}>
                    {heightOptions.map((height, index) => (
                        <div
                            key={index}
                            onClick={() => selectHeight(height)}
                            style={{
                                padding: '5px 20px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                borderBottom: index !== heightOptions.length - 1 ? '1px solid #F1F5F9' : 'none',
                                cursor: 'pointer',
                                background: height === selectedHeight ? '#F1F5F9' : 'white'
                            }}>
                            <span style={{
                                color: '#334155',
                                fontSize: 14,
                                fontFamily: 'Inter',
                                fontWeight: '500'
                            }}>{height}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SelectHeight;
