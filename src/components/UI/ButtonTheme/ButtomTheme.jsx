import styles from "./ButtonTheme.module.css";

function ButtomTheme({onClick, theme}) {
  return (
    <button className={styles.button__theme} onClick={onClick}>
      {theme === "dark" ? <span>&#127774;</span> : <span>&#127769;</span>}
    </button>
  );
}

export default ButtomTheme;
