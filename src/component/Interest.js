import { useNavigate } from "react-router-dom";
import styles from "../css/interest.module.css";

function Interest() {
  const navigate = useNavigate();

  const onBack = navigate("/login/gender");
  const onSkip = navigate("/login/nickname");
  const onContinue = navigate("/login/nickname");

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
          <h3>자신의 등산취향을 소개해 주세요</h3>
          <p>
            완성한 문장으로 본인에게 꼭 맞는 등산로를 추천해드려요. 맨 아래
            키워드는 최소 2개 이상 선택해 주세요.
          </p>
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

export default Interest;
