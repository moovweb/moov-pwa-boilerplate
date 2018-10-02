import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Link from 'moov-pwa/Link'
import Typography from '@material-ui/core/Typography'
import Container from 'moov-pwa/Container'
import Row from 'moov-pwa/Row'
import { withStyles } from '@material-ui/core'
import withAmp from 'moov-pwa/amp/withAmp'
import Image from 'moov-pwa/Image'
import ResponsiveTiles from 'moov-pwa/ResponsiveTiles'
import Page from 'moov-pwa/Page'

@withAmp
@withStyles(theme => ({
  subcategories: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    '& li': {
      display: 'flex',
      position: 'relative',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: theme.margins.row,
      flexDirection: 'column'
    }
  },
  subcategoryName: {
    textAlign: 'center',
    margin: `${theme.margins.container}px 0`,
  },
  link: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  image: {
    width: '100%'
  }
}), { name: 'MoovDemoCategory' })
@inject(({ app }) => ({ category: app.category }))
@observer
export default class App extends Component {
  render() {
    const { category, classes } = this.props

    if (!category) return null    

    return (
      <Page type="category">
        <Container>
          <Row>
            <Typography variant="title" component="h1">{category.name}</Typography>
          </Row>
          <Row>
            <Typography variant="subheading" component="h2">{category.description}</Typography>
          </Row> 
          <Row>
            <ResponsiveTiles cols={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 4 }}>
              { category.subcategories.map((subcategory, i) => (
                <div key={subcategory.id}>
                  <Image lazy={i > 3} className={classes.image} aspectRatio={50} src={subcategory.image}/>
                  <Link prefetch="visible" className={classes.link} to={`/s/${subcategory.id}`}></Link>
                  <Typography className={classes.subcategoryName} variant="subheading">{subcategory.name}</Typography>
                </div>
              ))}
            </ResponsiveTiles>
          </Row>
        </Container>
      </Page>
    )
  }
}
