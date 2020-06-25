import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

const ListItem = (props) => {
  return (
    <>
      <Card
        hoverable
        style={{ width: 350 }}
        cover={<img alt={props.title} src={props.image} />}
      >
        <Meta title={props.title} description={props.price} />
      </Card>
    </>
  )
}
export default React.memo(ListItem);