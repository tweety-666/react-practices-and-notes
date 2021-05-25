import React, { Component } from 'react';
import { connect } from 'react-redux';

class Title extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <h1>
            to-do({getErrorMsg(this.props)})
          </h1>
        </div>
      </div>
    );
  }
}

const getErrorMsg = props => {
  if (!props.isFetching) {
    switch (props.error) {
      case 401:
        return '[ERROR 401]';
      case 404:
        return '找不到這頁耶QQ';
      case 500:
        return '內部伺服器錯誤><';
      case 200:
        return props.todos.length;
      default:
        return '[ERROR]';
    }
  } else {
    return '載入中';
  }
};

const mapStateToProps = state => {
  return {
    todos: state.todos,
    isFetching: state.isFetchingTodoList,
    error: state.error
  };

};

export default connect(mapStateToProps)(Title);
