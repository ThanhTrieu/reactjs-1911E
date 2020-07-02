import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Row, Col, Button, message } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import {addProductToCart} from '../../pages/cart/action';
const { Meta } = Card;


const ListItem = (props) => {
  const startAddCart = useSelector(state => state.cartReducer.startAddCart);
  const dispatch = useDispatch();

  const addCart = (id) => {
    dispatch(addProductToCart(id));
    if(!startAddCart){
      info();
    }
  }

  const info = () => {
    message.success('Add success', 1);
  };

  return (
    <>
    <Row gutter={16}>
      {props.products.map((item, key) => (
        <Col span={6} key={key}>
          <Card
            hoverable
            style={{ width: 350, marginTop: '30px', border: 'none' }}
            cover={<img alt={item.name} src={item.image} />}
          >
            <Meta title={item.name} description={item.price} />
            <div style={{marginTop: '15px'}}>
              <Button type="primary" onClick={() => addCart(item.id)}>
                Add Cart <ShoppingCartOutlined />
              </Button>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  )
}
export default React.memo(ListItem);