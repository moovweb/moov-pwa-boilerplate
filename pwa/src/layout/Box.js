import React from 'react'

export function Box({
  className = '', 
  split=false,
  children, 
  ...style
}) {
  if (split) {
    style = { justifyContent: 'space-between', alignItems: 'center', ...style }
  }

  return <div className={className} style={{ display: 'flex', ...style }}>{children}</div>
}

export function Hbox(props) {
  props = {...props, flexDirection: 'row'}
  return <Box {...props}/>
}

export function Vbox(props) {
  props = {...props, flexDirection: 'column'}
  return <Box {...props}/>
}