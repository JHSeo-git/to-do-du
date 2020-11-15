import React from "react";
import { Provider } from "react-redux";
import store from "store";
import AppRouter from "components/AppRouter";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { GlobalStyle } from "styles/globalStyles";
import HelmetTemplate from "./base/HelmetTemplate";

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
