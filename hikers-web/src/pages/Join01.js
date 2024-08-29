// src/pages/Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Join01.css';

function Start() {
    const [selectedInternationalNumber, setSelectedInternationalNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigateStart = useNavigate();
    const navigateJoin02 = useNavigate();
    const internationalNumberChange = (event) => {
        setSelectedInternationalNumber(event.target.value);
    };
    const phoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };
    const goBack = () => {
        navigateStart('/'); // '/' 페이지로 이동
    };
    const goJoin02 = () =>{
        navigateJoin02('/join02')
    }
    
    
    return (
        <div className="start-container">
            <div className = "left-aligned" onClick={goBack}><p> &lt; </p></div> {/* "<" 사용시 오른쪽으로 작성 "&lt" */}
            <div className="left-aligned">
                <h1> 휴대폰 번호를 입력해주세요 </h1>
                <p>허위/중복 가입을 막고, 악성사용자를 제재하는 데 사용해요. 입력한 번호는 절대 공개되지 않아요.</p>
            </div>
            <div className = "phone-number-container">
                <div className="phone-number">
                    <select id="internationalNumber" name="internationalNumber" value={selectedInternationalNumber} onChange={internationalNumberChange}>
                    <option value="82">+82</option>
                    <option value="84">+84</option>
                    <option value="1">+1</option>
                    <option value="86">+86</option>
                    </select>
                </div>
                <div className="phone-number">
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={phoneNumber}
                        onChange={phoneNumberChange}
                    />
                </div>
            </div>
            <div className = "continue">
                <h2 onClick={goJoin02}> 계속하기 </h2>
            </div>

        </div>
    );
}

export default Start;
