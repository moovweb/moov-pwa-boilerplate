import React, { Component } from 'react'
import { withStyles } from 'material-ui'
import Typography from 'material-ui/Typography'
import Row from 'moov-pwa/Row'
import QuantitySelector from 'moov-pwa/QuantitySelector'
import { price } from 'moov-pwa/format'
import { Hbox } from 'moov-pwa/Box'
import { observer, inject } from 'mobx-react'
import Button from 'material-ui/Button'

@withStyles(theme => ({
  thumb: {
    marginRight: `${theme.margins.container}px`
  }
}))
@inject(({ app }) => ({ cart: app.cart }))
@observer
export default class CartItem extends Component {
  
  render() {
    const { classes, product } = this.props
    
    return (
      <div>
        <Hbox alignItems="flex-start">
          <div className={classes.thumb}>
            <img alt="product" src={product.thumbnail}/>
          </div>
          <div className={classes.info}>
            <Typography variant="subheading">{product.name}</Typography>
            <Typography className={classes.price}>{ price(product.price) }</Typography>
            <Row>
              <QuantitySelector product={product}/>
            </Row>
          </div>
        </Hbox>
        <Row>
          <Button size="small" variant="raised" onClick={this.remove}>Remove from Cart</Button>
        </Row>
      </div>
    )
  }

  remove = () => {
    this.props.cart.remove(this.props.product)
  }

}