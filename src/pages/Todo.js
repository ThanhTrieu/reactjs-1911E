import React from 'react';
import LayoutTodo from '../components/todo/LayoutTodo';
import AddTodo from '../components/todo/AddTodo';
import ListTodo from '../components/todo/ListTodo';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listTodo: [],
      idTodo: 1,
      valueInput: ""
    }
  }

  addTodo = (nameWork) => {
    // thuc su co nhap cong viec thi moi them
    if(nameWork.length > 0){
      // them cong viec vao array state listTodo
      // cap nhat lai state listTodo
      this.setState({
        ...this.state,
        idTodo: this.state.idTodo + 1,
        valueInput: "",
        listTodo: [...this.state.listTodo, {
          id: this.state.idTodo,
          name: nameWork,
          done: false
        }]
      })
    }
  }

  removeTodo = (id) => {
    const dataTodo = this.state.listTodo.filter(todo =>  todo.id !== id);
    // cap nhat lai state
    this.setState({
      ...this.state,
      listTodo: dataTodo
    })
  }

  changeDoneTodo = (id) => {
    const doneWork = this.state.listTodo.map(todo => {
      return todo.id === id ? {...todo, done: !todo.done} : todo;
    })
    this.setState({
      ...this.state,
      listTodo:doneWork
    })
  }

  getValueInput = (event) => {
    const value = event.target.value;
    this.setState({
      ...this.state,
      valueInput: value
    })
  }

  render() {
    console.log(this.state.listTodo)
    return(
      <>
        <LayoutTodo>
          <AddTodo
            add={this.addTodo}
            change={this.getValueInput}
            value={this.state.valueInput}
          />
          <ListTodo
            data={this.state.listTodo}
            delete={this.removeTodo}
            done={this.changeDoneTodo}
          />
        </LayoutTodo>
      </>
    )
  }
}