import React from 'react';
import { Layout } from 'antd';

import {
  Link
} from "react-router-dom";

const { Sider } = Layout;

const SiderPage = () => {
  return (
    <>
      <Sider style={{backgroundColor: 'pink'}}>
        <Link to="/">Home Page</Link>
        <br/>
        <Link to="/contact">Contact Page</Link>
        <br/>
        <Link to="/login">login</Link>
      </Sider>
    </>
  )
}
export default SiderPage;