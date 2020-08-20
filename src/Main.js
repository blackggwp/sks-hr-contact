import React from 'react';
import Portal from './Portal';

import { Layout, Menu, Breadcrumb } from 'antd';
import { HeaderText } from './components/Text';

function Main() {

const { Header, Content, Footer } = Layout;

return (

  <Layout className="layout">
    <Header>
      <HeaderText>Sukishi</HeaderText>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        {/* <Menu.Item key="1">nav 1</Menu.Item> */}
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        {/* <Breadcrumb.Item>Home</Breadcrumb.Item> */}
      </Breadcrumb>
      <div className="site-layout-content">
        <Portal />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Sukishi ©2020 Footer</Footer>
  </Layout>
);

}

export default Main;
