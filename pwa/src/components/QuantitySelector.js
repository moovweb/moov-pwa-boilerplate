import React from 'react'
import AddCircle from 'material-ui-icons/AddCircle'
import RemoveCircle from 'material-ui-icons/RemoveCircle'
import IconButton from 'material-ui/IconButton';
import Input from 'material-ui/Input'
import styles from './QuantitySelector.module.scss'
import { observer } from "mobx-react"

function QuantitySelector({ product }) {
  return (
    <div className={styles.quantitySelector}>
      <IconButton onClick={() => product.setQuantity(product.quantity - 1)}>
        <RemoveCircle/>
      </IconButton>
      <Input value={product.quantity} onChange={e => product.setQuantity(e.target.value)} className={styles.input}/>
      <IconButton onClick={() => product.setQuantity(product.quantity + 1)}>
        <AddCircle/>
      </IconButton>
    </div>
  )
}

export default observer(QuantitySelector)