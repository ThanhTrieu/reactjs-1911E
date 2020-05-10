import React from 'react';
import LayoutTodo from '../components/todo/LayoutTodo';
import AddTodo from '../components/todo/AddTodo';
import ListTodo from '../components/todo/ListTodo';

export default class Todo extends React.Component {
  render() {
    return(
      <>
        <LayoutTodo>
          <AddTodo/>
          <ListTodo/>
        </LayoutTodo>
      </>
    )
  }
}