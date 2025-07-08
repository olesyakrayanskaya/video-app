import styles from "./DetailsComments.module.css";
import { COMMENTS } from "./comments.data";
import ButtonComments from "../../../components/UI/ButtonComments/ButtonComments";
import { useState, useRef, useEffect } from "react";

function DetailsComments() {
  const BASE_COMMENTS_COUNT = 4;
  const [visibleExtraCount, setVisibleExtraCount] = useState(0);
  const [isHiding, setIsHiding] = useState(false);
  const [listHeight, setListHeight] = useState("auto");
  const listRef = useRef(null);
  const baseListRef = useRef(null);

  const baseComments = COMMENTS.slice(0, BASE_COMMENTS_COUNT);
  const extraComments = COMMENTS.slice(BASE_COMMENTS_COUNT);
  const visibleExtraComments = extraComments.slice(0, visibleExtraCount);

  const showMoreComments = () => {
    setIsHiding(false);
    setListHeight("auto");
    setVisibleExtraCount((prev) => prev + 4);
  };

  const hideComments = () => {
    setListHeight(`${listRef.current.scrollHeight}px`);
    requestAnimationFrame(() => {
      setIsHiding(true);
      setTimeout(() => {
        setListHeight(`${baseListRef.current.scrollHeight}px`);
      }, 10);
    });
  };

  const canShowMore = visibleExtraCount < extraComments.length;
  const canHideComments = visibleExtraCount > 0;

  useEffect(() => {
    if (isHiding && listHeight === `${baseListRef.current?.scrollHeight}px`) {
      const timer = setTimeout(() => {
        setVisibleExtraCount(0);
        setIsHiding(false);
        setListHeight("auto");
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [listHeight, isHiding]);

  return (
    <div className={styles.comments}>
      <h2 className={styles.comments__title}>Comments</h2>
      <div
        ref={listRef}
        className={styles.comments__container}
        style={{ height: listHeight }}
      >
        <div ref={baseListRef}>
          <ul className={styles.comments__list}>
            {baseComments.map((comment) => (
              <li className={styles.comments__item} key={comment.id}>
                <p className={styles.comments__name}>{comment.name}</p>
                <p className={styles.comments__text}>{comment.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <ul className={styles.comments__list}>
          {visibleExtraComments.map((comment) => (
            <li
              className={`${styles.comments__item} ${
                isHiding
                  ? styles.comments__item_hiding
                  : styles.comments__item_appearing
              }`}
              key={comment.id}
            >
              <p className={styles.comments__name}>{comment.name}</p>
              <p className={styles.comments__text}>{comment.text}</p>
            </li>
          ))}
        </ul>
      </div>

      {canShowMore && (
        <ButtonComments onClick={showMoreComments}>Show more</ButtonComments>
      )}

      {canHideComments && (
        <ButtonComments onClick={hideComments}>Hide comments</ButtonComments>
      )}
    </div>
  );
}

export default DetailsComments;
