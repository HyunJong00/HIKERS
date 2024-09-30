import React, { useState } from 'react';
import '../../styles.css';

const SelectDifficulty = () => {
    const [isOpen, setIsOpen] = useState(false); // 드롭다운 열림/닫힘 상태
    const [selectedDifficulty, setSelectedDifficulty] = useState('난이도 선택'); // 선택된 난이도 상태, 기본값은 "난이도 선택"
    const difficultyOptions = [
        '아주 평탄한',
        '적당히 평탄한',
        '보통인',
        '적당히 경사진',
        '가파르게 경사진',
    ];

    const toggleDropdown = () => {
        setIsOpen(!isOpen); // 드롭다운 열기/닫기
    };

    const selectDifficulty = (difficulty) => {
        setSelectedDifficulty(difficulty); // 선택된 난이도로 버튼 텍스트 변경
        setIsOpen(false); // 선택 후 드롭다운 닫기
    };

    return (
        <div style={{ width: 349, position: 'absolute', left: 4, top: 217 }}>
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
                <p style={{ textAlign: 'center', color: '#222222', fontSize: 13, fontFamily: 'Amiko', fontWeight: '700', margin: 0 }}>
                    “내 실력이면 등산로가
                </p>
                
                {/* 난이도 선택 버튼 */}
                <button 
                    onClick={toggleDropdown} // 클릭 시 드롭다운 열기/닫기
                    style={{ 
                        padding: '4px 8px', // 패딩을 줄여 버튼 크기 감소
                        background: 'white', 
                        borderRadius: 5, 
                        border: '1px solid #F1F5F9', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        cursor: 'pointer', 
                        fontSize: 12, // 글씨 크기 축소
                        fontFamily: 'Inter', 
                        fontWeight: '500',
                        color: '#0F172A'
                    }}>
                    {selectedDifficulty} {/* 선택된 난이도로 버튼 텍스트 변경 */}
                    <div style={{ width: 10.8, height: 10.8, marginLeft: 5 }}>
                        <div style={{ 
                            width: 6.4, 
                            height: 3.2, 
                            border: '1px solid #94A3B8', 
                            transform: isOpen ? 'rotate(-135deg)' : 'rotate(45deg)', // 상태에 따라 화살표 방향 변경
                            transition: 'transform 0.2s ease' 
                        }} />
                    </div>
                </button>

                <p style={{ textAlign: 'center', color: '#222222', fontSize: 13, fontFamily: 'Amiko', fontWeight: '700', margin: 0 }}>
                    정도면 좋을 것 같아.”
                </p>
            </div>

            {/* 난이도 선택 옵션 (isOpen이 true일 때만 표시) */}
            {isOpen && (
                <div style={{ 
                    width: 136, 
                    marginTop: 10, 
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.09)', 
                    borderRadius: 5, 
                    border: '1px solid #F1F5F9', 
                    background: 'white', 
                    margin: '0 auto'
                }}>
                    {difficultyOptions.map((difficulty, index) => (
                        <div 
                            key={index} 
                            onClick={() => selectDifficulty(difficulty)} // 클릭 시 난이도 선택
                            style={{ 
                                padding: '5px 20px', 
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                alignItems: 'center', 
                                borderBottom: index !== difficultyOptions.length - 1 ? '1px solid #F1F5F9' : 'none',
                                background: difficulty === selectedDifficulty ? '#F1F5F9' : 'white',
                                cursor: 'pointer'
                            }}>
                            <span style={{ color: '#334155', fontSize: 14, fontFamily: 'Inter', fontWeight: '500' }}>{difficulty}</span>
                            {difficulty === selectedDifficulty && (
                                <div style={{ 
                                    width: 12.8, 
                                    height: 12.8, 
                                    border: '1.6px solid #334155', 
                                    transform: 'rotate(45deg)' 
                                }} />
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SelectDifficulty;
