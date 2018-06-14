import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Container from 'moov-pwa/Container'
import { observer, inject } from 'mobx-react'
import { withStyles } from '@material-ui/core'
import ImageSwitcher from 'moov-pwa/ImageSwitcher'
import { price } from 'moov-pwa/format'
import QuantitySelector from 'moov-pwa/QuantitySelector'
import AddToCartButton from 'moov-pwa/AddToCartButton'
import Row from 'moov-pwa/Row'
import { Hbox } from 'moov-pwa/Box'
import withAmp from 'moov-pwa/amp/withAmp'
import AmpState from 'moov-pwa/amp/AmpState'
import AmpForm from 'moov-pwa/amp/AmpForm'

@withStyles(theme => ({
  root: {
    paddingBottom: '50px'
  },
  imageSwitcher: {
    height: 'calc(100vh - 280px)',
    width: '100vw',
    margin: `0 -${theme.margins.container}px`
  }
}))
@withAmp
@inject(({ app }) => ({ product: app.product, loading: app.loading }))
@observer
export default class Product extends Component { 

  render() {
    const { product, classes } = this.props

    return (
      <AmpState initialState={product}>
        <AmpForm id="form" action="/cart/add-from-amp.json">

          {/* These hidden fields are needed for AMP */}
          <input type="hidden" name="id" value={product.id}/>
          <input type="hidden" name="name" value={product.name}/>

          <Container className={classes.root}>
            <Row>
              <Typography variant="title" component="h1">{product.name}</Typography>
            </Row>
            <Row>
              <Typography variant="body2">{product.description}</Typography>
            </Row>
            <Row>
              <ImageSwitcher classes={{ root: classes.imageSwitcher }} product={product} indicators/>
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
        </AmpForm>
      </AmpState>
    )
  }

}
