import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "../css/interest.module.css";
import TalkingBox from "../components/TalkingBox.js";
import HashtagBox from "../components/HashtagBox.js";

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
            <TalkingBox
              width={"350px"}
              text={["“내 실력이면 등산로가 ", " 좋을 것 같아.”"]}
              opstions={["난이도 선택", "쉬움", "중간", "어려움"]}
              onChange={setDifficulty}
              value={difficulty}
            />

            <TalkingBox
              width={"370px"}
              isOpposite={true}
              text={["“하산까지의 소요시간은 ", " 정도면 적당할듯!?”"]}
              opstions={["시간 선택", "1시간", "2시간", "3시간"]}
              onChange={setTime}
              value={time}
            />

            <TalkingBox
              width={"330px"}
              text={["“산행의 화룡점정! 정상석은 반드시 ", " ”"]}
              opstions={["유무 선택", "있어야 함", "없어도 됨"]}
              onChange={setSummit}
              value={summit}
            />

            <TalkingBox
              width={"350px"}
              isOpposite={true}
              text={["“산 최고봉 높이는 ", " 가 적당하겠어.”"]}
              opstions={[
                "정상 고도 선택",
                "200m 이하",
                "500m 이하",
                "1000m 이상",
              ]}
              onChange={setHeight}
              value={height}
            />

            <TalkingBox
              width={"360px"}
              text={["“등산길부터 교통시설까지 ", " 은 돼야 해!”"]}
              opstions={["접근성 선택", "짧음", "보통", "김"]}
              onChange={setAccess}
              value={access}
            />
          </div>

          <div className={styles["hashtag-container"]}>
            {[
              "정상뷰_맛집",
              "연계_산행",
              "한적함",
              "제철축제",
              "꽃놀이",
              "방문객_많음",
              "인기구조물",
              "꼭대기엔_평지",
              "주변맛집",
              "연박_탐험",
              "아름다운_절",
            ].map((element) => (
              <HashtagBox key={element} text={element} />
            ))}
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
