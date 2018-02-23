import React from 'react'
import styles from './ExpandableSection.module.scss'
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary
} from 'material-ui/ExpansionPanel'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'

import Typography from 'material-ui/Typography'
export default function ExpandableSection({ children = [], title, largeTitle=false }) {
  return (
    <ExpansionPanel classes={{ root: styles.root }}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
        <Typography className={largeTitle ? styles.largeTitle : ''}>{title}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails classes={{ root: styles.details }}>
        { children }
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}