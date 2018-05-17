import React, { Component } from 'react'
import Typography from 'material-ui/Typography'
import Container from 'moov-pwa/Container'
import { observer, inject } from 'mobx-react'
import ProductShimmer from './ProductShimmer'
import { withStyles } from 'material-ui'
import ImageSwitcher from 'moov-pwa/ImageSwitcher'
import { price } from 'moov-pwa/format'
import QuantitySelector from 'moov-pwa/QuantitySelector'
import AddToCartButton from 'moov-pwa/AddToCartButton'
import Row from 'moov-pwa/Row'
import { Hbox } from 'moov-pwa/Box'

@withStyles(theme => ({
  root: {
    paddingBottom: '50px'
  },
  imageSwitcher: {
    height: 'calc(100vh - 375px)'
  }
}))
@inject(({ app }) => ({ product: app.product, loading: app.loading }))
@observer
export default class Product extends Component { 

  render() {
    const { product, loading, classes } = this.props

    if (loading) return <ProductShimmer/>

    return (
      <Container className={classes.root}>
        <Row>
          <Typography variant="title" component="h1">{product.name}</Typography>
        </Row>
        <Row>
          <Typography variant="body2">{product.description}</Typography>
        </Row>
        <Row>
          <ImageSwitcher product={product}/>
        </Row>
        <Row>
          <Typography variant="subheading">{price(product.price)}</Typography>
        </Row>
        <Row>
          <Hbox>
            <div style={{ marginRight: '15px' }}>Quantity:</div>
            <QuantitySelector product={product}/>
          </Hbox>
        </Row>
        <AddToCartButton product={product} docked confirmation="This item has been added to your cart."/>
      </Container>
    )
  }

}
