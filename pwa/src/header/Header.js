import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

export default function Header({ title, onMenuClick }) {
  return (
    <AppBar position="fixed" className={styles.header}>
      <Toolbar>
        <IconButton aria-label="Menu" onClick={onMenuClick} className={styles.button} classes={{ label: styles.buttonLabel }}>
          <MenuIcon />
          <div className={styles.buttonText}>menu</div>
        </IconButton>
        <Link to="/" className={styles.logo}>
          <img src="https://static.pepboys.com/images/promotions/january_2018/PB_Mobile_150.jpg"/>
        </Link>
      </Toolbar>
    </AppBar>
  )
}