import React, { Component } from 'react'
import { observer, inject } from "mobx-react"
import SubcategoryMask from './SubcategoryMask'
import styles from './Subcategory.module.scss'
import { parseQueryString } from '../utils'
import Container from '../layout/Container'
import ProductItem from './ProductItem'
import Button from 'material-ui/Button'
import Hbox from '../layout/Hbox'
import ArrowDropDown from 'material-ui-icons/ArrowDropDown'
import Breadcrumbs from '../components/Breadcrumbs'

@inject('shop')
@observer
export default class Subcategory extends Component {
  render() {
    const { subcategory } = this.props.shop

    return (
      <div className={styles.subcategory}>
        { subcategory ? (
          <div>
            <Container>
              <Breadcrumbs items={subcategory.breadcrumbs} current={subcategory.name}/>
            </Container>
            <Container className={styles.count}>
              Showing <b>{subcategory.start + 1} - {subcategory.end + 1} of {subcategory.total} Products</b>
            </Container>
            <h1>Shop for Products</h1>
            <Container>
              <Hbox>
                <Button raised><span className={styles.buttonLabel}>Filter</span><ArrowDropDown/></Button>
                <Button raised style={{ flex: 1, marginLeft: '10px' }}><span className={styles.buttonLabel}>Sort</span> Availability<ArrowDropDown/></Button>
              </Hbox>
              <h2>{subcategory.name}</h2>
              <div className={styles.selectedStore}>
                <div>Selected Store</div>
                <div className={styles.storeName}>Pep Boys Randallstown (8635 Liberty Rd)</div>
              </div>
              <ul className={styles.products}>
                { subcategory.products.map((product, i) => <ProductItem key={i} product={product}/>) }
              </ul>
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

