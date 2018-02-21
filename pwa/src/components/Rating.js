import Star from 'material-ui-icons/Star'
import StarBorder from 'material-ui-icons/StarBorder'
import StarHalf from 'material-ui-icons/StarHalf'

export default function Rating({value}) {
  let stars = []
  
  for (let i=1; i<=5; i++) {
    if (value > i) {
      stars.push()
    }
  }
}