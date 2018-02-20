import React, { Component } from 'react'
import { observer, inject } from "mobx-react"
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemText } from 'material-ui/List'
import BackIcon from 'material-ui-icons/ArrowBack'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Typography from 'material-ui/Typography'
import Toolbar from 'material-ui/Toolbar'
import CloseIcon from 'material-ui-icons/Close'
import IconButton from 'material-ui/IconButton'
import styles from './Menu.module.scss'
import ListItemIcon from 'material-ui/List/ListItemIcon';
import { withRouter } from 'react-router-dom';

@withRouter
@inject('shop')
@observer
export default class Menu extends Component {

  render() {
    const { shop: { menu }, title, open, onClose } = this.props
    const { levels, level } = menu
    const width = 250;

    return (
      <Drawer open={open} onClose={onClose} style={styles.drawer}>
        <AppBar style={{ backgroundColor: 'white' }}>
          <Toolbar>
            <IconButton aria-label="Close Menu" onClick={onClose}>
              <CloseIcon />
            </IconButton>
            <Typography type="title" color="inherit">
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={styles.menuWrap}>
          <div className={styles.hbox} style={{ transform: `translateX(${-width * level}px)` }}>
            {levels.map((item, i) => {
              return (
                <List style={{ width: `${width}px`, flex: 'none' }} key={i}>
                  {!item.root && (
                    <ListItem button onClick={() => menu.goBack()} classes={{ root: styles.header }}>
                      <ListItemIcon style={{ marginRight: 0 }}>
                        <BackIcon />
                      </ListItemIcon>
                      <ListItemText classes={{ root: styles.headerText }} primary={<div className={styles.headerText}>{item.text} </div>} />
                    </ListItem>
                  )}
                  {item.items && item.items.map((item, i) => (
                    <ListItem key={i} button onClick={this.onItemClick.bind(this, item, menu)}>
                      <ListItemText primary={item.text} />
                    </ListItem>
                  ))}
                </List>
              )
            })}
          </div>
        </div>
      </Drawer>
    )
  }

  onItemClick = (item, menu) => {
    const { history } = this.props;

    if (item.url) {
      history.push(item.url)
    } else {
      menu.setSelected(item)
    }
  }

}
