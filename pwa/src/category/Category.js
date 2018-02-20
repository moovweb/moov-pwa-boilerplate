import React, { Component } from 'react'
import { observer, inject } from "mobx-react"
import SubcategoryItem from './SubcategoryItem'
import CategoryMask from './CategoryMask'

@inject('shop')
@observer
export default class Category extends Component {
  render() {
    const { category } = this.props.shop

    if (category.loading) {
      return <CategoryMask/>
    } else {
      return (
        <div>
          <div>Category {category.name}</div>
          <ul>
            { category.subcategories.map((subcategory, i) => <SubcategoryItem key={i} subcategory={subcategory}/>)}
          </ul>
          <input type="text"/>
        </div>
      )
    }
  }

  componentWillMount() {
    this.loadCategory(this.props)    
  }

  componentWillUpdate(nextProps) {
    // this.loadCategory(nextProps)
  }

  loadCategory(props) {
    const { shop } = props
    shop.loadCategory(props.match.params.id);
  }
}

