// src/pages/Join02.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Join01.css';

function Join02() {
    const [selectedInternationalNumber, setSelectedInternationalNumber] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const navigate = useNavigate();
    const navigateJoin03 = useNavigate();
    const verificationCodeChange = (event) => {
        setVerificationCode(event.target.value);
    };
    const handleButtonClick = () => {
        navigate('/join01'); // '/' 페이지로 이동
    };
    const goJoin03 = () =>{
        navigateJoin03('/join03')
    }
    
    return (
        <div className="start-container">
            <div className = "left-aligned" onClick={handleButtonClick}><p> &lt; </p></div> {/* "<" 사용시 오른쪽으로 작성 "&lt" */}
            <div className="left-aligned">
                <h1> 인증 번호를 입력해주세요 </h1>
                <p>인증 번호가 전송되었어요. 받은 번호를 입력하면 인증이 완료돼요.</p>
            </div>
            <div className = "phone-number-container">
                <div className="phone-number">
                    <input
                        type="tel"
                        id="verification code"
                        name="verification code"
                        value={verificationCode}
                        onChange={verificationCodeChange}
                        placeholder="6자리 숫자"

                    />
                </div>
            </div>
            <div className = "continue">
                <h2 onClick={goJoin03}> 계속하기 </h2>
            </div>

        </div>
    );
}

export default Join02;
