import React from 'react'
import Button from 'material-ui/Button'
import withStyles from 'material-ui/styles/withStyles';

const styles = {
  root: {
    backgroundColor: '#4CAF50',
    minWidth: '190px',
    fontSize: '16px', 
    fontWeight: 'normal',
  }
}

export default withStyles(styles)(function AddToCartButton({ classes, onClick }) {
  return (
    <Button variant="raised" color="primary" classes={classes}>
      Add to Cart
    </Button>
  )
})