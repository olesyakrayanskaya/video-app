import styles from "./ButtonComments.module.css";

function ButtonComments({onClick, children}) {
  return (
    <button
      className={styles.btn_comments}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonComments;