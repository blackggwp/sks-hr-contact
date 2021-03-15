import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import "./css/index.css";
import "./css/App.css";
import NavbarDemo from "./components/NavbarDemo";
import Main from "./Main";

const hist = createBrowserHistory({
  basename: "/contact"
});

export default function App() {
  return (
    <Router history={hist}>
      <NavbarDemo />
      <Main />
    </Router>
  );
}
