import React, { useState } from 'react';
import '../../styles.css';

const SelectStone = () => {
    const [isOpen, setIsOpen] = useState(false); // 드롭다운 열림/닫힘 상태
    const [selectedOption, setSelectedOption] = useState('유무 선택'); // 선택된 옵션 상태

    const options = ['있어야 해!', '없어도 돼.'];

    const toggleDropdown = () => {
        setIsOpen(!isOpen); // 드롭다운 열기/닫기
    };

    const selectOption = (option) => {
        setSelectedOption(option); // 선택된 옵션으로 버튼 텍스트 및 문구 업데이트
        setIsOpen(false); // 선택 후 드롭다운 닫기
    };

    return (
        <div style={{ width: 312, position: 'absolute', left: 5, top: 340 }}>
            {/* 안내 텍스트와 선택 버튼 */}
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
                    산행의 화룡점정! 정상석은 반드시
                </p>
                
                {/* 선택 버튼 */}
                <button 
                    onClick={toggleDropdown} // 클릭 시 드롭다운 열기/닫기
                    style={{ 
                        padding: '4px 8px', // 버튼 크기 조정
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
                    {selectedOption} {/* 선택된 옵션에 따라 버튼 텍스트 변경 */}
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
                    .
                </p>
            </div>

            {/* 선택 옵션 리스트 */}
            {isOpen && (
                <div style={{ 
                    width: 100, 
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.09)', 
                    borderRadius: 5, 
                    border: '1px solid #F1F5F9', 
                    background: 'white', 
                    marginTop: 5 
                }}>
                    {options.map((option, index) => (
                        <div 
                            key={index} 
                            onClick={() => selectOption(option)} // 클릭 시 옵션 선택
                            style={{ 
                                padding: '5px 10px', 
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                alignItems: 'center', 
                                borderBottom: index !== options.length - 1 ? '1px solid #F1F5F9' : 'none',
                                cursor: 'pointer',
                                background: option === selectedOption ? '#F1F5F9' : 'white'
                            }}>
                            <span style={{ color: '#334155', fontSize: 13, fontFamily: 'Inter', fontWeight: '500' }}>{option}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SelectStone;
