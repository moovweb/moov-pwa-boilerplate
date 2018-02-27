import theme from './theme'
const { link }  = theme.palette.text
const { shade } = theme.palette.background

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
      background: shade,
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

    
        
  }
}