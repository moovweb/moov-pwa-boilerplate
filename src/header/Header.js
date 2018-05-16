import React, { Component } from 'react'
import { observer } from 'mobx-react'
import AppBar from 'moov-pwa/AppBar'
import IconButton from 'material-ui/IconButton'
import FindStore from 'material-ui-icons/LocationOn'
import Search from 'material-ui-icons/Search'
import Link from 'moov-pwa/Link'
import { withStyles } from 'material-ui/styles'
import Logo from '../assets/moovweb-logo.svg'
import CartButton from 'moov-pwa/CartButton'
import HeaderLogo from 'moov-pwa/HeaderLogo'

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
@observer
export default class Header extends Component {

  render() {
    const { classes } = this.props

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
