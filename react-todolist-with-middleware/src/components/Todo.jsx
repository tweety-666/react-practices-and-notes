import React, { Component } from 'react';
import {
  TodoItem,
  FlexContainer,
  Clickable,
  TodoText
} from '../StyledComponents';

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TodoItem>
        <FlexContainer>
          <Clickable
            onClick={() => {
              this.props.remove(this.props.todo.id);
            }}
          >
            <TodoText>
              {this.props.todo.text}
            </TodoText>
          </Clickable>
        </FlexContainer>
      </TodoItem>
    );
  }
}

export default Todo;
