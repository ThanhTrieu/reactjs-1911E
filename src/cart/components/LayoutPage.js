import React from 'react';
import { Layout } from 'antd';
import HeaderPage from './partials/HeaderPage';
import FooterPage from './partials/FooterPage';
const LayoutPage = (props) => {
  return (
    <>
      <Layout className="layout">
        <HeaderPage/>
        {props.children}
        <FooterPage/>
      </Layout>
    </>
  )
}
export default LayoutPage;