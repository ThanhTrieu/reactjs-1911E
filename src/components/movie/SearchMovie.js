import React from 'react'
import { Input } from 'antd';

const { Search } = Input;

const SearchMovie = (props) => {
  return (
    <>
     <Search
        placeholder="search movie ... "
        enterButton="Search"
        size="large"
        onSearch={value => props.search(value)}
      />
    </>
  )
}

export default SearchMovie
