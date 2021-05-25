import React, { Component } from 'react'
import { connect } from 'react-redux' // connect是用來將redux store跟react component連接 會返回一個已經和store連結的component
class Title extends Component {
  render() {
    // const {
    //   todos,
    // } = this.props
    return (
      <h1>待辦事項清單 ({this.props.todos.length}) </h1>
    )
  }
}

// mapStateToProps等於把store內的state 提供給組件當作props
const mapStateToProps = (state) => {
  return { todos: state.todos }
}

// connect在輸出時調用
export default connect(mapStateToProps)(Title)