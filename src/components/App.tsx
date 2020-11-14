import React from "react";
import { Provider } from "react-redux";
import store from "store";
import AppRouter from "components/AppRouter";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "styles/theme";
import { GlobalStyle } from "styles/globalStyles";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
