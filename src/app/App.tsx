import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';

import AppRoute from '../routes/AppRoute';
import theme from '../theme/default/default';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider maxSnack={3}>
        <AppRoute />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
