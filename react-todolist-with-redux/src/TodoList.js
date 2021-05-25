import React, { Component } from 'react';
// Components
import Title from './components/Title'
import List from './components/List'
import TodoForm from './components/TodoForm'
// redux
import { createStore } from 'redux'
import todoReducer from './reducers/index'
// react with redux
import { Provider } from 'react-redux'

let store = createStore(todoReducer);

class TodoList extends Component {
  constructor() {
    super()
    // 資料由store提供
    // let todos = [
    //   { id: 0, text: '吃飯' },
    //   { id: 1, text: '上學' },
    //   { id: 2, text: '睡覺' },
    // ]
    // this.state = {
    //   todos: todos,
    //   startId: 3,
    // }
  }

  // 更改資料的function由dispatch action觸發
  // // 新增待辦事項
  // createTodo(text) {
  //   this.setState({
  //     todos: [...this.state.todos, {
  //       id: this.state.startId,
  //       text: text
  //     }],
  //     startId: this.state.startId + 1
  //   })
  // }

  // // 刪除待辦事項
  // removeTodo(id) {
  //   this.setState({
  //     todos: this.state.todos.filter(todo => {
  //       return todo.id !== id
  //     })
  //   })
  // }

  render() {
    return (
      <Provider store={store}>
        <div>
          <Title />
          <TodoForm />
          <List />
        </div>
      </Provider>)
    // 沒有Provider提供redux時 返回如下
    // <div>
    //     <Title
    //       todos={this.state.todos}
    //     />
    //     <TodoForm
    //       createTodo={text => this.createTodo(text)}
    //     />
    //     <List
    //       todos={this.state.todos}
    //       remove={id => this.removeTodo(id)}
    //     />
    //   </div>
  }
}

export default TodoList;
