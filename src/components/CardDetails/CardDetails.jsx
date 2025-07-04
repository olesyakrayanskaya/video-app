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
    <div>
      <h1>id: #{id}</h1>
      <img src={card.image} alt={card.title} />
      <h2>{card.title}</h2>
      <Link to={'/'}>Home</Link>
    </div>
  );
}

export default CardDetails;
