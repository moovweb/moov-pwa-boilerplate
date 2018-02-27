import theme from '../theme'

export default {
  product: {
    marginBottom: '70px',
    lineHeight: '24px',
  },
  
  carousel: {
    textAlign: 'center',
    margin: '20px 0',
  
    '& img': {
      maxHeight: '206px',
    },
  },
  
  quantity: {
    margin: '5px 15px',
  },
  
  inset: {
    margin: '15px',
  },
  
  deliveryOptions: {
    margin: '0 0 0 15px',
  },
  
  total: {
    backgroundColor: theme.palette.background.shade,
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '10px',
    textAlign: 'right',
  },
  
  availability: {
    color: '#006738',
    fontWeight: 'bold',
  }
}

