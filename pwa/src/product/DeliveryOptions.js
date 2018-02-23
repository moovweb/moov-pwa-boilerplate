import React from 'react'
import ExpandableSection from '../components/ExpandableSection'
import Radio, { RadioGroup } from 'material-ui/Radio'
import { FormControlLabel } from 'material-ui/Form'
import { observer } from 'mobx-react'

function DeliveryOptions({ product }) {
  return (
    <ExpandableSection title="Installation &amp; Delivery Options">
      <RadioGroup value={product.delivery} onChange={(e, value) => product.setDelivery(value)}>
        <FormControlLabel value="store" control={<Radio/>} label="Pick Up in Store (No Install)"  />
        <FormControlLabel value="ship" control={<Radio/>} label="Ship to Home" />
      </RadioGroup>
    </ExpandableSection>
  )
}

export default observer(DeliveryOptions)