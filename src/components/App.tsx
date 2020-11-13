import React from 'react';
import AppRouter from 'components/AppRouter';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'styles/theme';
import { GlobalStyle } from 'styles/globalStyles';

function App() {
  // TODO: redux provider
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
