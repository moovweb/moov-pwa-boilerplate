import React, { Component } from 'react'
import { observer, inject } from "mobx-react"
import SubcategoryItem from './SubcategoryItem'
import CategoryMask from './CategoryMask'
import styles from './Category.module.scss'
import { parseQueryString } from '../utils'

@inject('shop')
@observer
export default class Category extends Component {
  render() {
    const { category } = this.props.shop

    return (
      <div className={styles.category}>
        { category.loading && <CategoryMask/> }
        <h1>{category.name}</h1>
        <ul className={styles.subcategories}>
          { category.subcategories.map((subcategory, i) => <SubcategoryItem key={i} subcategory={subcategory}/>) }
        </ul>
        <input type="text"/>
      </div>
    )

  }

  componentWillMount() {
    this.loadCategory(this.props)    
  }

  componentWillUpdate(nextProps) {
    // this.loadCategory(nextProps)
  }

  loadCategory(props) {
    const { shop, match: { params: { id } } } = props
    const queryParams = parseQueryString(props.location.search)
    shop.loadCategory(id, queryParams)
  }
}

