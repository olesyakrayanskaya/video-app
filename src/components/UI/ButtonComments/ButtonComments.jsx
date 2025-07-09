import styles from "./ButtonComments.module.css";

function ButtonComments({ onClick, children }) {

  const theme = localStorage.getItem("theme");

  return (
    <button
      className={`${styles.btn_comments} ${theme === 'dark' ? styles.btn_comments_dark : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonComments;