import React from 'react';
import { Layout } from 'antd';
import HeaderPage from './common/HeaderPage';
import SidebarPage from './common/SideBarPage';
import FooterPage from './common/FooterPage';
const PageLayout = (props) => {
  return (
    <>
      <Layout>
        <SidebarPage/>
        <Layout>
          <HeaderPage/>
          {props.children}
          <FooterPage/>
        </Layout>
      </Layout>
    </>
  )
}
export default PageLayout;