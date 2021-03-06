import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
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
import Rating from 'moov-pwa/Rating'
import ButtonSelector from 'moov-pwa/ButtonSelector'
import TabPanel from 'moov-pwa/TabPanel'
import CmsSlot from 'moov-pwa/CmsSlot'
import classnames from 'classnames'

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
  },
  label: {
    marginBottom: '10px'
  },
  review: {
    padding: '10px',
    marginBottom: '10px'
  }
}))
@withAmp
@inject(({ app }) => ({ product: app.product }))
@observer
export default class Product extends Component { 

  renderReview(review) {
    return ;
  }

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
              <Typography variant="body1" className={classnames(classes.label)}>Color</Typography>
              <ButtonSelector name="color" model={product.color} showSelectedText/>
            </Row>
            <Row className={classes.size}>
              <Typography variant="body1" className={classnames(classes.label)}>Size</Typography>
              <ButtonSelector name="size" model={product.size}/>
            </Row>
            <Row>
              <Hbox>
                <div style={{ marginRight: '15px' }}>Quantity:</div>
                <QuantitySelector product={product}/>
              </Hbox>
            </Row>
            <AddToCartButton product={product} docked confirmation="This item has been added to your cart."/>
            <TabPanel>
              <CmsSlot label="Description">{product.description}</CmsSlot>
              <CmsSlot label="Specs">{product.specs}</CmsSlot>
              <div label="Reviews">
                {product.reviews.map((review, i) => (
                  <Paper key={i} className={this.props.classes.review}>{review}</Paper>
                ))}
              </div>
            </TabPanel>
          </Container>
        </AmpForm>
      </AmpState>
    )
  }

}
