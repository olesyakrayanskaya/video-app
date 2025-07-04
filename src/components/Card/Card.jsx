import styles from "./Card.module.css";
import ButtonIsFavorite from "../ButtonIsFavorite/ButtonIsFavorite";
import { useCallback, useState } from "react";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";

function Card({ image, title, videoId, id }) {
  const [isOpenVideo, setIsOpenVideo] = useState(false);

  const openVideo = useCallback(() => {
    setIsOpenVideo(true);
  }, []);

  return (
    <div className={styles.card}>
      {isOpenVideo && (
        <Modal onClose={() => setIsOpenVideo(false)}>
          <iframe
            width="720"
            height="405"
            src={`https://rutube.ru/play/embed/${videoId}/`}
            allow="clipboard-write; autoplay"
          ></iframe>
        </Modal>
      )}
      <h3 className={styles.card__tile}>{title}</h3>
      <img src={image} alt={title} className={styles.card__img} />
      <button
        style={{ position: "absolute", right: "3rem", top: "1rem" }}
        onClick={openVideo}
      >
        🎥
      </button>
      <Link style={{ position: "absolute", right: "6rem", top: "1rem" }} to={`/card/${id}`}>link</Link>
      <ButtonIsFavorite />
    </div>
  );
}

export default Card;
