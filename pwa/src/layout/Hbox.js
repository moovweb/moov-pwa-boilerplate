import React from 'react'

export default function Hbox({ 
  style={}, 
  className = '', 
  children, 
  split=false 
}) {

  if (split) {
    style = { justifyContent: 'space-between', alignItems: 'center', ...style }
  }

  return <div className={className} style={{ display: 'flex', flexDirection: 'row', ...style }}>{children}</div>
}