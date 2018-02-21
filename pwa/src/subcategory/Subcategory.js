import React, { Component } from 'react'
import { observer, inject } from "mobx-react"
import SubcategoryMask from './SubcategoryMask'
import styles from './Subcategory.module.scss'
import { parseQueryString } from '../utils'
import Container from '../layout/Container'
import ProductItem from './ProductItem'

@inject('shop')
@observer
export default class Subcategory extends Component {
  render() {
    const { subcategory } = this.props.shop

    return (
      <div className={styles.subcategory}>
        <div>{subcategory && subcategory.name}</div>
        
        <div className={styles.selectedStore}>
          <div>Selected Store:</div>
          <div className={styles.storeName}>Pep Boys Randallstown (8635 Liberty Rd)</div>
        </div>

        { subcategory ? (
          <div>
            <div className={styles.count}>Showing {subcategory.start + 1} - {subcategory.end + 1} of {subcategory.total} Products</div>
            <h1>Shop for Products</h1>
            <ul className={styles.products}>
              { subcategory.products.map((product, i) => <ProductItem key={i} product={product}/>) }
            </ul>
            <Container>
              <div className="seoText">{subcategory.text}</div>
            </Container>
          </div>
        ) : (
          <SubcategoryMask/>
        )}
      </div>
    )
  }

  componentWillMount() {
    const { shop, subcategoryId, location } = this.props
    const queryParams = parseQueryString(location.search)
    shop.loadSubcategory(subcategoryId, queryParams)
  }

  componentWillUnmount() {
    this.props.shop.setSubcategory(null)
  }

}

