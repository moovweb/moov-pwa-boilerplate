import theme from '../theme'

export default {
  search: {
    backgroundColor: theme.palette.background.shade,
    padding: '15px 10px',
    display: 'flex',
    
    '& input': {
      padding: '0 10px',
      lineHeight: '16px',
      fontSize: '16px',
      flex: '1',
      borderRadius: '3px',
      border: 'none',
    }
  },

  icon: {
    background: 'url(//assets.moovweb.net/a10cacb0-b6bc-4608-9e86-72e8d8d8bf77/b202d696-1377-4bc9-abc3-59bdfef12e41/v212/images/sprites.png) 0 -1162.78px no-repeat',
    backgroundSize: '126.67px 1649.44px',
    width: '30px',
    height: '22.78px',
    margin: '5px 0 5px 20px',
  }
}