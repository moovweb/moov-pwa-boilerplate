import React from 'react'
import withStyles from "material-ui/styles/withStyles"
import theme from '../theme'
import { Hbox, Vbox } from '../layout/Box'
import color from 'color'

const shimmer = color('#eee')

const styles = {
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  
  space: {
    backgroundColor: 'white'
  },

  '@keyframes shimmer': {
    from: { backgroundPosition: '-468px 0'},
    to: { backgroundPosition: '468px 0' }
  },
  
  shimmer: {
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.palette.background.shade,
    animationDuration: '1s',
    animationFillMode: 'forwards',
    animationIterationCount: 'infinite',
    animationName: 'shimmer',
    animationTimingFunction: 'linear',
    // background: `linear-gradient(to right, ${shimmer.hex()} 8%, ${shimmer.darken(0.03).hex()} 18%, ${shimmer.hex()} 33%)`,
    backgroundSize: '800px 104px'
  }
}

/**
 * The root component for a shimmer page
 */
export const Shimmer = withStyles(styles)(
  ({ classes, children, top=170 }) => <div className={classes.shimmer} style={{ top: `${top}px` }}>{children}</div>
)

/**
 * A row of space and content
 */
export const Row = withStyles(styles)(
  ({ wrap, classes, children, ...style }) => (
    <div 
      className={classes.row} 
      style={{ flexWrap: wrap && 'wrap', ...style }}
    >
      {children}
    </div>
  )
)

/**
 * White space between content
 */
export const Space = withStyles(styles)(
  ({ classes, ...style }) => <div className={classes.space} style={style}/>
)

/**
 * A placeholder for content with a gray background that shimmers
 */
export const Content = ({ ...style }) => (
  <div style={{ ...style }}/>
)

/**
 * A blank row.  You provide the height
 */
export const BlankRow = (props) => (
  <Row {...props}>
    <Space flex={1} />
  </Row>
)

/**
 * A square, generally used to represent images in grid, for example on a category page
 */
export const Tile = ({ minWidth, maxWidth, hMargin, vMargin, textMargin, fontSize="14px", ...props }) => {
  hMargin = parseInt(hMargin.replace('px', ''), 10)
  const minWidthPx = (minWidth + hMargin) + 'px'
  const maxWidthPx = (maxWidth + hMargin) + 'px'

  return (
    <Vbox flex="1" minWidth={minWidthPx} maxWidth={maxWidthPx} alignItems="stretch">
      <BlankRow height={vMargin}/>
      <Hbox style={{ flex: 1, alignItems: 'stretch' }}>
        <Space width={hMargin}/>
        <Content flex="1" height="0" paddingTop={`calc(100% - ${hMargin * 2}px)`}/>
        <Space width={hMargin}/>
      </Hbox>
      <BlankRow height={textMargin}/>
      <Row>
        <Space width={hMargin}/>
        <Content flex="1" height={fontSize}/>
        <Space width={hMargin}/>
      </Row>      
      <BlankRow height={vMargin}/>
    </Vbox>
  )
}

/**
 * A flex-wrapped set of tiles
 */
export const Tiles = ({ margin, children }) => {
  return (
    <div>
      <BlankRow height={margin}/>
      <Hbox>
        <Space width={margin}/>
        <Row wrap flex="1">
          { children }
        </Row>
        <Space width={margin}/>
      </Hbox>
    </div>
  )
}