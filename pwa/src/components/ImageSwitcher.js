import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import withStyles from 'material-ui/styles/withStyles'
import ChevronLeft from 'material-ui-icons/ChevronLeft'
import ChevronRight from 'material-ui-icons/ChevronRight'
import IconButton from 'material-ui/IconButton'
import { classList } from '../utils'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',

    '& img': {
      display: 'block'
    }
  },

  swipeWrap: {
    position: 'relative',
    overflow: 'hidden',
    flex: 1,
    '& .react-swipeable-view-container, & > div:first-child': {
      height: '100%'
    }
  },

  imageWrap: {
    height: '100%',
    '& img': {
      height: '100%',
      margin: 'auto'
    }
  },

  thumbs: {
    marginTop: '15px'
  },

  thumb: {
    display: 'inline-block',
    border: '1px solid white',
    marginRight: '5px'
  },

  selected: {
    borderColor: '#D0D0D0'
  },

  arrow: {
    position: 'absolute',
    top: '50%',
    marginTop: '-24px'
  },

  leftArrow: {
    left: 0,
  },

  rightArrow: {
    right: 0,
  },

  icon: {
    height: '30px',
    width: '30px'
  }

}

/** 
 * A swipeable image selector suitable for PDPs
 */
@withStyles(styles)
export default class ImageSwitcher extends Component {

  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.string),
    thumbnails: PropTypes.arrayOf(PropTypes.string)
  }

  state = {
    selectedIndex: 0
  }

  render() {
    const { classes, images=[], thumbnails=[], arrows, ...rest } = this.props
    const { selectedIndex } = this.state

    return (
      <div className={classes.root} {...rest}>

        {/* Full Size Images */}
        <div className={classes.swipeWrap}>
          <SwipeableViews index={selectedIndex} onChangeIndex={i => this.setState({ selectedIndex: i })}>
            { images.map((image, i) => (
              <div key={i} className={classes.imageWrap}>
                <img src={image} alt="product"/>
              </div>
            ))}
          </SwipeableViews>

          { arrows && (
            <div className={classes.arrows}>
              { selectedIndex !== 0 && ( 
                <IconButton className={classList(classes.arrow, classes.leftArrow)} onClick={() => this.setState({ selectedIndex: selectedIndex - 1 })}>
                  <ChevronLeft classes={{root: classes.icon}}/>
                </IconButton>
              )}
              { selectedIndex !== images.length - 1 && ( 
                <IconButton className={classList(classes.arrow, classes.rightArrow)} onClick={() => this.setState({ selectedIndex: selectedIndex + 1 })}>
                  <ChevronRight classes={{root: classes.icon}}/>
                </IconButton>
              )}
            </div>
          )}
        </div>

        {/* Thumbnails */}
        <div className={classes.thumbs}>
          { thumbnails.map((image, i) => (
            <div 
              key={i} 
              className={classes.thumb + (i === selectedIndex ? ' ' + classes.selected : '')} 
              onClick={() => this.setState({ selectedIndex: i })}
            >
              <img src={image} alt="thumbnail"/>
            </div>
          ))}
        </div>

      </div>
    )

  }

}

