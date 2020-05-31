import React from 'react';
import { Layout } from 'antd';
import HeaderPage from './commons/HeaderPage';
import FooterPage from './commons/FooterPage';

const PageLayout = (props) => {
  return(
    <>
      <Layout className="layout">
        <HeaderPage/>
        {props.children}
        <FooterPage/>
      </Layout>
    </>
  )
}
export default React.memo(PageLayout);