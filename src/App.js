import React from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './css/index.css';
import './css/App.css';
import Home from './Home';
import Page404 from './views/Page404';
import ContactOutlet from './views/ContactOutlet'
import NavbarDemo from './components/NavbarDemo';

const hist = createBrowserHistory();

export default function App() {
  return (
    // <Router history={hist}>
    <Router history={hist} basename={"/contact"}>
      <NavbarDemo />
      <Switch>
        <Route exact
          path={`${process.env.PUBLIC_URL}/`}>
          <Home />
        </Route>
        <Route
          path={`${process.env.PUBLIC_URL}/outlet`}>
          <ContactOutlet />
        </Route>
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}
