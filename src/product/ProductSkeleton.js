import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Skeleton, BlankRow, Row, Space, Content } from 'moov-pwa/Skeleton'
import Typography from '@material-ui/core/Typography'

@inject(({ app }) => ({ product: app.product }))
@observer
export default class ProductSkeleton extends Component {
  render() {
    const { product } = this.props
    return (
      <Skeleton top={80}>
        <Row height="26px">
          <Space/>
          <Content width="200px">
            { product.name && <Typography variant="title">{product.name}</Typography>}
          </Content>
          <Space flex="1" minWidth="15px"/>
        </Row>
        <BlankRow/>
        <Row height="20px">
          <Space/>
          <Content flex="1">
            { product.description && <Typography variant="body2">{product.description}</Typography> }
          </Content>
          <Space flex="1" minWidth="15px"/>
        </Row>
        <BlankRow/>
        <Row height="314px">
          <Space/>
          <Content flex="1">
            {product.images && <img style={{ width: '100%' }} src={product.images[0]} alt="product" />}
          </Content>
          <Space/>
        </Row>     
        <BlankRow/>
        <Row height="40px">
          <Space/>
          <Content flex="1"/>
          <Space/>
        </Row>
        <BlankRow/>
        <BlankRow/>   
        <BlankRow/>   
      </Skeleton>
    )
  }
}