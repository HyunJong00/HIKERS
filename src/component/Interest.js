import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "../css/interest.module.css";

function Interest() {
  const navigate = useNavigate();

  const [difficulty, setDifficulty] = useState("");
  const [time, setTime] = useState("");
  const [summit, setSummit] = useState("");
  const [height, setHeight] = useState("");
  const [access, setAccess] = useState("");

  const onBack = () => navigate("/login/gender");
  const onSkip = () => navigate("/login/nickname");
  const onContinue = () => navigate("/login/nickname");

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
          <h3 className="title">자신의 등산취향을 소개해 주세요</h3>
          <p className="summary">
            완성한 문장으로 본인에게 꼭 맞는 등산로를 추천해드려요. 맨 아래
            키워드는 최소 2개 이상 선택해 주세요.
          </p>

          <div className={styles["talking-containter"]}>
            <div>
              <div className={styles["talking-box"]} style={{ width: "350px" }}>
                <p className={styles["talking-text"]}>
                  “내 실력이면 등산로가{" "}
                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                  >
                    <option value="">난이도 선택</option>
                    <option value="쉬움">쉬움</option>
                    <option value="중간">중간</option>
                    <option value="어려움">어려움</option>
                  </select>{" "}
                  좋을 것 같아.”
                </p>
              </div>
              <div className={styles["talking-tail"]}></div>
            </div>

            <div className={styles["opposite"]}>
              <div
                className={`${styles["talking-box"]} ${styles["opposite"]}`}
                style={{ width: "370px" }}
              >
                <p className={styles["talking-text"]}>
                  “하산까지의 소요시간은{" "}
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  >
                    <option value="">시간 선택</option>
                    <option value="1시간">1시간</option>
                    <option value="2시간">2시간</option>
                    <option value="3시간">3시간</option>
                  </select>{" "}
                  정도면 적당할듯!?”
                </p>
              </div>
              <div className={styles["talking-tail opposite"]}></div>
            </div>

            <div>
              <div className={styles["talking-box"]} style={{ width: "330px" }}>
                <p className={styles["talking-text"]}>
                  “산행의 화룡점정! 정상석은 반드시{" "}
                  <select
                    value={summit}
                    onChange={(e) => setSummit(e.target.value)}
                  >
                    <option value="">유무 선택</option>
                    <option value="있어야 함">있어야 함</option>
                    <option value="없어도 됨">없어도 됨</option>
                  </select>
                  ”
                </p>
              </div>
              <div className={styles["talking-tail"]}></div>
            </div>

            <div className={styles["opposite"]}>
              <div
                className={`${styles["talking-box"]} ${styles["opposite"]}`}
                style={{ width: "350px" }}
              >
                <p className={styles["talking-text"]}>
                  “산 최고봉 높이는{" "}
                  <select
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  >
                    <option value="">정상 고도 선택</option>
                    <option value="200m 이하">200m 이하</option>
                    <option value="500m 이하">500m 이하</option>
                    <option value="1000m 이상">1000m 이상</option>
                  </select>{" "}
                  가 적당하겠어.”
                </p>
              </div>
              <div className={styles["talking-tail opposite"]}></div>
            </div>

            <div>
              <div className={styles["talking-box"]} style={{ width: "360px" }}>
                <p className={styles["talking-text"]}>
                  “등산길부터 교통시설까지{" "}
                  <select
                    value={access}
                    onChange={(e) => setAccess(e.target.value)}
                  >
                    <option value="">접근성 선택</option>
                    <option value="짧음">짧음</option>
                    <option value="보통">보통</option>
                    <option value="김">김</option>
                  </select>{" "}
                  짧은 돼야 해!”
                </p>
              </div>
              <div className={styles["talking-tail"]}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        {/* 버튼 */}
        <div className={styles["footer-container"]}>
          <p className={styles["footer-text"]}>
            나중에 변경할 수 있어요. 편하게 입력해 주세요.
          </p>

          <div>
            <button className={styles["button-skip"]} onClick={onSkip}>
              건너뛰기
            </button>
            <button className={styles["button-continue"]} onClick={onContinue}>
              계속하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interest;
