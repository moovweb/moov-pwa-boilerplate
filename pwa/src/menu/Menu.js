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
import ListItemIcon from 'material-ui/List/ListItemIcon'
import { withRouter } from 'react-router-dom'
import Hbox from '../layout/Hbox'

@withRouter
@inject('shop')
@observer
export default class Menu extends Component {

  render() {
    const { shop: { menu }, title, open, onClose } = this.props
    const { levels, level } = menu
    const width = 250;

    return (
      <Drawer open={open} onClose={onClose} classes={{ paper: styles.drawer }}>
        <Hbox>
          <div style={{ flex: 1 }}/>
          <IconButton aria-label="Close Menu" onClick={onClose} className={styles.button}>
            <CloseIcon />
          </IconButton>
        </Hbox>
        <div className={styles.menuWrap}>
          <div className={styles.hbox} style={{ transform: `translateX(${-width * level}px)` }}>
            {levels.map((item, i) => {
              return (
                <List style={{ width: `${width}px`, flex: 'none' }} key={i}>
                  {!item.root && (
                    <ListItem button onClick={() => menu.goBack()} classes={{ root: styles.header }}>
                      <ListItemIcon>
                        <BackIcon className={styles.back}/>
                      </ListItemIcon>
                      <ListItemText 
                        classes={{ root: styles.headerText }} 
                        primary={<div className={styles.headerText}>{item.text} </div>} 
                      />
                    </ListItem>
                  )}
                  {item.items && item.items.map((item, i) => (
                    <ListItem key={i} button onClick={this.onItemClick.bind(this, item, menu)}>
                      <ListItemText 
                        classes={{ root: styles.listItem }} 
                        primary={item.text} 
                        disableTypography 
                      />
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

  componentWillMount() {
    this.props.shop.menu.load()
  }

  onItemClick = (item, menu) => {
    const { history } = this.props

    if (item.url) {
      history.push(`${item.url}?name=${encodeURIComponent(item.text)}`)
    } else {
      menu.setSelected(item)
    }
  }

}
