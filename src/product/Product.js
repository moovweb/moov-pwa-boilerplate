import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Container from 'react-storefront/Container'
import { observer, inject } from 'mobx-react'
import { withStyles } from '@material-ui/core'
import ImageSwitcher from 'react-storefront/ImageSwitcher'
import { price } from 'react-storefront/format'
import QuantitySelector from 'react-storefront/QuantitySelector'
import AddToCartButton from 'react-storefront/AddToCartButton'
import Row from 'react-storefront/Row'
import { Hbox } from 'react-storefront/Box'
import withAmp from 'react-storefront/amp/withAmp'
import AmpState from 'react-storefront/amp/AmpState'
import AmpForm from 'react-storefront/amp/AmpForm'
import Rating from 'react-storefront/Rating'

@withStyles(theme => ({
  root: {
    paddingBottom: '50px'
  },
  imageSwitcher: {
    height: 'calc(100vh - 280px)',
    width:  `calc(100% + ${theme.margins.container*2}px)`,
    margin: `0 -${theme.margins.container}px`
  },
  rating: {
    marginLeft: '10px'
  }
}))
@withAmp
@inject(({ app }) => ({ product: app.product }))
@observer
export default class Product extends Component { 

  render() {
    const { product, classes } = this.props

    if (!product) return null

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
              <Hbox>
                <Typography variant="subheading">{price(product.price)}</Typography>
                <Rating product={product} className={classes.rating}/>
              </Hbox>
            </Row>
            <Row>
              <ImageSwitcher classes={{ root: classes.imageSwitcher }} product={product} indicators/>
            </Row>
            <Row>
              <Hbox>
                <div style={{ marginRight: '15px' }}>Quantity:</div>
                <QuantitySelector product={product}/>
              </Hbox>
            </Row>
            <AddToCartButton product={product} docked confirmation="This item has been added to your cart."/>
            <Row>
              <Typography variant="body2">{product.description}</Typography>
            </Row>
          </Container>
        </AmpForm>
      </AmpState>
    )
  }

}
