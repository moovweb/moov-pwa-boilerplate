import React from 'react'

export default function Hbox({ style={}, children }) {
  return <div style={{ display: 'flex', flexDirection: 'row', ...style }}>{children}</div>
}