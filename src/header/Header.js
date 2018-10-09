import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import AppBar from 'moov-pwa/AppBar'
import IconButton from '@material-ui/core/IconButton'
import FindStore from '@material-ui/icons/LocationOn'
import Search from '@material-ui/icons/Search'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import Link from 'moov-pwa/Link'
import { withStyles } from '@material-ui/core/styles'
import Logo from '../assets/moovweb-logo.svg'
import CartButton from 'moov-pwa/CartButton'
import HeaderLogo from 'moov-pwa/HeaderLogo'
import Hidden from '@material-ui/core/Hidden'
import Menu from 'moov-pwa/Menu'
import PromoBanner from 'moov-pwa/PromoBanner'

@withWidth()
@withStyles(theme => ({
  root: {
    height: '64px',
    position: 'relative'
  },

  buttonLabel: {
    position: 'relative',
    top: '-6px'
  },

  icon: {
    color: theme.palette.action.active
  },

  buttonText: {
    position: 'absolute',
    textTransform: 'uppercase',
    fontSize: '8px',
    top: '24px',
    color: theme.palette.action.active
  },

  large: {
    fontSize: '28px'
  }
}))
@inject('app')
@observer
export default class Header extends Component {

  render() {
    const { classes } = this.props

    const storeFinder = (
      <Link to="/store-finder">
        <IconButton aria-label="Store Locator"color="inherit" classes={{label: classes.large }}>
          <FindStore className={classes.icon}/>
        </IconButton>
      </Link>
    )

    const promoWidth = isWidthUp('sm', this.props.width) ? 1400 : 400;
    const promo = `https://placehold.it/${promoWidth}x64/81d4fa/fff?text=${encodeURIComponent('25% OFF all products in XYZ category')}`

    return (
      <div>
        <AppBar classes={{ root: classes.root }}>
          <Menu useExpanders/>
          <Hidden mdUp implementation="css">{ storeFinder }</Hidden>
          <HeaderLogo>
            <Logo />
          </HeaderLogo>
          <div style={{ flex: 1 }}/>
          <Hidden smDown implementation="css">{ storeFinder }</Hidden>
          <IconButton aria-label="Search" color="inherit"  classes={{label: classes.large }} onClick={this.onSearchClick}>
            <Search className={classes.icon}/>
          </IconButton>
          <CartButton classes={{ icon: classes.icon }}/>
        </AppBar>
        <PromoBanner src={promo}/>
      </div>
    )
  }

  onSearchClick = () => {
    this.props.app.search.toggle(true)
  }
 
}
