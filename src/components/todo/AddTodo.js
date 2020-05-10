import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const AddTodo = () => {
  return (
    <>
      <Search
        placeholder="input add text"
        enterButton="Add"
        size="large"
        onSearch={value => console.log(value)}
      />
    </>
  )
  }
export default AddTodo
