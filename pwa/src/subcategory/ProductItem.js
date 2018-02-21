import React, { Component } from 'react'
import { observer, inject } from "mobx-react"
import Rating from '../components/Rating'
import QuantitySelector from '../components/QuantitySelector'
import styles from './ProductItem.module.scss'
import Hbox from '../layout/Hbox'
import Divider from '../layout/Divider'

import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions,
} from 'material-ui/ExpansionPanel'

import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import Typography from 'material-ui/Typography'
import Radio, { RadioGroup } from 'material-ui/Radio'
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form'
import Button from 'material-ui/Button'
import { Link } from 'react-router-dom'

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
          </div>
        </Hbox>
        <Divider horizontal/>
        <Hbox style={{ alignItems: 'center' }}>
          <div style={{ flex: 1, margin: '0 10px', whiteSpace: 'nowrap' }}>
            Qty: <QuantitySelector value={product.quantity} onChange={q => product.setQuantity(q)}/>
          </div>
          <Divider vertical/>
          <div style={{ flex: 1, margin: '10px' }}>
            { product.salePrice === product.originalPrice ? 'Retail' : 'Sale' }
            <div style={{ float: 'right' }}>${product.salePrice.toFixed(2)}</div>
          </div>
        </Hbox>
        <Divider horizontal/>
        <ExpansionPanel classes={{ root: styles.deliveryOptions }}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography>Installation &amp; Delivery Options</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <RadioGroup value={product.delivery} onChange={(e, value) => product.setDelivery(value)}>
              <FormControlLabel value="store" control={<Radio/>} label="Pick Up in Store (No Install)"  />
              <FormControlLabel value="ship" control={<Radio/>} label="Ship to Home" />
            </RadioGroup>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <div className={styles.total}>
          Total: ${product.total}
        </div>
        <div style={{ textAlign: 'center', padding: '10px' }}>
          <Button raised color="primary" classes={{ root: styles.addToCartButton }}>
            Add to Cart
          </Button>
        </div>
      </li>
    )
  }

}

