import styles from './Card.module.css'

function Card({image, title}) {
  return (
    <div className={styles.card}>
        <h3 className={styles.card__tile}>{title}</h3>
        <img src={image} alt={title} className={styles.card__img} />        
    </div>
  )
}

export default Card