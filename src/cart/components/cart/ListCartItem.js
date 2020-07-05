import React from 'react';
import { createStructuredSelector } from 'reselect';
import {useSelector, useDispatch} from 'react-redux';
import { Row, Col, InputNumber,Button } from 'antd';
import { getItemCart, getTotalMoney } from '../../pages/cart/reselect';
import { removeItemInCart, changeQuanlityItemCart } from '../../pages/cart/action';

const ListCartItem = (props) => {
  const { listCart, totalPrice } = useSelector(createStructuredSelector({
    listCart: getItemCart,
    totalPrice: getTotalMoney
  }));
  const dispatch = useDispatch();

  const removeItemCart = (id) => {
    dispatch(removeItemInCart(id));
  }

  const changeQuanlityCart = (qty, id) => {
    dispatch(changeQuanlityItemCart(id, qty));
  }

  return (
    <>
      <Row>
        <Col span={6} offset={18}>
          Tong tien: {totalPrice}
        </Col>
      </Row>
    {listCart.map((item, index) => (
      <Row key={index} style={{border: '1px solid #ccc', marginTop: '30px', padding: '10px'}}>
        <Col span={4}>
          <img width="50%" src={item.image} />
        </Col>
        <Col span={20}>
          <h3>{item.name}</h3>
          <p>Price: {item.price}</p>
          <InputNumber 
            min={1}
            max={10}
            defaultValue={item.qty}
            onChange={(value) => changeQuanlityCart(value, item.id)}
          />
          <br/>
          <Button 
            style={{marginTop: '5px'}}
            type="dashed"
            onClick={() => removeItemCart(item.id)}
          >Remove</Button>
        </Col>
      </Row>
    ))}
    </>
  )
}
export default React.memo(ListCartItem);