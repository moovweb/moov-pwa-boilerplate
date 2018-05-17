import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Link from 'moov-pwa/Link'
import Typography from 'material-ui/Typography'
import Container from 'moov-pwa/Container'
import Row from 'moov-pwa/Row'
import CategoryShimmer from './CategoryShimmer' 
import { withStyles } from 'material-ui';

@withStyles(theme => ({
  categoryList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    '& li': {
      display: 'flex',
      height: '150px',
      width: '100%',
      background: theme.palette.grey[50],
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: theme.margins.row
    }
  }
}))
@inject(({ app }) => ({ app, category: app.category, loading: app.loading }))
@observer
export default class App extends Component {
  render() {
    const { category, loading, classes } = this.props

    if (loading) return <CategoryShimmer/>

    return (
      <Container>
        <Row>
          <Typography variant="title" component="h1">{category.name}</Typography>
        </Row>
        <Row>
          <Typography variant="subheading" component="h2">{category.description}</Typography>
        </Row>
        <Row>
          <ul className={classes.categoryList}>
            { category && category.subcategories && category.subcategories.map((subcategory, i) => (
              <Link to={`/s/${subcategory.id}`}>
                <li key={i}>
                  {subcategory.name}
                </li>
              </Link>
            ))} 
          </ul>
        </Row>
      </Container>
    )
  }
}
