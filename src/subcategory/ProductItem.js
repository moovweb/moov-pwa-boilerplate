import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import Link from 'moov-pwa/Link'
import { Hbox } from 'moov-pwa/Box'
import Rating from 'moov-pwa/Rating'
import { price } from 'moov-pwa/format'
import Image from 'moov-pwa/Image'

@withStyles(theme => ({
  root: {
    listStyle: 'none',
    padding: '20px 0',
    borderBottom: `1px solid ${theme.palette.divider}` 
  },
  thumb: {
    flex: 2,
    display: 'block',
    '& img': {
      width: '100%'
    },
    marginRight: `${theme.margins.container}px`
  },
  info: {
    flex: 3
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
      <li id={`item-${index}`} className={classes.root}>
        <Link to={`/p/${product.id}`} className={classes.link}>
          <Hbox alignItems="flex-start">
            <div className={classes.thumb}>
              <Image aspectRatio={100} alt="product" src={product.thumbnail}/>
            </div>
            <div className={classes.info}>
              <Typography variant="subheading" className={classes.name}>
                {product.name}
              </Typography>
              <Hbox className={classes.reviews}>
                <Rating value={product.rating} className={classes.rating}/>
                { product.reviewCount != null && product.reviewCount > 0 && (
                  <Typography variant="caption" className={classes.reviewCount}>({ product.reviewCount})</Typography>
                )}
              </Hbox>
              <Typography className={classes.price}>{ price(product.price) }</Typography>
            </div>
          </Hbox>
        </Link>
      </li>
    )
  }

}