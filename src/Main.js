import React from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import "./css/index.css";
import "./css/App.css";
import Home from "./Home";
import Page404 from "./views/Page404";
import ContactOutlet from "./views/ContactOutlet";
import { Layout } from "antd";

const { Content, Footer } = Layout;

const Main = () => (
  <main>
    <Layout className="layout">
      <Content style={{ padding: "0 20px" }}>
        <div className="site-layout-content">
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`}>
              <Home />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/hq`}>
              <Home />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/outlet`}>
              <ContactOutlet />
            </Route>
            <Route component={Page404} />
          </Switch>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Sukishi ©2020</Footer>
    </Layout>
  </main>
);

export default Main;
