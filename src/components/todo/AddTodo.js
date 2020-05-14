import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const AddTodo = (props) => {
  return (
    <>
      <Search
        placeholder="input add text"
        enterButton="Add"
        size="large"
        value={props.value}
        onSearch={value => props.add(value)}
        onChange={props.change}
      />
    </>
  )
  }
export default AddTodo
