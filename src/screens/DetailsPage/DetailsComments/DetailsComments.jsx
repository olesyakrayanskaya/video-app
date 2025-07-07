import styles from "./DetailsComments.module.css";
import { COMMENTS } from "./comments.data";

function DetailsComments() {
  return (
    <div className={styles.comments}>
      <h2 className={styles.comments__title}>Comments</h2>
      <ul className={styles.comments__list}>
        {COMMENTS.map(comment => (
          <li className={styles.comments__item} key={comment.id}>
            <p className={styles.comments__name}>{comment.name}</p>                    
            <p className={styles.comments__text}>{comment.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DetailsComments;