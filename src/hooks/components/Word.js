import React from 'react';
import { Row, Col, Button, Typography, Skeleton } from 'antd';
const { Text } = Typography;

const Word = (props) => {
  return(
    <>
      {props.data.Global ? (
        <Row>
          <Col span={8}>
              <span>Nhiem benh</span>
              <Button type="primary" danger>
                {props.data.Global.TotalConfirmed}
              </Button>
              <br/>
              <span>Moi nhiem</span>
              + <Text type="danger"> {props.data.Global.NewConfirmed}</Text>
          </Col>
          <Col span={8}>
            <span>Tu vong</span>
            <Button type="primary" style={{backgroundColor:'black'}}>
              3242343
            </Button>
            <br/>
            <span>Moi Tu vong</span>
            + <Text> 11212</Text>
          </Col>
          <Col span={8}>
            <span>Khoi benh</span>
            <Button type="primary" style={{backgroundColor:'green'}}>
              3242343
            </Button>
            <br/>
            <span>Moi khoi</span>
            + <Text> 11212</Text>
          </Col>
        </Row>
      ) : (<Skeleton active/>)}
      
    </>
  )
}

export default Word;