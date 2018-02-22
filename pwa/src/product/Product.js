import React, { Component } from 'react'
import { parseQueryString } from '../utils'
import { observer, inject } from "mobx-react"
import Container from '../layout/Container'
import Breadcrumbs from '../components/Breadcrumbs'
import Hbox from '../layout/Hbox'
import Rating from '../components/Rating'
import styles from './Product.module.scss'
import QuantitySelector from '../components/QuantitySelector'
import Divider from '../layout/Divider';
import DeliveryOptions from './DeliveryOptions'
import AddToCartButton from './AddToCartButton'
import BottomDrawer from '../layout/BottomDrawer'
import ExpandableSection from '../components/ExpandableSection'

@inject('shop')
@observer
export default class Product extends Component {
  render() {
    const { product } = this.props.shop

    return product ? (
      <Container className={styles.product}>
        <Breadcrumbs items={product.breadcrumbs} current={product.name}/>
        <Hbox split>
          <h2>{product.name}</h2>
          <Rating value={product.rating}/>
        </Hbox>
        <div className={styles.carousel}>
          <img src={product.image}/>
        </div>
        <div className="field">
          <label>Part #: </label>
          <span className="value">{product.partNumber}</span>
        </div>
        <div className="field">
          <label>SKU: </label>
          <span className="value">{product.sku}</span>
        </div>
        <div className={styles.availability}>{product.availability}</div>     
        { product.pickupAvailable && (
          <div className={styles.availabilityOption}>Pay in Store Available</div>
        )}
        <div className={styles.shortDescription}>{product.shortDescription}</div>
        <div className={styles.quantity}>
          Qty: <QuantitySelector product={product}/>
        </div>
        <Divider/>
        <div>
          <Hbox split className={styles.inset}>
            <div>Retail</div>
            <div>{product.salePrice}</div>
          </Hbox>
        </div>
        <Divider/>
        <div className={styles.deliveryOptions}>
          <DeliveryOptions product={product}/>
        </div>
        <div className={styles.total}>
          Total: ${product.total}
        </div>
        <Divider style={{ margin: '10px 0 0 0' }}/>
        <ExpandableSection title="Description &amp; Features" largeTitle>
          <div style={{whiteSpace: 'pre-wrap'}}>{product.description}</div>
        </ExpandableSection>
        <Divider/>
        <ExpandableSection title="Specifications" largeTitle>
        </ExpandableSection>
        <Divider/>
        <ExpandableSection title="Customer Reviews" largeTitle>
        </ExpandableSection>
        <Divider/>
        <BottomDrawer>
          <AddToCartButton/>
        </BottomDrawer>
      </Container>
    ) : (
      <div>Loading...</div>
    )
  }

  componentWillMount() {
    const { shop, categoryId, location } = this.props
    const queryParams = parseQueryString(location.search)
    shop.loadProduct(categoryId, queryParams)
  }

  componentWillUnmount() {
    this.props.shop.setProduct(null)
  }

}