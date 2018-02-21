import React from 'react'
import styles from './Layout.module.scss'

export default function Container({ className = '', children }) {
  return <div className={styles.container + ' ' + className}>{children}</div>
}