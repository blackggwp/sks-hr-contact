import React from "react";
import { Route, Switch } from "react-router-dom";
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
            <Route exact path='/'>
              <Home />
            </Route>
            {/* <Route path={`${process.env.PUBLIC_URL}/hq`}> */}
            <Route path='/hq'>
              <Home />
            </Route>
            {/* <Route path={`${process.env.PUBLIC_URL}/outlet`}> */}
            <Route path='/outlet'>
              <ContactOutlet />
            </Route>
            <Route component={Page404} />
          </Switch>
        </div>
      </Content>
      <Footer style={{
        textAlign: "center",
        position: 'fixed',
        bottom: 0,
        width: '100%',
        padding: '10px 50px'
      }}>Sukishi ©2020</Footer>
    </Layout>
  </main>
);

export default Main;
