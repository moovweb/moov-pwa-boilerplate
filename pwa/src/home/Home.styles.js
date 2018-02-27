import theme from '../theme'
const { main, contrastText } = theme.palette.primary

export default {
  store: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    padding: '10px 0',

    '& svg': {
      color: '$link',
    },

    '& > *': {
      margin: '0 2px',
    },

    '& a': {
      marginLeft: '10px',
      fontWeight: 'normal',
      fontSize: '12px',
      textDecoration: '!important'
    },
  },

  pindrop: {
    fontSize: '16px',
  },

  fullWidth: {
    width: '100vw',
    display: 'block',
  },

  button: {
    flex: '1',
    margin: '5px',
    backgroundColor: `${main} !important`,
    color: contrastText
  },

  buttons: {
    margin: '5px',
  },

  tiles: {
    flexWrap: 'wrap',
  },

  tile: {
    width: 'calc(50vw - 15px)',
    backgroundColor: '#EDEDED',
    margin: '5px',
    padding: '10px',
    boxSizing: 'borderBox',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: main,
    textDecoration: 'none !important',

    '& img': {
      width: '100%',
    },

    '& svg': {
      color: main,
      position: 'relative'
    },

    '& div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
    },
  },

  expander: {
    backgroundColor: main,
    padding: '7px',
    fontSize: '16px',
    fontWeight: 'bold',
    display: 'flex',
    color: 'white',
    alignItems: 'center',
    marginBottom: '1px',
    svg: {
      marginRight: '10px',
    },
  },

  signUp: {
    padding: '5px',

    '& >*': {
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      color: main,
      fontWeight: 'bold',
    },

    '& >*:firstChild': {
      borderRight: '1px solid $shade',
    },

    '& svg': {
      marginBottom: '10px',
    },
  },

  call: {
    backgroundColor: '#3963b2',
    color: 'white',
    fontSize: '16px',
    padding: '20px',
    textAlign: 'center',
    lineHeight: '40px',
  },

  tel: {
    fontWeight: 'bold',
  },

  social: {
    background: main,
  }
}