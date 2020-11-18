import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import AppRouter from "components/AppRouter";
import HelmetTemplate from "components/base/HelmetTemplate";
import store from "store";
import { GlobalStyle } from "styles/globalStyles";
import { theme } from "styles/theme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme.lightTheme}>
        <HelmetTemplate>
          <GlobalStyle />
          <AppRouter />
        </HelmetTemplate>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
