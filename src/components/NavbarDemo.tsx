import React from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { Layout } from "antd";
import { HeaderText } from "./Text";
const { Header } = Layout;

export default function NavbarDemo() {
  const location = useLocation()
  // console.log(location.pathname)

  return (
    <>
      <Header>
        <div className="logo" />
        {/* <Link to={`${process.env.PUBLIC_URL}/hq`}> */}
        <Link to='/hq'>
          <HeaderText>Sukishi Contact</HeaderText>
        </Link>
      </Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[location.pathname === "/" ? "/hq" : location.pathname]}
        style={{ paddingLeft: 20 }}
      >
        <Menu.Item key={"/hq"}>
          <Link to='/hq'>HQ</Link>
        </Menu.Item>
        <Menu.Item key="/outlet">
          <Link to='/outlet'>Outlet</Link>
        </Menu.Item>
      </Menu>
    </>
  );
}
