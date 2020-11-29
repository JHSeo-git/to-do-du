import React from "react";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";
import AppRouter from "components/AppRouter";
import HelmetGlobal from "components/base/HelmetGlobal";
import store from "store";
import { GlobalStyle } from "styles/globalStyles";
import { theme } from "styles/theme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme.lightTheme}>
        <HelmetProvider>
          <HelmetGlobal />
          <GlobalStyle />
          <AppRouter />
        </HelmetProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
