import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Breadcrumb } from 'antd';
import LayoutPage from '../../components/LayoutPage';
import ListItem from '../../components/home/LitsItem';
import { getDataProduct } from './action';
import { Skeleton } from 'antd';

import '../css/comon.css';

const { Content } = Layout;

const HomePage = () => {
  const loading = useSelector(state => state.homeReducer.loading);
  const dataProduct = useSelector(state => state.homeReducer.dataProduct);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataProduct());
  },[]);

  return (
    <>
      <LayoutPage>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
          { loading ? (<Skeleton active />) : (
            <ListItem 
              products={dataProduct}
            />) 
          }
          </div>
        </Content>
      </LayoutPage>
    </>
  )
}

export default React.memo(HomePage);