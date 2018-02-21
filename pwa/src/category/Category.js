import React, { Component } from 'react'
import { observer, inject } from "mobx-react"
import SubcategoryItem from './SubcategoryItem'
import CategoryMask from './CategoryMask'
import styles from './Category.module.scss'
import { parseQueryString } from '../utils'
import Container from '../layout/Container'

@inject('shop')
@observer
export default class Category extends Component {
  render() {
    const { category } = this.props.shop

    return (
      <div className={styles.category}>
        <h1>{category && category.name}</h1>
        { category ? (
          <div>
            <ul className={styles.subcategories}>
              { category.subcategories.map((subcategory, i) => <SubcategoryItem key={i} subcategory={subcategory}/>) }
            </ul>
            <Container>
              <div className="seoText">{category.text}</div>
            </Container>
          </div>
        ) : (
          <CategoryMask/>
        )}
      </div>
    )
  }

  componentWillMount() {
    this.loadCategory()    
  }

  componentWillUnmount() {
    this.props.shop.setCategory(null)
  }

  componentWillUpdate(nextProps) {
    // this.loadCategory(nextProps)
  }

  loadCategory() {
    const { shop, categoryId, location } = this.props
    const queryParams = parseQueryString(location.search)
    shop.loadCategory(categoryId, queryParams)
  }
}

