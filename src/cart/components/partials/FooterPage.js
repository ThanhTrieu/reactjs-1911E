import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterPage = () => {
  return(
    <>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Created by Ant UED</Footer>
    </>
  )
}
export default React.memo(FooterPage);