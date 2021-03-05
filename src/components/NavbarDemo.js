import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom'
import { Layout } from 'antd';
import { HeaderText } from './Text'
const { Header } = Layout;

export default function NavbarDemo() {
  return (
    <>
      <Header>
        <div className="logo" />
        <Link to={`${process.env.PUBLIC_URL}/`}>
          <HeaderText>Sukishi Contact</HeaderText>
        </Link>
      </Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}
        style={{ paddingLeft: 20 }}
      >
        <Menu.Item key="1">
          <Link to={`${process.env.PUBLIC_URL}/`}>
            HQ
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={`${process.env.PUBLIC_URL}/outlet`}>
            Outlet
          </Link>
        </Menu.Item>
      </Menu>
    </>
  )
}
