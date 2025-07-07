import styles from './Container.module.css'

function Container({children, className}) {
  return (
    <div className={className}>{children}</div>
  )
}

export default Container