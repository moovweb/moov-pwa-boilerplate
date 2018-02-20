import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import logo from '../logo.svg'
import { Link } from 'react-router-dom'

const styles = {
  logo: {
    position: 'absolute',
    left: '50%',
    marginLeft: '-116px'
  }
}

export default function Header({ title, onMenuClick }) {
  return (
    <AppBar position="static" style={{ backgroundColor: 'white' }}>
      <Toolbar>
        <IconButton aria-label="Menu" onClick={onMenuClick} className="link">
          <MenuIcon />
        </IconButton>
        <Link to="/" style={styles.logo}>
          <img src={logo} style={{ height: '56px' }}/>
        </Link>
      </Toolbar>
    </AppBar>
  )
}