import React, { Component } from 'react'
import { observer, inject } from "mobx-react"

@inject('shop')
@observer
export default class ProductItem extends Component {

  render() {
    const { product } = this.props

    return (
      <div>{product.name}</div>
    )
  }

}

