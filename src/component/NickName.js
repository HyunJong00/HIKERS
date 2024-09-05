import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "../css/nickname.module.css";

function NickName() {
  const [nickname, setNickname] = useState("");
  const [isExist, setIsExist] = useState("none");
  const navigate = useNavigate();

  const onBack = () => navigate("/login/interest");
  const onChange = (e) => setNickname(e.target.value);
  const onDelete = () => setNickname("");
  const onContinue = () => {
    if (nickname === "aa") {
      setIsExist(true);
      onDelete();
    } else {
      navigate("/login/final");
    }
  };

  return (
    <div className="screen">
      <div className="statusBar"></div>

      <div className="header">
        <button className="back" onClick={onBack}>
          {"<"}
        </button>
      </div>

      <div className="mainScreen">
        <div className="contents">
          <h3 className="title">멋진 별명을 만들어볼까요?</h3>
          <p className="summary">프로필에 표시되는 이름이에요.</p>

          {/* 입력칸 */}
          <div className="inputContainer">
            <input
              type="text"
              className={styles.nickname}
              placeholder="최대 10자"
              maxLength={10}
              value={nickname}
              onChange={onChange}
            />
            <button className={styles["delete-button"]} onClick={onDelete} />
            <div
              className={styles["input-line"]}
              // style={{ backgroundColor: nickname === "" ? "#ccc" : "#97C793" }}
            />
          </div>
          <p className={styles.warning} style={{ display: isExist }}>
            중복된 닉네임이에요. 다시 입력해 주세요.
          </p>
        </div>
      </div>

      <div className="footer">
        <div className={styles.footerContainer}>
          <p className={styles["footer-text"]}>
            나중에 변경할 수 있어요. 편하게 입력해 주세요.
          </p>

          <button
            className={styles.continue}
            style={{ backgroundColor: nickname ? "#97c793" : "#E6E6E6" }}
            disabled={!nickname}
            onClick={onContinue}
          >
            계속하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default NickName;
