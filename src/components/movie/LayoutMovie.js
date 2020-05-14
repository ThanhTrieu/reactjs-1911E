import React from 'react';
import { Row, Col } from 'antd';


const LayoutMovie = (props) => {
  return (
    <>
      <Row>
        <Col span={8} offset={8}>
          {props.children}
        </Col>
      </Row>
    </>
  )
}
export default LayoutMovie
