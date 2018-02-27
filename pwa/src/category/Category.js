import React, { Component } from 'react'
import { observer, inject } from "mobx-react"
import SubcategoryItem from './SubcategoryItem'
import CategoryMask from './CategoryMask'
import { parseQueryString } from '../utils'
import Container from '../layout/Container'
import withStyles from 'material-ui/styles/withStyles'

const styles = {
  subcategories: {
    display: 'flex',
    flexDirection: 'row',
    margin: '20px',
    padding: '0',
    flexWrap: 'wrap',
  
    '& > *': {
      flex: 1,
      textAlign: 'center',
      minWidth: '100px',
      margin: '20px'
    }
  }
}

@withStyles(styles)
@inject('shop')
@observer
export default class Category extends Component {
  render() {
    const { classes, shop: { category } } = this.props

    return (
      <div className={classes.category}>
        <h1>{category && category.name}</h1>
        { category ? (
          <div>
            <ul className={classes.subcategories}>
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

  loadCategory() {
    const { shop, categoryId, location } = this.props
    const queryParams = parseQueryString(location.search)
    shop.loadCategory(categoryId, queryParams)
  }
}

