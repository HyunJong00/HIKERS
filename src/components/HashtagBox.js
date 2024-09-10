import styles from "../css/interest.module.css";

function HashtagBox({ text }) {
  return <button className={styles["hashtag-box"]}>#{text}</button>;
}

export default HashtagBox;
