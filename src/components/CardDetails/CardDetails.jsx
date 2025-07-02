import { useParams } from "react-router-dom";
import styles from "./CardDetails.module.css";
import { useMemo } from "react";
import { ITEMS } from "../../data";

function CardDetails() {
  const { id } = useParams();
  const card = useMemo(() => {
    return ITEMS.find((item) => item.id === id);
  }, [id]);

  if(!card) return <p>not found</p>

  return (
    <div>
      <h1>id: #{id}</h1>
      <img src={card.image} alt={card.title} />
      <h2>{card.title}</h2>
    </div>
  );
}

export default CardDetails;
