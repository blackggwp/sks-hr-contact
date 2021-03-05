import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import ContactHQ from './views/ContactHQ';

const { Content, Footer } = Layout;

export default function Home() {
  return (
    <Layout className="layout">
      <Content style={{ padding: '0 20px' }}>
        <div className="site-layout-content">
          <ContactHQ />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Sukishi ©2020</Footer>
    </Layout>
  )
}
