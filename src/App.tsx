import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Portal from './components/Portal';
import Status from './components/Status';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
        <Switch>
          <Route path="/status/:hospitalId" component={Status} />

          <Route component={Portal} />
        </Switch>
  </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;
