import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SubcategoryItem.module.css'

export default function SubcategoryItem({ subcategory }) {
  return (
    <li className={styles.subcategory}>
      <Link to={`/subcategory/${subcategory.id}`}>
        <img src={subcategory.image}/>
        <div className={styles.name}>{subcategory.name}</div>
      </Link>
    </li>
  )
}
