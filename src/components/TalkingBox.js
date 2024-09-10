import styles from "../css/interest.module.css";

function TalkingBox({
  width,
  isOpposite = false,
  text,
  opstions,
  onChange,
  value,
}) {
  return (
    <div className={isOpposite ? styles["opposite"] : ""}>
      <div
        className={`${styles["talking-box"]} ${
          isOpposite ? styles["opposite"] : ""
        }`}
        style={{ width: width }}
      >
        <p className={styles["talking-text"]}>
          {text[0]}
          <select value={value} onChange={(e) => onChange(e.target.value)}>
            {opstions.map((text) => (
              <option key={text} value={text}>
                {text}
              </option>
            ))}
          </select>
          {text[1]}
        </p>
      </div>

      <div
        className={`${styles["talking-tail"]} ${
          isOpposite ? styles["opposite"] : ""
        }`}
      ></div>
    </div>
  );
}

export default TalkingBox;
