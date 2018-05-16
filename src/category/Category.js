import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Link from 'moov-pwa/Link'
import Typography from 'material-ui/Typography'
import Container from 'moov-pwa/Container'
import CategoryShimmer from './CategoryShimmer' 

@inject(({ app }) => ({ app, category: app.category, loading: app.loading }))
@observer
export default class App extends Component {
  render() {
    const { category, loading } = this.props

    if (loading) return <CategoryShimmer/>

    return (
      <Container>
        <Typography variant="title" component="h1">{category.name}</Typography>
        <Typography variant="subheading" component="h2">{category.tagline}</Typography>
        <ul>
          { category && category.subcategories && category.subcategories.map((subcategory, i) => (
            <li key={i}>
              <Link to={`/s/${subcategory.id}`}>{subcategory.name}</Link>
            </li>
          ))} 
        </ul>
      </Container>
    )
  }
}
