import React from 'react'
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Typography from 'material-ui/Typography'
import Toolbar from 'material-ui/Toolbar'
import CloseIcon from 'material-ui-icons/Close'
import IconButton from 'material-ui/IconButton'

export default function({ title, open, onClose }) {
  return (
    <Drawer open={open} onClose={onClose}>
      <AppBar style={{ backgroundColor: 'white' }}>
        <Toolbar>
          <IconButton aria-label="Close Menu" onClick={onClose} color="danger">
            <CloseIcon />
          </IconButton>
          <Typography type="title" color="inherit">
            {title}
          </Typography>        
        </Toolbar>
      </AppBar>
      <List style={{minWidth: '250px', marginTop: '56px'}}>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home"/>
        </ListItem>
        <ListItem button component={Link} to="/categories/1">
          <ListItemText primary="Category"/>
        </ListItem>
        <ListItem button component={Link} to="/products/1">
          <ListItemText primary="Product"/>
        </ListItem>
      </List>
    </Drawer>
  )
}