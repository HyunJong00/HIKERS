import React, { useState } from 'react';
import '../assets/styles/Join.css';

function Join() {
  const [isVisible, setIsVisible] = useState(false);
  const [allChecked, setAllChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [marketingChecked, setMarketingChecked] = useState(false);
  const [ageAbove12Checked, setAgeAbove12Checked] = useState(false);
  const [ageBelow12Checked, setAgeBelow12Checked] = useState(false);

  const toggle = () => {
    setIsVisible(!isVisible);
  };

  const handleAllChecked = () => {
    const newChecked = !allChecked;
    setAllChecked(newChecked);
    setTermsChecked(newChecked);
    setPrivacyChecked(newChecked);
    setMarketingChecked(newChecked);
    setAgeAbove12Checked(newChecked && !ageBelow12Checked);
  };

  const handleProceed = () => {
    if (termsChecked && privacyChecked && ageAbove12Checked && !ageBelow12Checked) {
      console.log('다음 화면으로 이동');
      // 다음 화면으로 이동 로직 (아직 구현 안 됨)
    } else {
      alert('모든 필수 항목을 체크해주세요.');
    }
  };

  const handleAgeCheck = (isAbove12) => {
    if (isAbove12) {
      setAgeAbove12Checked(true);
      setAgeBelow12Checked(false);
    } else {
      setAgeAbove12Checked(false);
      setAgeBelow12Checked(true);
      alert('12세 이상이 되면 다시 가입해 주세요.');
      // 여기에 12세 미만으로 넘어가는 화면 구현 로직 추가 (아직 구현 안 됨)
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
        <div className={`slide-container ${isVisible ? 'visible' : ''}`}>
          <button onClick={toggle}>❎</button>
          <h1>오르락을 시작하려면 동의가 필요해요</h1>
          <hr />
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
          <hr />
          <h3> 최소 연령 확인(필수)</h3>
          <div className="agreement-container">
            <input
              type="radio"
              id="ageAbove12"
              name="age"
              checked={ageAbove12Checked}
              onChange={() => handleAgeCheck(true)}
              className="rounded-checkbox"
            />
            <label htmlFor="ageAbove12">만 12세 이상입니다.</label>
          </div>
          <div className="agreement-container">
            <input
              type="radio"
              id="ageBelow12"
              name="age"
              checked={ageBelow12Checked}
              onChange={() => handleAgeCheck(false)}
              className="rounded-checkbox"
            />
            <label htmlFor="ageBelow12">만 12세 미만입니다.</label>
          </div>
          <button className="continue-button" onClick={handleProceed}>계속하기</button>
        </div>
      </div>
      <div className="wite-round-componet">
        <h4>3초만에 시작하기</h4>
      </div>
      <div className="white-font">
        <p>이미 계정이 있나요?</p>
      </div>
    </div>
  );
}

export default Join;
