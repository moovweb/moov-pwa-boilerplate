import React from 'react'
import Button from 'material-ui/Button'
import styles from './Product.module.scss'

export default function AddToCartButton({ onClick }) {
  return (
    <Button raised color="primary" classes={{ root: styles.addToCartButton }}>
      Add to Cart
    </Button>
  )
}