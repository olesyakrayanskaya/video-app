import styles from './CardWrapper.module.css'

function CardWrapper({ children }) {
  return (
    <div className={styles.card__wrapper}>{children}</div>
  )
}

export default  CardWrapper
