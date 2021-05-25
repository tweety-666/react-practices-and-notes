import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class TodoForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let input = undefined;

    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.addTodo(input.value);
          input.value = '';
        }}
      >
        <input
          className="form-control col-md-12"
          ref={node => {
            input = node;
          }}
        />
        <br />
      </form>
    );
  }
}

// Connect store action props
const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => {
      dispatch(addTodo(text));
    }
  };
};

export default connect(null, mapDispatchToProps)(TodoForm);
