import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import AppBar from 'moov-pwa-components/AppBar'
import IconButton from 'material-ui/IconButton'
import FindStore from 'material-ui-icons/LocationOn'
import Search from 'material-ui-icons/Search'
import Link from 'moov-pwa-components/Link'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import Logo from '../assets/moovweb-logo.svg'
import CartButton from 'moov-pwa-components/CartButton'
import HeaderLogo from 'moov-pwa-components/HeaderLogo'

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
    const { classes, app: { cart } } = this.props

    return (
      <AppBar classes={{ root: classes.root }}>
        <Link to="/store-finder">
          <IconButton aria-label="Store Locator"color="inherit" classes={{label: classes.large }}>
            <FindStore className={classes.icon}/>
          </IconButton>
        </Link>
        <HeaderLogo>
          <Logo/>
        </HeaderLogo>
        <div style={{ flex: 1 }}/>
        <IconButton aria-label="Search" color="inherit"  classes={{label: classes.large }}>
          <Search className={classes.icon}/>
        </IconButton>
        <CartButton classes={{ icon: classes.icon }}/>
      </AppBar>
    )
  }
 
}
