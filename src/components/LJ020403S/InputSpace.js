import React, { useState } from 'react';
import xbuttonimage from '../../assets/images/xbutton.png'; 

const InputSpace = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => {
        if (inputValue === '') {
            setIsFocused(false);
        }
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const clearInput = () => {
        setInputValue('');
        setIsFocused(false);
    };

    return (
        <div style={{ width: 320, left: 20, top: 221, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex' }}>
            <div style={{ position: 'relative', width: '100%' }}>
                
                {/* 최대 10자 레이블 (입력 전 표시) */}
                {!inputValue && (
                    <label 
                        htmlFor="inputField"
                        style={{
                            position: 'absolute',
                            top: '10px',
                            left: '10px',
                            fontSize: '19px',
                            color: '#CCCCCC',
                            fontFamily: 'Amiko',
                            fontWeight: '700',
                            transition: 'all 0.2s ease-out',
                            pointerEvents: 'none',
                        }}
                    >
                        최대 10자
                    </label>
                )}
                
                {/* 입력 필드와 X버튼 표시 */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                        id="inputField"
                        type="text"
                        maxLength="10"
                        value={inputValue}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        style={{
                            flex: 1,
                            height: 30,
                            padding: '10px',
                            border: 'none',
                            borderBottom: `2px solid ${isFocused ? '#97C793' : '#CCCCCC'}`, // 포커스 시 초록색 밑줄
                            fontSize: '19px',
                            fontFamily: 'Amiko',
                            outline: 'none',
                        }}
                    />
                    
                    {/* X 버튼 (입력 중에만 표시) */}
                    {inputValue && (
                        <button 
                            onClick={clearInput}
                            style={{ 
                                position: 'absolute', // 버튼을 절대 위치로 배치
                                right: 10, // 오른쪽 끝에 위치
                                width: 20, 
                                height: 20, 
                                background: 'transparent', 
                                border: 'none', 
                                cursor: 'pointer', 
                            }}
                        >
                            <img 
                                src={xbuttonimage} 
                                alt="Clear"
                                style={{ width: 20, height: 20 }} 
                            />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InputSpace;
