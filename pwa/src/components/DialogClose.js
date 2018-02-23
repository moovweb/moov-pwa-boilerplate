import React from 'react';
import IconButton from 'material-ui/IconButton'
import Close from 'material-ui-icons/Close'

export default function DialogClose({ onClick }) {
  return (
    <IconButton onClick={onClick} style={{ position: 'absolute', top: 0, right: 0 }}>
      <Close/>
    </IconButton>
  )
}