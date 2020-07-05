import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import './header.css';

const { Header } = Layout;

const HeaderPage = () => {
  return(
    <>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="2">
            <NavLink to="/">Product</NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to="/cart">Cart</NavLink>
          </Menu.Item>
          
        </Menu>
      </Header>
    </>
  )
}
export default React.memo(HeaderPage);