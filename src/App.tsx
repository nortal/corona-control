import React from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Portal from './components/Portal';
import Status from './components/Status';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
    <HashRouter>
        <Switch>
          <Route path="/status/:hospitalId" component={Status} />

          <Route component={Portal} />
        </Switch>
  </HashRouter>
  </ThemeProvider>
  );
}

export default App;
