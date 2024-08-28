// src/pages/Home.js
import React, { useState } from 'react';
import '../assets/styles/Join.css';

function Join() {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => {
      setIsVisible(!isVisible);
  };
    return (
        <div className="home-container">
          <div className = "black-font">
            <h2>환영해요!</h2>
            <p>지금 바로 새로운 모험에 뛰어드세요.</p>
          </div>
          <div className="green-round-componet">
            <button className="none" onClick={toggle}>새로 시작하기</button>
              <div className={`slide-container ${isVisible ? 'visible' : ''}`}>
                <button onClick={toggle}> ❎ </button>
                <h1>오르락을 시작하려면 동의가 필요해요</h1>
                <hr/>
                <h2 className="gray-font">전체 동의</h2>
                <p>이용약관(필수)</p>
                <p>개인정보 수집 및 이용(필수)</p>
                <p>마케팅 정보 수집(선택)</p>
                <hr/>
                <h3> 최소 연령 확인(필수)</h3>
                <p>만 12세 이상입니다.</p>
                <p>만 12세 미만입니다.</p>
              </div>
          </div>
          <div className = "wite-round-componet">
            <h4>3초만에 시작하기</h4>
          </div>
          <div className = "white-font">
            <p>이미 계정이 있나요?</p>
          </div>
        </div>
    );
}

export default Join;
