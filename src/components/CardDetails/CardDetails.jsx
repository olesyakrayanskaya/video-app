import { useParams } from "react-router-dom";
import styles from "./CardDetails.module.css";
import { useMemo } from "react";
import { ITEMS } from "../../data";
import { Link } from "react-router-dom";


function CardDetails() {
  const { id } = useParams();
  const card = useMemo(() => {
    return ITEMS.find((item) => item.id === id);
  }, [id]);

  if(!card) return <p>not found</p>

  return (
    <div className={styles.details}>
      <h1 className={styles.details__title}>id: #{id}</h1>
      <img className={styles.details__img} src={card.image} alt={card.title} />
      <h2 className={styles.details__subtitle}>{card.title}</h2>
      <Link className={styles.details__link} to={'/'}>Home</Link>
    </div>
  );
}

export default CardDetails;
