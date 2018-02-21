import React from 'react'
import ArrowRight from 'material-ui-icons/KeyboardArrowRight'
import { Link } from 'react-router-dom'
import styles from './Breadcrumbs.module.scss'

export default function Breadcrumbs({ items = [], current }) {
  return (
    <div className={styles.breadcrumbs}>
      { items.map((item, i) => (
        <span key={i}><Link to={item.url}>{item.text}</Link><ArrowRight className={styles.separator}/></span>
      ))}
      <span>{current}</span>
    </div>
  )
}