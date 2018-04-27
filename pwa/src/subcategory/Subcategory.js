import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Link from 'moov-pwa-components/Link'
import Typography from 'material-ui/Typography'
import Container from 'moov-pwa-components/Container'
import SubcategoryShimmer from './SubcategoryShimmer'

@inject(({ app }) => ({ subcategory: app.subcategory, loading: app.loading }))
@observer
export default class Subcategory extends Component { 

  render() {
    const { subcategory, loading } = this.props

    if (loading) return <SubcategoryShimmer/>

    return (
      <Container>
        <Typography variant="title" component="h1">{subcategory.name}</Typography>
        <p>{subcategory.description}</p>
        { subcategory.products.map((product, i) => (
          <li key={i}>
            <Link to={`/p/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </Container>
    )
  
  }

}
