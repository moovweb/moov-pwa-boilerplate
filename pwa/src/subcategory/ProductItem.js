import React, { Component } from 'react'
import { observer, inject } from "mobx-react"
import Rating from '../components/Rating'
import QuantitySelector from '../components/QuantitySelector'
import styles from './ProductItem.module.scss'
import Hbox from '../layout/Hbox'
import Divider from '../layout/Divider'
import DeliveryOptions from '../product/DeliveryOptions'
import Button from 'material-ui/Button'
import { Link } from 'react-router-dom'
import AddToCartButton from '../product/AddToCartButton'

@inject('shop')
@observer
export default class ProductItem extends Component {

  render() {
    const { product, classes } = this.props

    return (
      <li className={styles.product}>
        <Hbox>
          <Link to={product.url}>
            <img src={product.image}/>
          </Link>
          <div className={styles.info}>
            <Link className={styles.name} to={product.url}>{product.name}</Link>
            <Rating value={product.rating}/>
            <a href="javascript:void(0)">See all {product.reviewCount} reviews</a>
            <div className="field">
              <label>Part #: </label>
              <span className="value">{product.partNumber}</span>
            </div>
            <div className="field">
              <label>SKU: </label>
              <span className="value">{product.sku}</span>
            </div>
            <div className={styles.availability}>Available today</div>
            { product.pickupAvailable && (
              <div className={styles.availabilityOption}>Pay in Store Available</div>
            )}
            <div className={styles.shortDescription}>{product.shortDescription}</div>
          </div>z
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
        <DeliveryOptions product={product}/>
        <div className={styles.total}>
          Total: ${product.total}
        </div>
        <div style={{ textAlign: 'center', padding: '10px' }}>
          <AddToCartButton/>
        </div>
      </li>
    )
  }

}

