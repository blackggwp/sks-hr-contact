import React from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { Layout } from "antd";
import { HeaderText } from "./Text";
const { Header } = Layout;

export default function NavbarDemo() {
  const location = useLocation()

  return (
    <>
      <Header>
        <div className="logo" />
        <Link to={`${process.env.PUBLIC_URL}/hq`}>
          <HeaderText>Sukishi Contact</HeaderText>
        </Link>
      </Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[location.pathname === "/contact/" && "/hq"]}
        style={{ paddingLeft: 20 }}
      >
        <Menu.Item key={"/hq"}>
          <Link to={`${process.env.PUBLIC_URL}/hq`}>HQ</Link>
        </Menu.Item>
        <Menu.Item key="/outlet">
          <Link to={`${process.env.PUBLIC_URL}/outlet`}>Outlet</Link>
        </Menu.Item>
      </Menu>
    </>
  );
}
