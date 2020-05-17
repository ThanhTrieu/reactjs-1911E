import React from 'react';
import { Row, Col } from 'antd';

const PageLayout = (props) => {
  return (
    <>
      <Row>
        <Col span={18} offset={3}>
          {props.children}
        </Col>
      </Row>
    </>
  )
}
export default PageLayout;