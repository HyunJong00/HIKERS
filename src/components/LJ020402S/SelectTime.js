import React, { useState } from 'react';
import '../../styles.css';

const SelectTime = () => {
    const [isOpen, setIsOpen] = useState(false); // 드롭다운 열림/닫힘 상태
    const [selectedTime, setSelectedTime] = useState('시간 선택'); // 선택된 시간 상태

    const timeOptions = ['1시간', '2시간', '3시간', '4시간 이상'];

    const toggleDropdown = () => {
        setIsOpen(!isOpen); // 드롭다운 열기/닫기
    };

    const selectTime = (time) => {
        setSelectedTime(time); // 선택된 시간으로 버튼 텍스트 및 문구 업데이트
        setIsOpen(false); // 선택 후 드롭다운 닫기
    };

    return (
        <div style={{ width: 349, height: 147.2, left: 6, top: 278, position: 'absolute' }}>
            {/* 시간 안내 텍스트 */}
            <div style={{ 
                width: '100%', 
                padding: '0 16px', 
                background: '#E7F9F8', 
                borderRadius: 100, 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
            }}>
                <p style={{ textAlign: 'center', color: '#222222', fontSize: 13, fontFamily: 'Amiko', fontWeight: '700' }}>
                    “하산까지의 소요시간은 <span style={{ color: '#0CA328' }}>{selectedTime}</span> 정도면 적당할듯!?”
                </p>
            </div>

            {/* 시간 선택 박스 */}
            <div style={{ 
                width: 109, 
                position: 'absolute', 
                top: 9, 
                left: '50%', 
                transform: 'translateX(-50%)', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 5 
            }}>
                {/* 시간 선택 버튼 */}
                <button 
                    onClick={toggleDropdown} // 클릭 시 드롭다운 열기/닫기
                    style={{ 
                        width: '100%', 
                        padding: '4px 8px', // 패딩을 줄여 버튼 크기 축소
                        background: 'white', 
                        borderRadius: 5, 
                        border: '1px solid #F1F5F9', 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        cursor: 'pointer',
                        fontSize: 12, // 글자 크기도 줄임
                    }}>
                    <span style={{ color: '#0F172A', fontSize: 12, fontFamily: 'Inter', fontWeight: '400' }}>{selectedTime}</span>
                    <div style={{ width: 10.8, height: 10.8, position: 'relative', marginLeft: 5 }}>
                        <div style={{ 
                            width: 6.4, 
                            height: 3.2, 
                            border: '1px solid #94A3B8', 
                            transform: isOpen ? 'rotate(-135deg)' : 'rotate(45deg)', 
                            transition: 'transform 0.2s ease' 
                        }} />
                    </div>
                </button>

                {/* 시간 옵션 리스트 (드롭다운) */}
                {isOpen && (
                    <div style={{ 
                        width: '100%', 
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.09)', 
                        borderRadius: 5, 
                        overflow: 'hidden', 
                        border: '1px solid #F1F5F9', 
                        background: 'white',
                        marginTop: 5
                    }}>
                        {timeOptions.map((time, index) => (
                            <div 
                                key={index} 
                                onClick={() => selectTime(time)} // 클릭 시 시간 선택
                                style={{ 
                                    padding: '5px 20px', 
                                    display: 'flex', 
                                    justifyContent: 'space-between', 
                                    alignItems: 'center', 
                                    borderBottom: index !== timeOptions.length - 1 ? '1px solid #F1F5F9' : 'none',
                                    cursor: 'pointer'
                                }}>
                                <span style={{ color: '#334155', fontSize: 14, fontFamily: 'Inter', fontWeight: '500' }}>{time}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SelectTime;
