import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import Link from 'moov-pwa/Link'
import { Vbox } from 'moov-pwa/Box'
import Rating from 'moov-pwa/Rating'
import Image from 'moov-pwa/Image'
import { price } from 'moov-pwa/format'

@withStyles(theme => ({
  root: {
    listStyle: 'none',
    padding: '20px 0'
  },
  thumb: {
    flex: 2,
    display: 'block',
    marginBottom: '10px',
    '& img': {
      width: '100%'
    }
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  price: {
    color: theme.palette.price,
    marginTop: '5px'
  },
  reviews: {
    marginTop: '5px'
  },
  reviewCount: {
    marginLeft: '2px'    
  }
}), { name: 'MoovProductItem' })
export default class ProductItem extends Component {

  static propTypes = {
    product: PropTypes.object.isRequired,
    classes: PropTypes.object
  }

  render() {
    const { index, product, classes } = this.props

    return (
      <div id={`item-${index}`} className={classes.root}>
        <Link prefetch="visible" to={`/p/${product.id}`} className={classes.link}>
          <Vbox alignItems="stretch">
            <div className={classes.thumb}>
              <Image lazy={index >= 4 && index < 10} aspectRatio={100} alt="product" src={product.thumbnail}/>
            </div>
            <div>
              <Typography variant="subheading" className={classes.name}>
                {product.name}
              </Typography>
              <Rating product={product} className={classes.rating}/>
              <Typography className={classes.price}>{ price(product.price) }</Typography>
            </div>
          </Vbox>
        </Link>
      </div>
    )
  }

}