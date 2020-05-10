import React from 'react';
import { List, Checkbox } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

const ListTodo = () => {
  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Checkbox/>}
              title={<a href="https://ant.design">{item.title}</a>}
            />
            <div>
              <DeleteOutlined />
            </div>
          </List.Item>
        )}
      />
    </>
  )
}
export default ListTodo
