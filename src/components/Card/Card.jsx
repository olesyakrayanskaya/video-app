import styles from "./Card.module.css";
import ButtonIsFavorite from "../UI/ButtonIsFavorite/ButtonIsFavorite";
import ButtonPlayVideo from "../UI/ButtonPlayVideo/ButtonPlayVideo";
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
      <Link className={styles.card__link} to={`/card/${id}`}>
        <h3 className={styles.card__title}>{title}</h3>
      </Link>
      <img src={image} alt={title} className={styles.card__img} />
      <div className={styles.card__actions}>
        <ButtonPlayVideo onClick={openVideo} />
        <ButtonIsFavorite />
      </div>
    </div>
  );
}

export default Card;
