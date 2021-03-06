import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { withStyles } from '@material-ui/core';
import { Skeleton, BlankRow, Row, Space, Content, ImageSwitcher } from 'moov-pwa/Skeleton'
import Typography from '@material-ui/core/Typography'
import Rating from 'moov-pwa/Rating'
import { price } from 'moov-pwa/format'
import { Hbox } from 'moov-pwa/Box'

@withStyles(() => ({
  image: {
    height: 'calc(100vh - 353px)'
  },
  rating: {
    marginLeft: '10px'
  }
}))
@inject(({ app }) => ({ product: app.product }))
@observer
export default class ProductSkeleton extends Component {
  render() {
    const { product, classes } = this.props
    return (
      <Skeleton>
        <BlankRow/>
        <Row>
          <Space/>
          <Content>
            <Typography variant="title" component="h1">{product.name}</Typography>
          </Content>
          <Space flex="1" minWidth="15px"/>
        </Row>
        <BlankRow/>
        <Row height="24px">
          <Space/>
          <Content>
            <Hbox>
              <Typography variant="subheading">{price(product.price)}</Typography>
              <Rating product={product} className={classes.rating}/>
            </Hbox>
          </Content>
          <Space flex="1"/>
        </Row>
        <BlankRow/>
        <ImageSwitcher classes={{ image: classes.image }}/>
        <BlankRow/>
        <Row height="24px">
          <Space/>
          <Content flex="1"/>
          <Space/>
        </Row>
        <BlankRow/>
        <Row height="24px">
          <Space/>
          <Content flex="1"/>
          <Space/>
        </Row>
        <BlankRow height="100px"/>
      </Skeleton>
    )
  }
}