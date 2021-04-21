import React, { useState } from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import "./css/index.css";
import "./css/App.css";
import NavbarDemo from "./components/NavbarDemo";
import ErrorBoundary from "./components/ErrorBoundary";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import color from "@material-ui/core/colors/lime";
import MyContext from "./contexts/MyContext";

const hist = createBrowserHistory({
  basename: "/contact",
});

export default function App() {
  const [percen, setPercen] = useState(0);
  const theme = createMuiTheme({
    palette: {
      primary: color,
    },
  });
  const handlePercen = (value: number) => {
    setPercen(value);
    if (value === 100) {
      setPercen(0);
    }
  };
  const context = {
    api: {
      percen: percen,
      handlePercen,
    },
  };

  return (
    <MyContext.Provider value={context}>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <Router history={hist}>
            <NavbarDemo />
          </Router>
        </ErrorBoundary>
      </ThemeProvider>
    </MyContext.Provider>
  );
}
