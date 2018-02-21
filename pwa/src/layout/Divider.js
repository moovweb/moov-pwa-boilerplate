import React from 'react'

export default function Divider({ style = {}, vertical, horizontal }) {
  style = { alignSelf: 'stretch', background: 'rgba(0,0,0,0.12)', ...style }
  if (vertical) {
    style = { width: '1px', ...style }
  } else {
    style = { height: '1px', ...style }
  }

  return <div style={style}/>
}