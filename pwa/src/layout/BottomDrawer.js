import React from 'react'
import styles from './BottomDrawer.module.scss'
import Card from 'material-ui/Card'

export default function BottomDrawer({ children }) {
  return (
    <Card className={styles.main}>
      {children}
    </Card>
  )
}