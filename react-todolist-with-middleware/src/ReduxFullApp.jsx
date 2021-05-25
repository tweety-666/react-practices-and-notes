import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// components
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Title from './components/Title';
// redux and middleware
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import todoReducerCreator from './reducers';
import { fetchTodosFromServer } from './actions';
import thunk from 'redux-thunk';
import { logger, crashReporter } from './middlewares';

// todo state初始值
const initTodoState = {
  todos: [],
  isFetchingTodoList: false,
  error: null,
};

// 建立Store
let store = createStore(
  todoReducerCreator(initTodoState), // reducer
  initTodoState, // 初始state 會覆蓋過store內寫過的
  applyMiddleware(thunk, logger, crashReporter) // Middlewar
);

// App本體
class ReduxFullApp extends Component {
  constructor(props) {
    super(props);
    this.apiurl = 'http://598071fd5b25f700119caaf6.mockapi.io/api/v2/todo';
  }

  // 啟動時從假資料API載入待辦事項
  componentDidMount() {
    store.dispatch(fetchTodosFromServer(1));
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <div>
            <Title />
            <TodoForm />
            <TodoList />
          </div>
        </div>
      </Provider>
    );
  }
}

export default ReduxFullApp;
