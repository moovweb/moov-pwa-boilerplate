import React from 'react'
import styles from './SubcategoryMask.module.scss'
import Hbox from '../layout/Hbox'
import Vbox from '../layout/Vbox'

const Row = ({ height, children, style }) => <div className={styles.row} style={{ height: height && `${height}px`, ...style }}>{children}</div>
const Space = ({ width, flex }) => <div className={styles.space} style={{ width: width && `${width}px`, flex: flex }}/>
const Content = ({ width, flex }) => <div className={styles.content} style={{ width: width && `${width}px`, flex: flex }}/>
const BlankRow = ({ height }) => (
  <Row height={height}>
    <Space flex={1} />
  </Row>
)

export default function CategoryMask() {
  return (
    <div className={styles.wrap + ' animated-background'}>
      <div>
        <BlankRow height={10}/>
        <Row height={12}>
          <Space width={10}/>
          <Content width={200}/>
          <Space flex={1}/>
        </Row>
        <BlankRow height={20}/>
        <Row height={15}>
          <Space flex={1}/>
          <Content width={220}/>
          <Space width={10}/>
        </Row>
        <BlankRow height={10}/>
        <Row height={36}>
        </Row>
        <BlankRow height={10}/>
        <Row height={40}>
          <Space width={10}/>
          <Content width={150}/>
          <Space width={10}/>
          <Content width={250}/>
          <Space width={10}/>
        </Row>
        <BlankRow height={10}/>
        <Row height={15}>
          <Space width={10}/>
          <Content width={150}/>
          <Space flex={1}/>
        </Row>
        <BlankRow height={20}/>
        <Row height={15}>
          <Space width={10}/>
          <Content width={150}/>
          <Space flex={1}/>
        </Row>
        <BlankRow height={5}/>
        <Row height={15}>
          <Space width={10}/>
          <Content width={300}/>
          <Space flex={1}/>
        </Row>
        <BlankRow height={20}/>
        <Product/>
        <BlankRow height={10}/>
        <Product/>
      </div>
    </div>
  )
}

function Product() {
  return (
    <Hbox style={{ height: '400px', alignItems: 'stretch' }}>
      <Vbox style={{ width: '136px' }}>
        <Row height={116} style={{ flex: 'none' }}>
          <Space width={10}/>
          <Content flex={1}/>
          <Space width={10}/>
        </Row>
        <Row style={{ flex: 1 }} >
          <Space flex={1}/>
        </Row>
      </Vbox>
      <div style={{ flex: 1 }}>
        <Row height={15}>
          <Content flex={1}/>
          <Space width={10}/>
        </Row>
        <BlankRow height={5}/>
        <Row height={15}>
          <Content width={100}/>
          <Space flex={1}/>
        </Row>
        <BlankRow height={10}/>
        <Row height={15}>
          <Content width={150}/>
          <Space flex={1}/>
        </Row>
        <BlankRow height={10}/>
        <Row height={15}>
          <Content width={150}/>
          <Space flex={1}/>
        </Row>
        <BlankRow height={10}/>
        <Row height={15}>
          <Content width={150}/>
          <Space flex={1}/>
        </Row>
        <BlankRow height={10}/>
        <Row height={15}>
          <Content width={150}/>
          <Space flex={1}/>
        </Row>
        <BlankRow height={10}/>
        <Row height={15}>
          <Content width={150}/>
          <Space flex={1}/>
        </Row>
        <BlankRow height={10}/>
        <Row height={15}>
          <Content flex={1}/>
          <Space width={10}/>
        </Row>
        <BlankRow height={10}/>
        <Row height={15}>
          <Content flex={1}/>
          <Space width={10}/>
        </Row>
        <BlankRow height={10}/>
        <Row height={100}>
          <Space flex={1}/>
        </Row>
      </div>
    </Hbox>
  )
}