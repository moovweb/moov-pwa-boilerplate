import React, { Component } from 'react'
import { observer, inject } from "mobx-react"
import SubcategoryMask from './SubcategoryMask'
import Container from '../layout/Container'
import ProductItem from './ProductItem'
import Button from 'material-ui/Button'
import { Hbox } from '../layout/Box'
import ArrowDropDown from 'material-ui-icons/ArrowDropDown'
import Breadcrumbs from '../components/Breadcrumbs'
import withStyles from 'material-ui/styles/withStyles'
import theme from '../theme'
import queryString from 'query-string'

const styles = {
  subcategory: {
    lineHeight: '18px',

    '& ul': {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
    },
  
    '& li': {
      marginBottom: '20px',
    }
  },
  
  count: {
    textAlign: 'right',
    marginTop: '10px',
    marginBottom: '10px',
  },
  
  buttonLabel: {
    color: theme.palette.red,
    marginRight: '10px',
  },
  
  storeName: {
    fontWeight: 'bold',
    color: theme.palette.text.link
  }
}

@withStyles(styles)
@inject('shop')
@observer
export default class Subcategory extends Component {
  render() { 
    const { shop: { subcategory }, classes } = this.props

    return (
      <div className={classes.subcategory}>
        { subcategory ? (
          <div>
            <Container>
              <Breadcrumbs items={subcategory.breadcrumbs} current={subcategory.name}/>
            </Container>
            <Container className={classes.count}>
              Showing <b>{subcategory.start + 1} - {subcategory.end + 1} of {subcategory.total} Products</b>
            </Container>
            <h1>Shop for Products</h1>
            <Container>
              <Hbox>
                <Button variant="raised"><span className={classes.buttonLabel}>Filter</span><ArrowDropDown/></Button>
                <Button variant="raised" style={{ flex: 1, marginLeft: '10px' }}><span className={classes.buttonLabel}>Sort</span> Availability<ArrowDropDown/></Button>
              </Hbox>
              <h2>{subcategory.name}</h2>
              <div className={classes.selectedStore}>
                <div>Selected Store</div>
                <div className={classes.storeName}>Pep Boys Randallstown (8635 Liberty Rd)</div>
              </div>
              <ul className={classes.products}>
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

  componentDidMount() {
    const { shop, subcategoryId, location } = this.props
    const queryParams = queryString.parse(location.search)
    shop.loadSubcategory(subcategoryId, queryParams)
  }

  componentWillUnmount() {
    this.props.shop.setSubcategory(null)
  }

}

