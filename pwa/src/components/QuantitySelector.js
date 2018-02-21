import React from 'react'
import AddCircle from 'material-ui-icons/AddCircle'
import RemoveCircle from 'material-ui-icons/RemoveCircle'
import IconButton from 'material-ui/IconButton';
import Input from 'material-ui/Input'
import styles from './QuantitySelector.module.scss'

export default function QuantitySelector({ value, onChange }) {
  return (
    <div className={styles.quantitySelector}>
      <IconButton onClick={() => onChange(value - 1, value)}>
        <RemoveCircle/>
      </IconButton>
      <Input value={value} onChange={e => onChange(e.target.value, value)} className={styles.input}/>
      <IconButton onClick={() => onChange(value + 1, value)}>
        <AddCircle/>
      </IconButton>
    </div>
  )
}