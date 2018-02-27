import React from 'react'
import AddCircle from 'material-ui-icons/AddCircle'
import RemoveCircle from 'material-ui-icons/RemoveCircle'
import IconButton from 'material-ui/IconButton';
import Input from 'material-ui/Input'
import { observer } from "mobx-react"
import withStyles from 'material-ui/styles/withStyles'

const styles = {
  quantitySelector: {
    display: 'inline-block'
  },
  input: {
    width: '50px',
    '& input': {
      textAlign: 'center'
    }
  }
}

function QuantitySelector({ classes, product }) {
  return (
    <div className={classes.quantitySelector}>
      <IconButton onClick={() => product.setQuantity(product.quantity - 1)}>
        <RemoveCircle/>
      </IconButton>
      <Input value={product.quantity} onChange={e => product.setQuantity(e.target.value)} className={classes.input}/>
      <IconButton onClick={() => product.setQuantity(product.quantity + 1)}>
        <AddCircle/>
      </IconButton>
    </div>
  )
}

export default withStyles(styles)(observer(QuantitySelector))