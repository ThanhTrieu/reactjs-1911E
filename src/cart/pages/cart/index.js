import React from 'react';
import LayoutPage from '../../components/LayoutPage';
import ListItemCart from '../../components/cart/ListCartItem';
import { Layout, Breadcrumb } from 'antd';
const { Content } = Layout;
const CartPage = () => {
  return (
    <>
      <LayoutPage>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Cart</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <ListItemCart/>
        </Content>
      </LayoutPage>
    </>
  )
}
export default React.memo(CartPage);