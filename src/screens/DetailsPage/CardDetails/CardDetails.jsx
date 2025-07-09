import { useParams } from "react-router-dom";
import styles from "./CardDetails.module.css";
import { useMemo, Suspense, lazy } from "react";
import { ITEMS } from "../../../data";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";

const LazyDetailsComments = lazy(() =>
  import("../DetailsComments/DetailsComments")
);

function CardDetails() {
  const { id } = useParams();
  const card = useMemo(() => {
    return ITEMS.find((item) => item.id === id);
  }, [id]);

  if (!card) return <p>not found</p>;

  const theme = localStorage.getItem("theme");

  return (
    <div className={`${styles.details} ${theme === 'dark' ? styles.details_dark : ''}`}>
      <Link className={`${styles.details__link} ${theme === 'dark' ? styles.details__link_dark : ''}`} to={"/"}>
        Home
      </Link>
      <h1 className={styles.details__title}>id: #{id}</h1>
      <img className={styles.details__img} src={`/video-app/${card.image}`} alt={card.title} />
      <h2 className={styles.details__subtitle}>{card.title}</h2>
      <p className={styles.details__description}>{card.description}</p>
      <Suspense fallback={<Loader />}>
        <LazyDetailsComments />
      </Suspense>
    </div>
  );
}

export default CardDetails;
