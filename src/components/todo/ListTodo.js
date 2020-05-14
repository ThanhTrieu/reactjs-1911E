import React from 'react';
import { List, Checkbox, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const { Text } = Typography;

const ListTodo = (props) => {
  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={props.data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Checkbox
                checked={item.done}
                onClick={() =>props.done(item.id)}
              />}
              title={<Text
                delete={item.done}
                onClick={() => props.done(item.id)}
              >
                {item.name}
              </Text>}
            />
            <div>
              <DeleteOutlined
                onClick={() => props.delete(item.id)}
              />
            </div>
          </List.Item>
        )}
      />
    </>
  )
}
export default ListTodo
