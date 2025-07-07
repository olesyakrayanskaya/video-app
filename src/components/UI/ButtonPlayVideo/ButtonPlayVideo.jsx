import styles from "./ButtonPlayVideo.module.css";

function ButtonPlayVideo({onClick}) {
  return (
    <button
      className={styles.btn_video}
      onClick={onClick}
    >
      <span>&#127909;</span>
    </button>
  );
}

export default ButtonPlayVideo;
