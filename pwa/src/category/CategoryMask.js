import React from 'react'
import styles from './CategoryMask.module.scss'

const Row = () => <div className={styles.row}/>

const Category = () => (
  <div className={styles.category}>
    <div className={styles.top}/>
    <div className={styles.tile}>
      <div className={styles.left}/>
      <div className={styles.center}/>
    </div>
  </div>
)

export default function CategoryMask() {
  return (
    <div className={styles.wrap + ' animated-background'}>
      <div className={styles.mask}>
        <Category/>  
        <Category/>  
        <Category/>  
        <Category/>  
        <Category/>  
        <Category/>  
        <Category/>  
        <Category/>  
        <Category/>  
        <Category/>  
        <Category/>  
        <Category/>  
        <Category/>  
        <Category/>  
        <Category/>  
        <Category/>  
      </div>
      <div className={styles.rightMargin}>
      </div>
    </div>
  )
}