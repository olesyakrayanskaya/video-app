import styles from "./ButtonPlayVideo.module.css";

function ButtonPlayVideo({onClick}) {
  return (
    <button
      className={styles.btn_video}
      onClick={onClick}
    >
      🎥
    </button>
  );
}

export default ButtonPlayVideo;
