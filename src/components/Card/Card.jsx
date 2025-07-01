import styles from './Card.module.css'
import ButtonIsFavorite from '../ButtonIsFavorite/ButtonIsFavorite'

function Card({image, title}) {
  return (
    <div className={styles.card}>
        <h3 className={styles.card__tile}>{title}</h3>
        <img src={image} alt={title} className={styles.card__img} />  
        <ButtonIsFavorite />     
    </div>
  )
}

export default Card