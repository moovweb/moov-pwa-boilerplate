import React from 'react'
import { Shimmer, Tiles, Tile, Row, Content, BlankRow } from '../components/Shimmer'

export default function CategoryMask() {
  const tiles = []

  for (let i=0; i<20; i++) {
    tiles.push(<Tile minWidth={120} maxWidth={200} hMargin="20px" vMargin="15px" textMargin="5px"/>)
  }

  return (
    <Shimmer>
      <Row>
        <Content height="37px"/>
      </Row>
      <BlankRow height="10px"/>
      <Tiles margin="20px" >
        { tiles }
      </Tiles>
    </Shimmer>
  )
}