import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";

import App from "./App";
import store from "./store";
import "./locales/i18n";
import { createAppTheme } from "./theme/theme";

function AppWithTheme() {
  const mode = useSelector((state) => state.theme.mode);

  React.useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const theme = React.useMemo(
    () => createAppTheme(mode),
    [mode]
  );

  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <AppWithTheme />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);