import React from 'react';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import HelmetGlobal from 'components/base/HelmetGlobal';
import store from 'store';
import { GlobalStyle } from 'styles/globalStyles';
import { theme } from 'styles/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <ThemeProvider theme={theme.lightTheme}>
        <HelmetProvider>
          <HelmetGlobal />
          <GlobalStyle />
          <Story />
        </HelmetProvider>
      </ThemeProvider>
    </Provider>
  ),
];
