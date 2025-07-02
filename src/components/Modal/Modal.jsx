import { useEffect } from "react";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";

function Modal({ children, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.modal} onClick={handleOverlayClick}>
      <div className={styles.modal__inner} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modal__close} onClick={onClose}>
          ✖
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;
