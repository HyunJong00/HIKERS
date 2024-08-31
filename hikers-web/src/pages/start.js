import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Start.css';

function Start() {
  /* useNavigate를 통해 페이지 이동(start -> join01)을 위한 변수 선언 */
  const navigate = useNavigate();

  /* 필요한 state 모음 */
  const [isVisible, setIsVisible] = useState(false);
  const [allChecked, setAllChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [marketingChecked, setMarketingChecked] = useState(false);
  const [ageAbove12Checked, setAgeAbove12Checked] = useState(false);

  /* slide 컴포넌트 밖을 클릭하면 slide 컴포넌트가 사라지게 하기 위한 로직 */
  const slideRef = useRef(null);

  const toggle = () => {
    setIsVisible(!isVisible);
  };

  const handleClickOutside = (event) => {
    if (slideRef.current && !slideRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);


  /* 전체 동의 누르면 모든 체크박스가 체크되게 하는 로직 */
  const handleAllChecked = () => {
    const newChecked = !allChecked;
    setAllChecked(newChecked);
    setTermsChecked(newChecked);
    setPrivacyChecked(newChecked);
    setMarketingChecked(newChecked);
    setAgeAbove12Checked(newChecked);

    /* 전체 동의 누르면 색깔 생기는거 */
    const allCheckLabel = document.querySelector('label[for="allCheck"]');
    if (newChecked) {
      allCheckLabel.classList.remove('gray-font');
      allCheckLabel.classList.add('default-font');
    } else {
      allCheckLabel.classList.remove('default-font');
      allCheckLabel.classList.add('gray-font');
    }
  };

  const handleProceed = () => {
    if (termsChecked && privacyChecked && ageAbove12Checked) {
      navigate('/join01');
    } else {
      alert('모든 필수 항목을 체크해주세요.');
    }
  };

  return (
    <div className="home-container">
      <div className="black-font">
        <h2>환영해요!</h2>
        <p>지금 바로 새로운 모험에 뛰어드세요.</p>
      </div>
      <div className="green-round-componet">
        <button className="none" onClick={toggle}>새로 시작하기</button>
        <div
          className={`slide-container ${isVisible ? 'visible' : ''}`}
          ref={slideRef}
        >
          <h1>오르락을 시작하려면 동의가 필요해요</h1>
          <div className="agreement-container">
            <input
              type="checkbox"
              id="allCheck"
              checked={allChecked}
              onChange={handleAllChecked}
              className="rounded-checkbox"
            />
            <label htmlFor="allCheck" className="gray-font">전체 동의</label>
          </div>
          <hr />
          <div className="agreement-container">
            <input
              type="checkbox"
              id="terms"
              checked={termsChecked}
              onChange={(e) => setTermsChecked(e.target.checked)}
              className="rounded-checkbox"
            />
            <label htmlFor="terms">이용약관(필수)</label>
          </div>
          <div className="agreement-container">
            <input
              type="checkbox"
              id="privacy"
              checked={privacyChecked}
              onChange={(e) => setPrivacyChecked(e.target.checked)}
              className="rounded-checkbox"
            />
            <label htmlFor="privacy">개인정보 수집 및 이용(필수)</label>
          </div>
          <div className="agreement-container">
            <input
              type="checkbox"
              id="marketing"
              checked={marketingChecked}
              onChange={(e) => setMarketingChecked(e.target.checked)}
              className="rounded-checkbox"
            />
            <label htmlFor="marketing">마케팅 정보 수집(선택)</label>
          </div>
          <div className="agreement-container">
            <input
              type="checkbox"
              id="ageAbove12"
              checked={ageAbove12Checked}
              onChange={(e) => setAgeAbove12Checked(e.target.checked)}
              className="rounded-checkbox"
            />
            <label htmlFor="ageAbove12">만 12세 이상입니다(필수)</label>
          </div>
          <button className="continue-button" onClick={handleProceed}>계속하기</button>
        </div>
      </div>
      <div className="white-round-componet">
        <h4>3초만에 시작하기</h4>
      </div>
      <div className="white-font">
        <p>이미 계정이 있나요?</p>
      </div>
    </div>
  );
}

export default Start;
