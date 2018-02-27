import React, { Component } from 'react'
import { observer, inject } from "mobx-react"
import Rating from '../components/Rating'
import QuantitySelector from '../components/QuantitySelector'
import { Hbox } from '../layout/Box'
import Divider from '../layout/Divider'
import DeliveryOptions from '../product/DeliveryOptions'
import { Link } from 'react-router-dom'
import AddToCartButton from '../product/AddToCartButton'
import withStyles from 'material-ui/styles/withStyles'
import theme from '../theme'

const styles = {
  product: {
    lineHeight: '24px',
    marginTop: '20px',
    borderBottom: `1px solid ${theme.palette.background.shade}`,
  
    '& img': {
      alignSelf: 'flex-start',
      flex: 1,
      maxWidth: '116px'
    }
  },
  info: {
    flex: 2,
    marginBottom: '10px'
  },
  name: {
    fontWeight: 'bold'
  },
  availability: {
    color: '#006738',
    fontWeight: 'bold'
  },
  total: {
    backgroundColor: theme.palette.background.shade,
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '10px',
    textAlign: 'right'
  }
}

@withStyles(styles)
@inject('shop')
@observer
export default class ProductItem extends Component {

  render() {
    const { product, classes } = this.props

    return (
      <li className={classes.product}>
        <Hbox>
          <Link to={product.url}>
            <img alt="product" src={product.image}/>
          </Link>
          <div className={classes.info}>
            <Link className={classes.name} to={product.url}>{product.name}</Link>
            <Rating value={product.rating}/>
            <a>See all {product.reviewCount} reviews</a>
            <div className="field">
              <label>Part #: </label>
              <span className="value">{product.partNumber}</span>
            </div>
            <div className="field">
              <label>SKU: </label>
              <span className="value">{product.sku}</span>
            </div>
            <div className={classes.availability}>Available today</div>
            { product.pickupAvailable && (
              <div className={classes.availabilityOption}>Pay in Store Available</div>
            )}
            <div className={classes.shortDescription}>{product.shortDescription}</div>
          </div>
        </Hbox>
        <Divider horizontal/>
        <Hbox style={{ alignItems: 'center' }}>
          <div style={{ flex: 1, margin: '0 10px', whiteSpace: 'nowrap' }}>
            Qty: <QuantitySelector product={product}/>
          </div>
          <Divider vertical/>
          <div style={{ flex: 1, margin: '10px' }}>
            { product.salePrice === product.originalPrice ? 'Retail' : 'Sale' }
            <div style={{ float: 'right' }}>${product.salePrice.toFixed(2)}</div>
          </div>
        </Hbox>
        <Divider horizontal/>
        <div style={{ marginLeft: '10px' }}>
          <DeliveryOptions product={product}/>
        </div>
        <div className={classes.total}>
          Total: ${product.total}
        </div>
        <div style={{ textAlign: 'center', padding: '10px' }}>
          <AddToCartButton/>
        </div>
      </li>
    )
  }

}

