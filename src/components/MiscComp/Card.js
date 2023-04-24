import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Card.module.css'
const Card = (props) => {
    const {title,route,description} =props.moduleList
  return (
    <Link to={`/${route}`} className={styles.card}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
    </Link>
  )
}

export default Card