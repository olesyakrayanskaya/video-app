import styles from "./ButtonTheme.module.css";

function ButtomTheme({onClick, theme}) {
  return (
    <button className={styles.button__theme} onClick={onClick}>
      {theme === "dark" ? "light" : "dark"}
    </button>
  );
}

export default ButtomTheme;
