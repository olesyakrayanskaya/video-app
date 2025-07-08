import { useState } from "react";
import styles from "./DetailsComments.module.css";
import { COMMENTS } from "./comments.data";
import ButtonComments from "../../../components/UI/ButtonComments/ButtonComments";

function DetailsComments() {
  const [visibleCount, setVisibleCount] = useState(4);

  const showMoreComments = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const visibleComments = COMMENTS.slice(0, visibleCount);
  const canShowMore = visibleCount < COMMENTS.length;
  const canHideComments = visibleCount > 4;

  const hideComments = () => {
    setVisibleCount(4);
  };

  return (
    <div className={styles.comments}>
      <h2 className={styles.comments__title}>Comments</h2>
      <ul className={styles.comments__list}>
        {visibleComments.map((comment) => (
          <li className={styles.comments__item} key={comment.id}>
            <p className={styles.comments__name}>{comment.name}</p>
            <p className={styles.comments__text}>{comment.text}</p>
          </li>
        ))}
      </ul>

      {canShowMore && (
        <ButtonComments onClick={showMoreComments}>Show more</ButtonComments>
      )}

      {canHideComments && (
        <ButtonComments onClick={hideComments}>
          Hide comments
        </ButtonComments>
      )}
    </div>
  );
}

export default DetailsComments;
