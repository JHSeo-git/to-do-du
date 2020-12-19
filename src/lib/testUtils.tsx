import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import HelmetGlobal from 'components/base/HelmetGlobal';
import store from 'store';
import { GlobalStyle } from 'styles/globalStyles';
import { theme } from 'styles/theme';

interface Props {
  children: React.ReactNode;
}

const AllTheProviders = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme.lightTheme}>
        <HelmetProvider>
          <HelmetGlobal />
          <GlobalStyle />
          {children}
        </HelmetProvider>
      </ThemeProvider>
    </Provider>
  );
};

const customRender = (ui: any, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
