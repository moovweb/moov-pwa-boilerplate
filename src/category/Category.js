import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Link from 'moov-pwa/Link'
import Typography from '@material-ui/core/Typography'
import Container from 'moov-pwa/Container'
import Row from 'moov-pwa/Row'
import { withStyles } from '@material-ui/core'
import withAmp from 'moov-pwa/amp/withAmp'
import Image from 'moov-pwa/Image'

@withAmp
@withStyles(theme => ({
  categoryList: {
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
    marginTop: `${theme.margins.container}px`,
    marginBottom: `${2*theme.margins.container}px`
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
}))
@inject(({ app }) => ({ app, category: app.category }))
@observer
export default class App extends Component {
  render() {
    const { category, classes } = this.props

    if (!category) return null

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
              <li key={i}>
                <Image className={classes.image} aspectRatio={50} src={subcategory.image}/>
                <Link className={classes.link} to={`/s/${subcategory.id}`}></Link>
                <Typography className={classes.subcategoryName} variant="title">{subcategory.name}</Typography>
              </li>
            ))} 
          </ul>
        </Row>
      </Container>
    )
  }
}
