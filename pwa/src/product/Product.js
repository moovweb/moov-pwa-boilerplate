import React, { Component } from 'react'
import Typography from 'material-ui/Typography'
import Container from 'moov-pwa-components/Container'
import { observer, inject } from 'mobx-react'
import ProductShimmer from './ProductShimmer'

@inject(({ app }) => ({ product: app.product, loading: app.loading }))
@observer
export default class Product extends Component { 

  render() {
    const { product, loading } = this.props

    if (loading) return <ProductShimmer/>

    return (
      <Container>
        <Typography variant="title" component="h1">{product.name}</Typography>
      </Container>
    )
  }

}
