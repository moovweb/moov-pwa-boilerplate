import React, { Component } from 'react'
import { observer, inject } from "mobx-react"
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemText } from 'material-ui/List'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Typography from 'material-ui/Typography'
import Toolbar from 'material-ui/Toolbar'
import CloseIcon from 'material-ui-icons/Close'
import IconButton from 'material-ui/IconButton'
import styles from './Menu.module.scss'

@inject('shop')
@observer
export default class Menu extends Component {

  render() {
    const { shop: { menu }, title, open, onClose } = this.props
    const { items, selected, level } = menu

    return (
      <Drawer open={open} onClose={onClose} style={styles.drawer}>
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
        <div className={styles.menuWrap}>
          <div className={styles.hbox} level={level}>
            <List style={{minWidth: '250px'}}>
              { items.map((item, i) => (
                <ListItem key={i} button onClick={() => menu.setSelected(item)}>
                  <ListItemText primary={item.text}/>
                </ListItem>
              ))}
            </List>
            { selected && (
              <div>
                <div onClick={() => menu.goBack()}>{ selected.text }</div>
                <List style={{minWidth: '250px'}}>
                  { selected && selected.items.map((item, i) => (
                    <ListItem key={i} button component={Link} to={'/' + item.text.toLowerCase().replace(/\s/g, '-')}>
                      <ListItemText primary={item.text}/>
                    </ListItem>
                  ))}
                </List>
              </div>
            )}
          </div>
        </div>
      </Drawer>
    )
  }

}
