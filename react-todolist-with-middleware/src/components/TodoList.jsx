import React, { Component } from 'react';
import { SimpleList } from '../StyledComponents';
import { connect } from 'react-redux';
import Todo from './Todo';
import { removeTodo } from '../actions';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const todoNode = this.props.todos.map(todo => {
      return <Todo todo={todo} key={todo.id} remove={this.props.remove} />;
    });
    return (
      <div>
        <SimpleList>
          {todoNode}
        </SimpleList>
      </div>
    );
  }
}

// Connect store state props
const mapStateToProps = state => {
  return {
    todos: state.todos,
    error: state.error
  };
};

// Connect store action props
const mapDispatchToProps = dispatch => {
  return {
    remove: id => {
      dispatch(removeTodo(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
