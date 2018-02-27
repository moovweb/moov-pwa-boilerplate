import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import PinDrop from 'material-ui-icons/PinDrop'
import Person from 'material-ui-icons/Person'
import Cart from 'material-ui-icons/ShoppingCart'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'

const styles = {
  logoWrap: {
    position: 'absolute',
    left: '50%',
    marginLeft: 'calc(-115px/2)',
    backgroundColor: '#E21D3B',
    height: '100%',
    "& img": {
      height: '56px'
    }
  },

  buttonLabel: {
    position: 'relative',
    top: '-6px'
  },

  buttonText: {
    position: 'absolute',
    textTransform: 'uppercase',
    fontSize: '8px',
    top: '24px'
  },

  large: {
    fontSize: '32px'
  }
}

export default withStyles(styles)(
  function Header({ classes, title, onMenuClick }) {
    return (
      <AppBar position="fixed">
        <Toolbar disableGutters classes={{ root: classes.toolBar }}>
          <IconButton aria-label="Menu" color="inherit" onClick={onMenuClick} classes={{ label: classes.buttonLabel }}>
            <MenuIcon />
            <div className={classes.buttonText}>menu</div>
          </IconButton>
          <IconButton aria-label="Store Locator"color="inherit" classes={{label: classes.large }}>
            <PinDrop/>
          </IconButton>
          <Link to="/" className={classes.logoWrap}>
            <img alt="logo" src="https://static.pepboys.com/images/promotions/january_2018/PB_Mobile_150.jpg"/>
          </Link>
          <div style={{ flex: 1 }}/>
          <IconButton aria-label="Your Account"color="inherit"  classes={{label: classes.large }}>
            <Person />
          </IconButton>
          <IconButton aria-label="Cart" color="inherit" classes={{label: `${classes.large} ${classes.cart}` }}>
            <Cart/>
          </IconButton>
        </Toolbar>
      </AppBar>
    )
  }
)