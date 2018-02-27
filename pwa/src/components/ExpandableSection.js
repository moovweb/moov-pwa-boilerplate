import React from 'react'

import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary
} from 'material-ui/ExpansionPanel'

import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import Typography from 'material-ui/Typography'
import withStyles from 'material-ui/styles/withStyles'

const styles = {
  root: {
    boxShadow: 'none',
    border: 'none',
    margin: 0,

    '&::before': {
      display: 'none'
    },
    
    '& > *:first-child': {
      padding: '0',
      minHeight: '0',
      '& > *:first-child': {
        margin: '12px 0 !important'
      }
    }
  },
  
  largeTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#444'
  },
  
  details: {
    paddingLeft: '0 !important',
    paddingRight: '0 !important'
  }
}

export default withStyles(styles)(function ExpandableSection({ classes, children = [], title, largeTitle=false }) {
  return (
    <ExpansionPanel classes={{ root: classes.root }}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
        <Typography className={largeTitle ? classes.largeTitle : ''}>{title}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails classes={{ root: classes.details }}>
        { children }
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
})