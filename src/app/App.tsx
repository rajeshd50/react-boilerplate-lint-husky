import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from 'store/store';

import AppRoute from '../routes/AppRoute';
import theme from '../theme/default/default';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <SnackbarProvider maxSnack={3}>
                <AppRoute />
              </SnackbarProvider>
            </ThemeProvider>
          </StyledEngineProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
