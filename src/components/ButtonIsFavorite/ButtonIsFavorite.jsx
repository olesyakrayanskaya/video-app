import { useState } from "react";
import styles from "./ButtonIsFavorite.module.css";

function ButtonIsFavorite() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button className={styles.btn_favorite} onClick={() => setIsFavorite(!isFavorite)}>
      {isFavorite ? (
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="#df1aa7"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.2391 8.17599C16.7353 10.9847 12.7121 14.8044 10.437 16.8392C10.1924 17.0536 9.82044 17.0536 9.57583 16.8392C7.28789 14.8044 3.26472 10.9847 1.76085 8.17599C-1.54252 1.99693 6.7866 -2.12244 10 4.05662C13.2134 -2.12244 21.5425 1.99693 18.2391 8.17599Z"
            stroke="#df1aa7"
            strokeWidth="2"
          />
        </svg>
      ) : (
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.2391 8.17599C16.7353 10.9847 12.7121 14.8044 10.437 16.8392C10.1924 17.0536 9.82044 17.0536 9.57583 16.8392C7.28789 14.8044 3.26472 10.9847 1.76085 8.17599C-1.54252 1.99693 6.7866 -2.12244 10 4.05662C13.2134 -2.12244 21.5425 1.99693 18.2391 8.17599Z"
            stroke="#b51094"
            strokeWidth="2"
          />
        </svg>
      )}
    </button>
  );
}

export default ButtonIsFavorite;
