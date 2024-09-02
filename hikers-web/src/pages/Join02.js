// src/pages/Join02.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Join02.css';

function Join02() {
    const [verificationCode, setVerificationCode] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const navigateJoin03 = useNavigate();

    const verificationCodeChange = (event) => {
        setVerificationCode(event.target.value);
        // 입력 중에는 에러 메시지를 숨김
        setError('');
    };

    const handleButtonClick = () => {
        navigate('/join01'); // '/join01' 페이지로 이동
    };

    const goJoin03 = () => {
        if (verificationCode === '000000') { /* 임시로 000000이라고 가정 */
            setError(''); // 에러 메시지 초기화
            navigateJoin03('/join03');
        } else {
            setError('올바르지 않은 인증번호입니다. 다시 입력해 주세요.');
        }
    };

    return (
        <div className="start-container">
            <div className="left-aligned" onClick={handleButtonClick}><p> &lt; </p></div> {/* "<" 사용시 오른쪽으로 작성 "&lt" */}
            <div className="left-aligned">
                <h1>인증 번호를 입력해주세요</h1>
                <p>인증 번호가 전송되었어요. 받은 번호를 입력하면 인증이 완료돼요.</p>
            </div>
            <div className="phone-number-container">
                <div className="phone-number">
                    <input
                        type="tel"
                        id="verificationCode"
                        name="verificationCode"
                        value={verificationCode}
                        onChange={verificationCodeChange}
                        placeholder="6자리 숫자"
                    />
                    {error && <div className="error-message">{error}</div>}
                </div>
            </div>
            <div className="continue">
                <h2 onClick={goJoin03}>계속하기</h2>
            </div>
        </div>
    );
}

export default Join02;
