import { useNavigate } from "react-router-dom";
import styles from "../css/gender.module.css";

function Gender() {
  const navigate = useNavigate();

  const onSkip = navigate("/login/interest"); // need to change
  const onContinue = navigate("/login/interest");

  return (
    <div className="screen">
      <div className="statusBar"></div>

      <div className="header">
        <button className="back">{"<"}</button>
      </div>

      <div className="mainScreen">
        <div className="contents">
          <h3>성별을 선택해 주세요</h3>
          <p>
            입력한 성별은 등산일지에서 다른 등산러들과 실적을 비교하고 교류하는
            데 도움이 돼요.
          </p>

          {/* 선택지 */}
          <div className={styles.gender}>
            <input type="radio" id="male" name="gender" />
            <label htmlFor="male">
              <div className={styles["label-text"]}>남성</div>
              <div className={styles["custom-radio"]} />
            </label>

            <input type="radio" id="female" name="gender" />
            <label htmlFor="female">
              <div className={styles["label-text"]}>여성</div>
              <div className={styles["custom-radio"]} />
            </label>

            <input type="radio" id="other" name="gender" />
            <label htmlFor="other">
              <div className={styles["label-text"]}>Other</div>
              <div className={styles["custom-radio"]} />
            </label>
          </div>
        </div>
      </div>

      <div className="footer">
        {/* 버튼 */}
        <div className={styles["button-container"]}>
          <button className={styles["button-skip"]} onClick={onSkip}>
            건너뛰기
          </button>
          <button className={styles["button-continue"]} onClick={onContinue}>
            계속하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gender;
