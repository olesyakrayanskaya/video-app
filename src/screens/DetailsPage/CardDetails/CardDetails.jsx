import { useParams } from "react-router-dom";
import styles from "./CardDetails.module.css";
import { useMemo, Suspense, lazy } from "react";
import { ITEMS } from "../../../data";
import { Link } from "react-router-dom";

const LazyDetailsComments = lazy(() => import('../DetailsComments/DetailsComments'));

function CardDetails() {
  const { id } = useParams();
  const card = useMemo(() => {
    return ITEMS.find((item) => item.id === id);
  }, [id]);

  if (!card) return <p>not found</p>;

  return (
    <div className={styles.details}>
      <Link className={styles.details__link} to={"/"}>
        Home
      </Link>
      <h1 className={styles.details__title}>id: #{id}</h1>
      <img className={styles.details__img} src={card.image} alt={card.title} />
      <h2 className={styles.details__subtitle}>{card.title}</h2>
      <p className={styles.details__description}>{card.description}</p>
      <Suspense fallback={<div>Loading comments...</div>}>
        <LazyDetailsComments />
      </Suspense>
    </div>
  );
}

export default CardDetails;