import createTheme from 'moov-pwa/createTheme'

const theme = createTheme({
  palette: {
    addToCart: {
      background: 'green',
      contrastText: 'white'
    },
    spacing: {
      container: 15,
      row: 15
    }
  }
});

export default theme