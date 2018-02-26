import theme from './theme'
import color from 'color'

const shimmer = color('#eee')
const { link }  = theme.palette.text.link

export default {
  app: {
    marginTop: '56px'
  },

  '@global': {
    body: {
      margin: '0',
      padding: '0',
      fontFamily: 'Roboto, sans-serif',
      color: '$text',
      fontSize: '14px',
    },
    
    h1: {
      fontSize: '14px',
      fontWeight: 'bold',
      background: '$shade',
      color: '$text',
      padding: '10px',
      marginTop: '0',
      borderBottom: '1px solid #CCC',
      minHeight: '14px',
    },
    
    h2: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: link,
    },
    
    a: {
      textDecoration: 'underline',
      color: link,
    },
    
    '.field': {
      label: {
        fontWeight: 'bold',
        color: 'black',
      },
      '.value': {
        color: '#666',
      }
    },

    '@keyframes my-animation': {
      from: {
        backgroundPosition: '-468px 0'
      },
      to: {
        backgroundPosition: '468px 0'
      }
    },
    
    '.animatedBackground': {
      animationDuration: '1s',
      animationFillMode: 'forwards',
      animationIterationCount: 'infinite',
      animationName: 'placeHolderShimmer',
      animationTimingFunction: 'linear',
      background: '#f6f7f8',
      background: `linear-gradient(to right, ${shimmer.hex()} 8%, ${shimmer.darken(0.03).hex()} 18%, ${shimmer.hex()} 33%)`,
      backgroundSize: '800px 104px',
    }
        
  }
}