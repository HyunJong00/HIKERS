import { useState } from "react";
// import "./main.css";

function Main() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const onChange = (e) => {
    // const regex = /^[0-9\b -]{0,13}$/;
    // if (regex.test(event.target.value)) {
    //   setPhoneNumber(event.target.value);
    // }
    setPhoneNumber(e.target.value);
  };

  const onClick = (e) => {
    if (phoneNumber === "123") {
    } else {
    }
  };

  return (
    <div className="screen">
      <div className="statusBar"></div>
      <div className="header">{"<"}</div>
      <div className="mainScreen">
        <div className="contents">
          <h3>휴대폰 번호로 로그인해 주세요.</h3>
          <p>
            허위/중복 가입을 막고, 악성 사용자를 제재하는 데 사용해요. 입력한
            번호는 절대 공개되지 않아요.
          </p>
          <input type="text" onChange={onChange} value={phoneNumber} />
        </div>
      </div>
      <div className="footer">
        <button
          className="continue"
          style={{
            backgroundColor: phoneNumber === "" ? "#e6e6e6" : "#97C793",
          }}
          disabled={phoneNumber === ""}
          onClick={onClick}
        >
          계속하기
        </button>
      </div>
    </div>
  );
}

export default Main;
