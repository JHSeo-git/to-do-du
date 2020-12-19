import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import HelmetGlobal from 'components/base/HelmetGlobal';
import store from 'store';
import { GlobalStyle } from 'styles/globalStyles';
import { theme } from 'styles/theme';
import { createMemoryHistory, MemoryHistory } from 'history';
import { Router } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

interface RouteProps {
  route?: string;
  history?: MemoryHistory;
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

const withRouterRender = (
  ui: any,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  }: RouteProps = {},
  options?: any
) => {
  return {
    ...render(<Router history={history}>{ui}</Router>, {
      wrapper: AllTheProviders,
      ...options,
    }),
  };
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
export { withRouterRender as renderWithRouter };
