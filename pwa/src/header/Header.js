import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import PinDrop from 'material-ui-icons/PinDrop'
import Person from 'material-ui-icons/Person'
import Cart from 'material-ui-icons/ShoppingCart'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

export default function Header({ title, onMenuClick }) {
  return (
    <AppBar position="fixed" className={styles.header}>
      <Toolbar>
        <IconButton aria-label="Menu" onClick={onMenuClick} className={styles.button} classes={{ label: `${styles.buttonLabel} ${styles.menu}` }}>
          <MenuIcon />
          <div className={styles.buttonText}>menu</div>
        </IconButton>
        <IconButton aria-label="Store Locator" className={styles.button} classes={{label: styles.large }}>
          <PinDrop/>
        </IconButton>
        <Link to="/" className={styles.logo}>
          <img alt="logo" src="https://static.pepboys.com/images/promotions/january_2018/PB_Mobile_150.jpg"/>
        </Link>
        <div style={{ flex: 1 }}/>
        <IconButton aria-label="Your Account" className={styles.button} classes={{label: styles.large }}>
          <Person />
        </IconButton>
        <IconButton aria-label="Cart" className={styles.button} classes={{label: `${styles.large} ${styles.cart}` }}>
          <Cart/>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}