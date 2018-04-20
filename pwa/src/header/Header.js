import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import AppBar from 'moov-pwa-components/AppBar'
import IconButton from 'material-ui/IconButton'
import FindStore from 'material-ui-icons/LocationOn'
import Search from 'material-ui-icons/Search'
import Cart from 'material-ui-icons/ShoppingCart'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
// import Logo from '../assets/logo.svg'

@withStyles(theme => ({
  root: {
    height: '64px'
  },

  logoWrap: {
    position: 'absolute',
    left: '50%',
    marginLeft: 'calc(-115px/2)',
    height: '100%',
    display: 'flex',
    alignItems: 'center'
  },

  buttonLabel: {
    position: 'relative',
    top: '-6px'
  },

  icon: {
    color: theme.palette.icon
  },

  buttonText: {
    position: 'absolute',
    textTransform: 'uppercase',
    fontSize: '8px',
    top: '24px',
    color: theme.palette.icon
  },

  large: {
    fontSize: '28px'
  },

  logo: {
    height: "100%"
  },

  cartQuantity: {
    color: '#fff',
    backgroundColor: theme.palette.primary.main,
    height: '20px',
    width: '20px',
    lineHeight: '20px',
    fontSize: '14px',
    borderRadius: '50%',
    position: 'absolute',
    top: '3px',
    right: '5px'
  }
}))

@inject('app')
@observer
export default class Header extends Component {

  render() {
    const { classes, app: { cart } } = this.props

    return (
      <AppBar classes={{ root: classes.root }}>
        <Link to="/store-finder">
          <IconButton aria-label="Store Locator"color="inherit" classes={{label: classes.large }}>
            <FindStore className={classes.icon}/>
          </IconButton>
        </Link>
        <Link to="/" className={classes.logoWrap}>
          {/* <Logo/> */}
        </Link>
        <div style={{ flex: 1 }}/>
        <IconButton aria-label="Search" color="inherit"  classes={{label: classes.large }}>
          <Search className={classes.icon}/>
        </IconButton>
        <Link to="/cart">
          <IconButton 
            aria-label="Cart" 
            color="inherit" 
            classes={{label: `${classes.large} ${classes.cart}` }}
            onClick={this.onCartClick}
          >
            <Cart className={classes.icon}/>
            {cart.quantity > 0 && <div className={classes.cartQuantity}>{cart.quantity}</div>}
          </IconButton>
        </Link>
      </AppBar>
    )
  }

}
