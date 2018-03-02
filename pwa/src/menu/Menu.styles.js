import theme from '../theme'

const { main, contrastText } = theme.palette.primary

export default {
  drawer: {
    backgroundColor: main,
    display: 'flex',
    flexDirection: 'column',
  },

  button: {
    color: contrastText
  },
  
  back: {
    marginRight: '0',
    color: 'white',
  },
  
  headerText: {
    paddingLeft: '5px',
    fontWeight: 'bold',
    color: contrastText,
  },
  
  menuWrap: {
    width: '250px',
    overflowY: 'auto',
    flex: 1,
  },
  
  hbox: {
    display: 'flex',
    flexDirection: 'row',
    transition: 'all ease-out .2s'
  },
  
  listItem: {
    color: contrastText,
  }
}
