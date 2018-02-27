import React from 'react'
import { Hbox, Vbox } from '../layout/Box'
import { Shimmer, Row, Space, Content, BlankRow } from '../components/Shimmer'

export default function CategoryMask() {
  return (
    <Shimmer>
      <BlankRow height="10px"/>
      <Row height="12px">
        <Space width="10px"/>
        <Content width="200px"/>
        <Space flex={1}/>
      </Row>
      <BlankRow height="20px"/>
      <Row height="15px">
        <Space flex={1}/>
        <Content width="220px"/>
        <Space width="10px"/>
      </Row>
      <BlankRow height="10px"/>
      <Row height="36px"/>
      <BlankRow height="10px"/>
      <Row height="40px">
        <Space width="10px"/>
        <Content width="150px"/>
        <Space width="10px"/>
        <Content width="250px"/>
        <Space width="10px"/>
      </Row>
      <BlankRow height="10px"/>
      <Row height="15px">
        <Space width="10px"/>
        <Content width="150px"/>
        <Space flex={1}/>
      </Row>
      <BlankRow height="20px"/>
      <Row height="15px">
        <Space width="10px"/>
        <Content width="150px"/>
        <Space flex={1}/>
      </Row>
      <BlankRow height="5px"/>
      <Row height="15px">
        <Space width="10px"/>
        <Content width="300px"/>
        <Space flex={1}/>
      </Row>
      <BlankRow height="20px"/>
      <Product/>
      <BlankRow height="10px"/>
      <Product/>
    </Shimmer>
  )
}

function Product() {
  return (
    <Hbox style={{ height: '400px', alignItems: 'stretch' }}>
      <Vbox width="136px">
        <Row height="116px" style={{ flex: 'none' }}>
          <Space width="10px"/>
          <Content flex={1}/>
          <Space width="10px"/>
        </Row>
        <Row flex="1">
          <Space flex={1}/>
        </Row>
      </Vbox>
      <Vbox flex="1">
        <Row height="15px">
          <Content flex={1}/>
          <Space width="10px"/>
        </Row>
        <BlankRow height="5px"/>
        <Row height="15px">
          <Content width="100px"/>
          <Space flex={1}/>
        </Row>
        <BlankRow height="10px"/>
        <Row height="15px">
          <Content width="150px"/>
          <Space flex={1}/>
        </Row>
        <BlankRow height="10px"/>
        <Row height="15px">
          <Content width="150px"/>
          <Space flex={1}/>
        </Row>
        <BlankRow height="10px"/>
        <Row height="15px">
          <Content width="150px"/>
          <Space flex={1}/>
        </Row>
        <BlankRow height="10px"/>
        <Row height="15px">
          <Content width="150px"/>
          <Space flex={1}/>
        </Row>
        <BlankRow height="10px"/>
        <Row height="15px">
          <Content width="150px"/>
          <Space flex={1}/>
        </Row>
        <BlankRow height="10px"/>
        <Row height="15px">
          <Content flex={1}/>
          <Space width="10px"/>
        </Row>
        <BlankRow height="10px"/>
        <Row height="15px">
          <Content flex={1}/>
          <Space width="10px"/>
        </Row>
        <BlankRow height="10px"/>
        <Row height="100px">
          <Space flex={1}/>
        </Row>
      </Vbox>
    </Hbox>
  )
}