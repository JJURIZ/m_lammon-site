import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFF',
    },
    secondary: {
      main: '#FFF',
    },
  },
  typography: {
      fontFamily: "'Raleway', sans-serif",
      fontSize: '3rem',
      h1: {
          fontSize: '5rem'
      },
      h2: {
        fontSize: '4rem'
      },
      h3: {
        fontSize: '3rem'
      },
      h6: {
          fontSize: '2rem'
      }
  }
});

export default theme;