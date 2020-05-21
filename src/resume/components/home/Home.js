import React from 'react';
import { Layout } from 'antd';
import PageLayout from '../PageLayout';

const { Content } = Layout;

const HomePage = () => {
  return(
    <>
      <PageLayout>
        <Content>This is home page</Content>
      </PageLayout>
      
    </>
  )
}
export default HomePage;