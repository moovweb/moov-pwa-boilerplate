import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../App'

export default function render(req, res) {
  return renderToString(<App />)
}