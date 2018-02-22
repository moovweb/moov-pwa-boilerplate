import React, { Component } from 'react'
import { parseQueryString } from '../utils'
import { observer, inject } from "mobx-react"

@inject('shop')
@observer
export default class Product extends Component {
  render() {
    return <div>Product</div>
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