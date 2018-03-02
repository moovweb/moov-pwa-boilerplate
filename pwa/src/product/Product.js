import React, { Component } from 'react'
import { parseQueryString } from '../utils'
import { observer, inject } from "mobx-react"
import Container from '../layout/Container'
import Breadcrumbs from '../components/Breadcrumbs'
import { Hbox } from '../layout/Box'
import Rating from '../components/Rating'
import styles from './Product.styles'
import QuantitySelector from '../components/QuantitySelector'
import Divider from '../layout/Divider';
import DeliveryOptions from './DeliveryOptions'
import AddToCartButton from './AddToCartButton'
import BottomDrawer from '../layout/BottomDrawer'
import ExpandableSection from '../components/ExpandableSection'
import withStyles from 'material-ui/styles/withStyles'
import ImageSwitcher from '../components/ImageSwitcher'

@withStyles(styles)
@inject('shop')
@observer
export default class Product extends Component {
  render() {
    const { classes, shop: { product } } = this.props

    return product ? (
      <Container className={classes.product}>
        <Breadcrumbs items={product.breadcrumbs} current={product.name}/>
        <Hbox split>
          <h2>{product.name}</h2>
          <Rating value={product.rating}/>
        </Hbox>
        <ImageSwitcher
          arrows
          classes={{ root: classes.imageSwitcher }}
          images={[
            "https://s7d2.scene7.com/is/image/SpecialtyRetailers/DR-407831-CF-296865-B?$zm$",
            "https://s7d2.scene7.com/is/image/SpecialtyRetailers/DR-407831-CF-296865-C?resmode=sharp2&op_usm=1,0.7&qlt=80,1&id=ESMo73&wid=929&hei=1210&fmt=jpg",
            "https://s7d2.scene7.com/is/image/SpecialtyRetailers/DR-407831-CF-296865-R?resmode=sharp2&op_usm=1,0.7&qlt=80,1&id=ZYdqd1&wid=929&hei=1210&fmt=jpg"
          ]}
          thumbnails={[
            "https://s7d2.scene7.com/is/image/SpecialtyRetailers/DR-407831-CF-296865-B?fit=constrain,1&wid=35&hei=50&fmt=jpg&resmode=sharp2&op_usm=1,0.4&qlt=80,1",
            "https://s7d2.scene7.com/is/image/SpecialtyRetailers/DR-407831-CF-296865-C?fit=constrain,1&wid=35&hei=50&fmt=jpg&resmode=sharp2&op_usm=1,0.4&qlt=80,1",
            "https://s7d2.scene7.com/is/image/SpecialtyRetailers/DR-407831-CF-296865-R?fit=constrain,1&wid=35&hei=50&fmt=jpg&resmode=sharp2&op_usm=1,0.4&qlt=80,1"
          ]}
        />
        <div className="field">
          <label>Part #: </label>
          <span className="value">{product.partNumber}</span>
        </div>
        <div className="field">
          <label>SKU: </label>
          <span className="value">{product.sku}</span>
        </div>
        <div className={classes.availability}>{product.availability}</div>     
        { product.pickupAvailable && (
          <div className={classes.availabilityOption}>Pay in Store Available</div>
        )}
        <div className={classes.shortDescription}>{product.shortDescription}</div>
        <div className={classes.quantity}>
          Qty: <QuantitySelector product={product}/>
        </div>
        <Divider/>
        <div>
          <Hbox split className={classes.inset}>
            <div>Retail</div>
            <div>{product.salePrice}</div>
          </Hbox>
        </div>
        <Divider/>
        <div className={classes.deliveryOptions}>
          <DeliveryOptions product={product}/>
        </div>
        <div className={classes.total}>
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
      <div></div>
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